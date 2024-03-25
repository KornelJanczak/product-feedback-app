"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import createActivityForFeedbackSection from "@/lib/product/create-activity";
import checkMembershipInSection from "@/lib/product/check-membership-in-section";
import getCurrentUser from "@/lib/user/get-current-user";
import { createReplySchema } from "@/schemas/@product-actions-schemas";
import { revalidatePath } from "next/cache";

export const createReply = action(
  createReplySchema,
  async ({ sectionId, commentId, content, feedbackId }) => {
    if (!sectionId || !commentId || !content || !feedbackId)
      throw new Error("Invalid parameters");

    const currentUser = await getCurrentUser();

    if (!currentUser) throw new Error("User not found");

    const currentUserIsMember = await checkMembershipInSection(
      sectionId,
      currentUser.id
    );

    if (!currentUserIsMember)
      throw new Error("Current user is not a member of this section");

    let reply;

    try {
      reply = await prisma.repliesToComments.create({
        data: {
          authorId: currentUser.id,
          commentId,
          content: content,
        },
      });
    } catch {
      throw new Error("Failed to create reply");
    }

    await createActivityForFeedbackSection(
      sectionId,
      currentUser.id,
      "Reply to comment"
    );

    revalidatePath(`/section/${sectionId}/feedback/${feedbackId}`);
    return { success: reply };
  }
);
