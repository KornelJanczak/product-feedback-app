"use server";
import prisma from "@/lib/db";
import { action } from "@/lib/clients/safe-action-client";
import getCurrentUser from "@/lib/user/get-current-user";
import { deleteFeedbackSchema } from "@/schemas/@product-actions-schemas";
import { revalidatePath } from "next/cache";
import createActivityForFeedbackSection from "@/lib/product/helpers/create-activity";

export const deleteFeedback = action(
  deleteFeedbackSchema,
  async ({ sectionId, currentUserId, feedbackId }) => {
    if (!sectionId || !currentUserId || !feedbackId)
      throw new Error("Invalid input");

    const currentUser = await getCurrentUser();

    if (!currentUser || currentUserId !== currentUser.id)
      throw new Error("Unauthorized");

    let feedbackSection;

    try {
      feedbackSection = await prisma.feedbackSection.findUnique({
        where: {
          id: sectionId,
        },
        select: {
          admins: {
            select: {
              userId: true,
            },
          },
        },
      });
    } catch {
      throw new Error("Feedback section not found");
    }

    if (!feedbackSection) throw new Error("Feedback section not found");

    let feedback;

    try {
      feedback = await prisma.feedbackToFeedbackSection.findUnique({
        where: {
          id: feedbackId,
        },
        select: {
          authorId: true,
        },
      });
    } catch {
      throw new Error("Feedback not found");
    }

    if (!feedback) throw new Error("Feedback not found");

    const currentUserIsAuthor = feedback.authorId === currentUserId;

    const currentUserIsAdmin = feedbackSection?.admins.some(
      ({ userId }) => userId === currentUserId
    );

    if (currentUserIsAuthor || currentUserIsAdmin) {
      let deletedFeedback;
      console.log(feedbackId);

      try {
        deletedFeedback = await prisma.feedbackToFeedbackSection.delete({
          where: {
            id: feedbackId,
          },
        });

        console.log(deleteFeedback);

        await createActivityForFeedbackSection(
          sectionId,
          currentUserId,
          `Deleted suggestion`
        );

        revalidatePath(`/section${sectionId}`);
        return { success: deletedFeedback };
      } catch (error) {
        throw new Error("Failed to delete feedback");
      }
    } else {
      throw new Error("Unauthorized");
    }
  }
);
