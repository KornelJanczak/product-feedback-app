import BackButton from "@/components/back-button";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import FeedbackActionButton from "../../_components/feedback-form/feedback-action-button";
import FeedbackCard, {
  FeedbackCardSkeleton,
} from "../../_components/feedback-card/feedback-card";
import CommentContainer, {
  CommentContainerSkeleton,
} from "./_components/comment-container";
import Comment from "./_components/comment";
import getFeedback from "@/lib/product/get-feedback";
import { Suspense } from "react";

export default async function FeedbackPage(params: {
  params: {
    sectionId: string;
    feedbackId: string;
  };
}) {
  const sectionId = params.params.sectionId;
  const feedbackId = params.params.feedbackId;

  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const feedback = await getFeedback(sectionId, feedbackId, currentUser.id);

  if (!feedback) throw new Error("Feedback not found");

  const isCommentsExist = feedback.comments.length > 0;
  const currentUserIsAuthor = feedback.author.id === currentUser.id;

  const totalComments = feedback.comments.length;
  const totalReplies = feedback.comments.reduce(
    (count, comment) => count + comment.replies.length,
    0
  );

  return (
    <>
      <div className="fixed top-0 z-10 w-full flex justify-center items-center  px-5 py-5 bg-basicWhite md:container md:left-0 md:right-0 md:mx-auto md:rounded-b-md">
        <BackButton href={`/section/${sectionId}`} />
        {(feedback.currentUserIsAdmin || currentUserIsAuthor) && (
          <Suspense fallback={<p>Loading...</p>}>
            <FeedbackActionButton
              currentUser={currentUser}
              currentUserIsAdmin={feedback.currentUserIsAdmin}
              actionType="update"
              headerTitle={`Editing ${"`" + feedback.title + "`"}`}
              feedbackId={feedbackId}
              title={feedback.title}
              detail={feedback.detail}
              status={feedback.status}
              category={feedback.category}
            />
          </Suspense>
        )}
      </div>
      <section className="flex flex-col justify-between h-full px-5 mt-24 md:container lg:max-w-4xl xl:max-w-6xl">
        <Suspense fallback={<FeedbackCardSkeleton />}>
          <FeedbackCard
            id={feedbackId}
            feedbackSectionId={sectionId}
            currentUserId={currentUser.id}
            currentUserIsAdmin={feedback.currentUserIsAdmin}
            likedBy={feedback.likedBy}
            title={feedback.title}
            detail={feedback.detail}
            status={feedback.status}
            category={feedback.category}
            commentsCount={feedback.comments.length}
            author={feedback.author}
          />
        </Suspense>
        {isCommentsExist && (
          <Suspense
            fallback={
              <CommentContainerSkeleton skeletonCount={totalComments} />
            }
          >
            <CommentContainer commentsCount={totalComments + totalReplies}>
              {feedback.comments.map((comment) => (
                <Comment
                  key={comment.id}
                  currentUserIsAdmin={feedback.currentUserIsAdmin}
                  currentUserIsAuthor={currentUserIsAuthor}
                  comment={comment as ICommentWithAuthor}
                  replies={comment.replies as ICommentWithAuthor[]}
                />
              ))}
            </CommentContainer>
          </Suspense>
        )}
      </section>
    </>
  );
}
