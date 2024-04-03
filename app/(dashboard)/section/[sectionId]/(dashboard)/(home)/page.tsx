import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import FeedbackCard from "../../_components/feedback-card/feedback-card";
import FeedbackContainer from "../../_components/feedback-card/feedback-container";
import { FeedbackContainerSkeleton } from "../../_components/feedback-card/feedback-container";
import { Suspense } from "react";
import NoResult from "@/components/no-result";
import sortSuggestions from "@/lib/product/helpers/sort-suggestions";
import getSuggestions from "@/lib/product/get-suggestions";

interface ISearchParams {
  filterBy?: string;
  suggestionTitle?: string;
  sortBy?: string;
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

  const { filterBy, suggestionTitle } = searchParams;

  const data = await getSuggestions({
    sectionId,
    titleFilter: suggestionTitle,
    categoryFilter: filterBy === "all" ? undefined : filterBy,
    currentUserId: currentUser.id,
  });

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
        fallback={
          <FeedbackContainerSkeleton skeletonCount={data.suggestions.length} />
        }
      >
        <FeedbackContainer>
          {data.suggestions.map((suggestion) => (
            <FeedbackCard
              key={suggestion.id}
              currentUserId={currentUser.id}
              currentUserIsAdmin={data.currentUserIsAdmin}
              commentsCount={suggestion.comments.length}
              {...suggestion}
            />
          ))}
        </FeedbackContainer>
      </Suspense>
    );
  }
}
