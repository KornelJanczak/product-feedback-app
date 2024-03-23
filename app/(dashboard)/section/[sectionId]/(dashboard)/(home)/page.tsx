import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import Container, {
  ContainerSkeleton,
} from "../../_components/feedback-card/container";
import Card from "../../_components/feedback-card/card";
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

async function getSuggestions(
  sectionId: string,
  searchParams: ISearchParams,
  currentUserId: string
) {
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
      feedbackSectionId: sectionId,
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

  const currentUserIsAdmin = section.admins.some(
    ({ user }) => user.id === currentUserId
  );

  return { suggestions, currentUserIsAdmin };
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

  const data = await getSuggestions(sectionId, searchParams, currentUser.id);

  if (!data || data.suggestions.length === 0)
    return (
      <NoResult
        title="There no suggestions!"
        description="Feel free to submit new feedback if you'd like to see additional suggestions."
      />
    );

  if (data.suggestions) {
    sortSuggestions(data.suggestions, searchParams.sortBy);
    return (
      <Suspense
        fallback={<ContainerSkeleton skeletonCount={data.suggestions.length} />}
      >
        <Container>
          {data.suggestions.map((suggestion) => (
            <Card
              key={suggestion.id}
              currentUserId={currentUser.id}
              currentUserIsAdmin={data.currentUserIsAdmin}
              commentsCount={suggestion.comments.length}
              {...suggestion}
            />
          ))}
        </Container>
      </Suspense>
    );
  }
}
