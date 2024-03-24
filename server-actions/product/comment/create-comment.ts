"use server";

import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { createCommentSchema } from "@/schemas/@product-actions-schemas";

export const createComment = action(
  createCommentSchema,
  async ({ sectionId, feedbackId, content }) => {
    if (!sectionId || !feedbackId || !content)
      throw new Error("Invalid parameters");

    const currentUser = await getCurrentUser();

    if (!currentUser) throw new Error("User not found");

    let currentUserIsMember;

    try {
      currentUserIsMember = await prisma.feedbackSection.findUnique({
        where: {
          id: sectionId,
          OR: [
            { members: { some: { userId: currentUser.id } } },
            { admins: { some: { userId: currentUser.id } } },
          ],
        },
      });
    } catch {
      throw new Error("Failed to find section");
    }

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

    return { success: comment };
  }
);
