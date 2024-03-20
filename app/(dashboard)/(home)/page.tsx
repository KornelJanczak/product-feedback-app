import { redirect } from "next/navigation";
import FilterBar from "./_components/filter-bar";
import Container from "./_components/container";
import getCurrentUser from "@/lib/user/get-current-user";
import prisma from "@/lib/db";
import NoResult from "@/components/no-result";
import SectionCard from "./_components/section-card";
import { Suspense } from "react";
import { ContainerSkeleton } from "./_components/container";
import SortFeedbackSections from "@/lib/product/sort-feedback-sections";

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
        suggestions: {},
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

  const isExist = feedbackSections && feedbackSections.length > 0;

  if (isExist) {
    SortFeedbackSections(sortBy, feedbackSections);
    return (
      <Suspense
        fallback={
          <ContainerSkeleton skeletonCount={feedbackSections!.length} />
        }
      >
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
      </Suspense>
    );
  }

  if (!isExist)
    return (
      <NoResult
        title="There is no section yet."
        description="Have big commercial project? Create your own section and work with your team together!"
      />
    );
}
