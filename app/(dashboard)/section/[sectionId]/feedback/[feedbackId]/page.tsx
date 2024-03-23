import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";

export async function getFeedback(
  sectionId: string,
  feedbackId: string,
  currentUserId: string
) {
  if (!sectionId || !feedbackId || !currentUserId)
    throw new Error("Invalid parameters");

  const feedback = await prisma.feedbackToFeedbackSection.findUnique({
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
  });

  if (!feedback) throw new Error("Feedback not found");

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
    },
  });

  if (!section) throw new Error("Section not found");

  if (
    !section.members.find(({ user }) => user.id === currentUserId) &&
    !section.admins.find(({ user }) => user.id === currentUserId)
  )
    throw new Error("Unauthorized");

  const user =
    section.members.find(({ user }) => user.id === feedback.authorId) ||
    section.admins.find(({ user }) => user.id === feedback.authorId);

  if (!user) throw new Error("User not found");

  const updatedFeedback = {
    author: user.user,
    title: feedback.title,
    category: feedback.category,
    detail: feedback.detail,
    status: feedback.status,
    likedBy: feedback.likedBy,
    comments: feedback.comments.map((comment) => ({
      ...comment,
      author: section.members.find(({ user }) => user.id === comment.authorId)
        ?.user,
      replies: comment.replies.map((reply) => ({
        ...reply,
        author: section.members.find(({ user }) => user.id === reply.authorId)
          ?.user,
      })),
    })),
  };

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

  console.log(feedback);

  return <></>;
}
