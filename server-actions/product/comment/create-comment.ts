"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import createActivityForFeedbackSection from "@/lib/product/create-activity";
import checkMembershipInSection from "@/lib/product/check-membership-in-section";
import getCurrentUser from "@/lib/user/get-current-user";
import { createCommentSchema } from "@/schemas/@product-actions-schemas";

export const createComment = action(
  createCommentSchema,
  async ({ sectionId, feedbackId, content }) => {
    if (!sectionId || !feedbackId || !content)
      throw new Error("Invalid parameters");

    const currentUser = await getCurrentUser();

    if (!currentUser) throw new Error("User not found");

    const currentUserIsMember = await checkMembershipInSection(
      sectionId,
      currentUser.id
    );

    if (!currentUserIsMember)
      throw new Error("Current user is not a member of this section");

    let comment;

    try {
      comment = await prisma.commentsToFeedback.create({
        data: {
          authorId: currentUser.id,
          feedbackId: feedbackId,
          content: content,
        },
      });
    } catch {
      throw new Error("Failed to create comment");
    }

    await createActivityForFeedbackSection(
      sectionId,
      currentUser.id,
      "Create comment to feedback"
    );

    return { success: comment };
  }
);
