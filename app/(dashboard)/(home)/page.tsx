import { redirect } from "next/navigation";
import FilterBar from "./_components/filter-bar";
import Container from "./_components/container";
import getCurrentUser from "@/lib/user/get-current-user";
import prisma from "@/lib/db";
import Card from "./_components/card";
import NoResult from "@/components/no-result";

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
      sortSections(feedbackSections, "least");
      break;

    case "most-members":
      sortSections(feedbackSections, "most");
  }

  const isExist = feedbackSections!.length > 0;

  return (
    <>
      <FilterBar />
      {isExist && (
        <Container>
          {feedbackSections?.map(({ id, title, members, admins }) => (
            <Card
              key={id}
              sectionId={id}
              currentUserId={currentUserId}
              title={title as string}
              members={members}
              admins={admins}
            />
          ))}
        </Container>
      )}
      {!isExist && (
        <NoResult
          title="There is no section yet."
          description="Have big commercial project? Create your own section and work with your team together!"
        />
      )}
    </>
  );
}

function sortSections(feedbackSections: any, sortType: "least" | "most") {
  feedbackSections?.sort((a: any, b: any) => {
    const first = [...a.members, ...a.admins];
    const second = [b.members, ...a.admins];

    if (sortType == "least") return first.length - second.length;
    if (sortType == "most") return second.length - first.length;
  });

  return feedbackSections;
}
