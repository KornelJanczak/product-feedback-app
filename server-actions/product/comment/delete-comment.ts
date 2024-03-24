"use server";

import { action } from "@/lib/clients/safe-action-client";
import getCurrentUser from "@/lib/user/get-current-user";
import { deleteCommentSchema } from "@/schemas/@product-actions-schemas";
import prisma from "@/lib/db";

export const deleteComment = action(
  deleteCommentSchema,
  async ({ feedbackId, commentId, sectionId }) => {
    if (!feedbackId || !commentId || !sectionId)
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
  }
);
