import {
  FeedbackSection,
  FeedbackToFeedbackSection,
  User,
  CommentsToFeedback,
  RepliesToComments,
} from "@prisma/client";

interface IComment extends CommentsToFeedback {
  replies: RepliesToComments[];
}

interface IFeedback extends FeedbackToFeedbackSection {
  comments: IComment[];
}

interface ITransformFeedbackObject extends FeedbackSection {
  members: { user: User }[];
  admins: { user: User }[];
  feedbacks: IFeedback[];
}

export default function transformFeedbackObject(
  section: ITransformFeedbackObject,
  currentUserId: string
) {
  if (!section?.feedbacks || !section) return null;

  if (!section) throw new Error("Section not found");

  const currentUserIsMember = section.members.some(
    ({ user }) => user.id === currentUserId
  );
  const currentUserIsAdmin = section.admins.some(
    ({ user }) => user.id === currentUserId
  );

  if (!currentUserIsMember && !currentUserIsAdmin)
    throw new Error("Unauthorized");

  const feedback = section.feedbacks[0];

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
        ...reply,
        author:
          section.members.find(({ user }) => user.id === reply.authorId)
            ?.user ||
          section.admins.find(({ user }) => user.id === reply.authorId)?.user,
      })),
    })),
  };

  return updatedFeedback;
}
