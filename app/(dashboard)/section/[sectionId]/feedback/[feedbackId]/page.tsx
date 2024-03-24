import BackButton from "@/components/back-button";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import FeedbackActionButton from "../../_components/feedback-form/feedback-action-button";
import FeedbackCard from "../../_components/feedback-card/feedback-card";
import CommentContainer from "./_components/comment-container";
import { CreateCommentForm } from "./_components/create-comment-form";
import CommentCard from "./_components/comment-card";
import transformFeedbackObject from "@/lib/product/transform-feedback-object";

async function getFeedback(
  sectionId: string,
  feedbackId: string,
  currentUserId: string
) {
  if (!sectionId || !feedbackId || !currentUserId)
    throw new Error("Invalid parameters");

  const select = {
    id: true,
    image: true,
    email: true,
    userName: true,
    lastName: true,
    firstName: true,
  };

  const section = await prisma.feedbackSection.findUnique({
    where: {
      id: sectionId,
      feedbacks: {
        some: { id: feedbackId },
      },
    },
    select: {
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
      feedbacks: {
        where: {
          id: feedbackId,
        },
        select: {
          authorId: true,
          title: true,
          category: true,
          detail: true,
          status: true,
          likedBy: true,
          comments: {
            include: {
              replies: true,
            },
          },
        },
      },
    },
  });

  console.log(section);

  if (!section?.feedbacks || !section) return null;

  const feedback = section.feedbacks[0];

  if (!section) throw new Error("Section not found");

  const currentUserIsMember = section.members.some(
    ({ user }) => user.id === currentUserId
  );
  const currentUserIsAdmin = section.admins.some(
    ({ user }) => user.id === currentUserId
  );

  if (!currentUserIsMember && !currentUserIsAdmin)
    throw new Error("Unauthorized");

  const authorIsMember = section.members.find(
    ({ user }) => user.id === feedback.authorId
  );

  const authorIsAdmin = section.admins.find(
    ({ user }) => user.id === feedback.authorId
  );

  const author = authorIsMember || authorIsAdmin;

  if (!author) throw new Error("User not found");

  const updatedFeedback = {
    author: { ...author.user, isAdmin: authorIsAdmin ? true : false },
    currentUserIsAdmin: currentUserIsAdmin,
    title: feedback.title,
    category: feedback.category,
    detail: feedback.detail,
    status: feedback.status,
    likedBy: feedback.likedBy,
    comments: feedback.comments.map((comment) => ({
      ...comment,
      author: {
        isAdmin: section.admins.some(
          ({ user }) => user.id === comment.authorId
        ),
        ...(section.members.find(({ user }) => user.id === comment.authorId)
          ?.user ||
          section.admins.find(({ user }) => user.id === comment.authorId)
            ?.user),
      },
      replies: comment.replies.map((reply) => ({
        isAdmin: section.admins.some(
          ({ user }) => user.id === comment.authorId
        ),
        ...reply,
        author:
          section.members.find(({ user }) => user.id === reply.authorId)
            ?.user ||
          section.admins.find(({ user }) => user.id === reply.authorId)?.user,
      })),
    })),
  };

  // const updatedFeedback = transformFeedbackObject(section, currentUserId);

  return updatedFeedback;
}

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
    <main className="relative md:container flex flex-col justify-between">
      <div className="fixed top-0 z-10 w-full flex justify-center items-center px-5 py-3 bg-basicWhite">
        <BackButton href={`/section/${sectionId}`} />
        {(feedback.currentUserIsAdmin || currentUserIsAuthor) && (
          <FeedbackActionButton
            currentUser={currentUser}
            currentUserIsAdmin={feedback.currentUserIsAdmin}
            actionType="update"
            headerTitle={`Editing ${"`" + feedback.title + "`"}`}
            title={feedback.title}
            detail={feedback.detail}
            status={feedback.status}
            category={feedback.category}
          />
        )}
      </div>
      <section className="flex flex-col justify-between h-full px-5 mt-16">
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
        {isCommentsExist && (
          <CommentContainer commentsCount={totalComments + totalReplies}>
            {feedback.comments.map((comment) => (
              <CommentCard
                id={comment.id}
                createdAt={comment.createdAt}
                key={comment.id}
                author={comment.author as IAuthor}
                content={comment.content}
                currentUserIsAdmin={true}
                currentUserIsAuthor={currentUserIsAuthor}
              />
            ))}
          </CommentContainer>
        )}
      </section>
      <CreateCommentForm feedbackId={feedbackId} sectionId={sectionId} />
    </main>
  );
}
