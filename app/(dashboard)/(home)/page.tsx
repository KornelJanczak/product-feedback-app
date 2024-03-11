import { redirect } from "next/navigation";
import FilterBar from "./_components/filter-bar";
import Container from "./_components/container";
import getCurrentUser from "@/lib/user/get-current-user";
import prisma from "@/lib/db";
import NoResult from "@/components/no-result";
import SectionCard from "./_components/section-card";
import { Suspense } from "react";

async function getFeedbackSections(
  currentUserId: string,
  sectionTitle: string
) {
  try {
    if (!currentUserId) return null;

    const select = {
      id: true,
      userName: true,
      lastName: true,
      firstName: true,
      image: true,
      // profile: true,
    };

    const userFeedbackSections = await prisma.feedbackSection.findMany({
      where: {
        OR: [
          {
            title: {
              contains: sectionTitle ? sectionTitle : undefined,
            },
            members: {
              some: {
                userId: currentUserId,
              },
            },
          },
          {
            title: { contains: sectionTitle ? sectionTitle : undefined },
            admins: {
              some: {
                userId: currentUserId,
              },
            },
          },
        ],
      },
      include: {
        suggestions: {
          select: {
            count: true,
          },
        },
        members: {
          select: {
            user: {
              select,
            },
          },
        },
        admins: {
          select: {
            user: {
              select,
            },
          },
        },
      },
    });

    if (!userFeedbackSections) return null;

    return userFeedbackSections;
  } catch {
    return null;
  }
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { sectionTitle: string; sortBy: string };
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const { sectionTitle, sortBy } = searchParams;
  const { id: currentUserId } = currentUser;

  const feedbackSections = await getFeedbackSections(
    currentUserId,
    sectionTitle
  );

  switch (sortBy) {
    case "least-members":
      sortSections(feedbackSections, "least", "members");
      break;

    case "most-members":
      sortSections(feedbackSections, "most", "members");
      break;

    case "most-suggestions":
      sortSections(feedbackSections, "most", "suggestions");
      break;

    case "least-suggestions":
      sortSections(feedbackSections, "least", "suggestions");
      break;
  }

  const isExist = feedbackSections!.length > 0;

  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (isExist)
    return (
      <Container>
        {feedbackSections?.map(
          ({ id, title, members, admins, suggestions }) => (
            <SectionCard
              key={id}
              sectionId={id}
              suggestionsNumber={suggestions.length}
              currentUserId={currentUserId}
              title={title as string}
              members={members}
              admins={admins}
            />
          )
        )}
      </Container>
    );

  if (!isExist)
    return (
      <NoResult
        title="There is no section yet."
        description="Have big commercial project? Create your own section and work with your team together!"
      />
    );
}

function sortSections(
  feedbackSections: any,
  sortType: "least" | "most",
  sortBy: "suggestions" | "members"
) {
  feedbackSections.sort((a: any, b: any) => {
    if (sortBy === "members") {
      const first = [...a.members, ...a.admins];
      const second = [b.members, ...a.admins];

      if (sortType == "least") return first.length - second.length;
      if (sortType == "most") return second.length - first.length;
    }

    if (sortBy === "suggestions") {
      const first = a.suggestions.length;
      const second = b.suggestions.length;

      if (sortType == "least") return first.length - second.length;
      if (sortType == "most") return second.length - first.length;
    }
  });

  return feedbackSections;
}
