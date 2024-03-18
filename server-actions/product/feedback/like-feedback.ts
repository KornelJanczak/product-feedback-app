"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/clients/safe-action-client";
import { likeFeedbackSchema } from "@/schemas/@product-actions-schemas";
import prisma from "@/lib/db";

export const likeFeedback = action(
  likeFeedbackSchema,
  async ({ sectionId, currentUserId, feedbackId }) => {
    if (!sectionId || !currentUserId || !feedbackId)
      throw new Error("Invalid input");

    const currentUser = await getCurrentUser();

    if (!currentUser || currentUserId !== currentUser.id)
      throw new Error("Unauthorized");

    let feedback;

    try {
      feedback = await prisma.feedbackToFeedbackSection.findUnique({
        where: {
          id: feedbackId,
        },
        select: {
          likedBy: true,
        },
      });
    } catch {
      throw new Error("Feedback not found");
    }

    if (!feedback) throw new Error("Feedback not found");

    const isLiked = feedback.likedBy.includes(currentUserId);

    if (isLiked) throw new Error("Feedback already liked");

    try {
      feedback = await prisma.feedbackToFeedbackSection.update({
        where: {
          id: feedbackId,
        },
        data: {
          likedBy: {
            push: currentUserId,
          },
        },
      });
    } catch {
      throw new Error("Failed to like feedback");
    }

    if (!feedback) throw new Error("Failed to like feedback");

    return { success: feedback };
  }
);
