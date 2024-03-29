"use server";
import { action } from "@/lib/clients/safe-action-client";
import getCurrentUser from "@/lib/user/get-current-user";
import { deleteCommentOrReplySchema } from "@/schemas/@product-actions-schemas";
import prisma from "@/lib/db";
import checkMembershipInSection from "@/lib/product/check-membership-in-section";
import { revalidatePath } from "next/cache";
import createActivityForFeedbackSection from "@/lib/product/create-activity";

export const deleteCommentOrReply = action(
  deleteCommentOrReplySchema,
  async ({ feedbackId, commentId, replyId, sectionId, actionType }) => {
    if (actionType === "comment" && (!feedbackId || !commentId || !sectionId)) {
      throw new Error("Invalid parameters");
    }

    if (actionType === "reply" && (!feedbackId || !replyId || !sectionId)) {
      throw new Error("Invalid parameters");
    }

    const currentUser = await getCurrentUser();

    if (!currentUser) throw new Error("User not found");

    const currentUserIsMember = await checkMembershipInSection(
      sectionId,
      currentUser.id
    );

    if (!currentUserIsMember)
      throw new Error("Current user is not a member of this section");

    let prismaQuery;
    if (actionType === "reply") {
      try {
        prismaQuery = await prisma.repliesToComments.delete({
          where: {
            id: replyId,
          },
        });
      } catch {
        throw new Error("Failed to delete reply");
      }
    }

    if (actionType === "comment") {
      try {
        prismaQuery = await prisma.commentsToFeedback.delete({
          where: {
            id: commentId,
          },
        });
      } catch {
        throw new Error("Failed to delete comment");
      }
    }

    await createActivityForFeedbackSection(
      sectionId,
      currentUser.id,
      `Delete ${actionType} from feedback`
    );

    revalidatePath(`/section/${sectionId}/feedback/${feedbackId}`);
    return { success: prismaQuery };
  }
);
