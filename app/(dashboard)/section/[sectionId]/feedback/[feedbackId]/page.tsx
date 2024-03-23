import BackButton from "@/components/back-button";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import FeedbackActionButton from "../../_components/feedback-form/feedback-action-button";
import FeedbackCard from "../../_components/feedback-card/feedback-card";

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

  return (
    <main className="md:container">
      <div className="flex justify-center items-center p-5">
        <BackButton href={`/section/${sectionId}`} />
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
      </div>
      <section className="px-5">
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
      </section>
      <section>
        
      </section>
    </main>
  );
}
