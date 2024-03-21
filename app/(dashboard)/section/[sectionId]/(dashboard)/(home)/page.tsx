import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import Container, { ContainerSkeleton } from "./_components/container";
import Card from "./_components/card";
import { Suspense } from "react";
import NoResult from "@/components/no-result";
import sortSuggestions from "@/lib/product/sort-suggestions";
import addUserObject, {
  ITransformedFeedbackSection,
} from "@/lib/product/add-user-object";

interface ISearchParams {
  filterBy?: string;
  suggestionTitle?: string;
  sortBy?: string;
}

async function getSuggestions(sectionId: string, searchParams: ISearchParams) {
  if (!sectionId) return null;

  const { filterBy, suggestionTitle } = searchParams;

  let categoryFilter;
  const titleFilter = suggestionTitle
    ? searchParams.suggestionTitle
    : undefined;

  if (filterBy) {
    categoryFilter = filterBy === "all" ? undefined : searchParams.filterBy;
  }

  const feedbacks = await prisma.feedbackToFeedbackSection.findMany({
    where: {
      title: {
        contains: titleFilter,
      },
      category: categoryFilter,
    },
    include: {
      comments: true,
    },
  });

  if (!feedbacks) return null;

  const section = await prisma.feedbackSection.findUnique({
    where: {
      id: sectionId,
    },
    select: {
      members: {
        select: {
          user: {
            select: {
              id: true,
              image: true,
              userName: true,
              lastName: true,
              firstName: true,
            },
          },
        },
      },
      admins: {
        select: {
          user: {
            select: {
              id: true,
              image: true,
              email: true,
              userName: true,
              lastName: true,
              firstName: true,
            },
          },
        },
      },
    },
  });

  if (!section) return null;

  const suggestions = addUserObject(
    feedbacks,
    section
  ) as ITransformedFeedbackSection[];

  if (!section) return null;

  return suggestions;
}

export default async function SectionDashboard({
  params,
  searchParams,
}: {
  params: { sectionId: string };
  searchParams: ISearchParams;
}) {
  const { sectionId } = params;
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const suggestions = await getSuggestions(sectionId, searchParams);

  if (!suggestions || suggestions.length === 0)
    return (
      <NoResult
        title="There no suggestions!"
        description="Feel free to submit new feedback if you'd like to see additional suggestions."
      />
    );

  if (suggestions) {
    sortSuggestions(suggestions, searchParams.sortBy);
    return (
      <Suspense
        fallback={<ContainerSkeleton skeletonCount={suggestions.length} />}
      >
        <Container>
          {suggestions.map((suggestion) => (
            <Card
              key={suggestion.id}
              currentUserId={currentUser.id}
              commentsCount={suggestion.comments.length}
              {...suggestion}
            />
          ))}
        </Container>
      </Suspense>
    );
  }
}
