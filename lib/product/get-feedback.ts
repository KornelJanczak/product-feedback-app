import prisma from "../db";

export default async function getFeedback(
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

  return updatedFeedback;
}
