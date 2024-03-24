"use server";

import { action } from "@/lib/clients/safe-action-client";
import getCurrentUser from "@/lib/user/get-current-user";
import { deleteCommentSchema } from "@/schemas/@product-actions-schemas";
import prisma from "@/lib/db";
import checkMembershipInSection from "@/lib/product/check-membership-in-section";

export const deleteComment = action(
  deleteCommentSchema,
  async ({ feedbackId, commentId, sectionId }) => {
    if (!feedbackId || !commentId || !sectionId)
      throw new Error("Invalid parameters");

    const currentUser = await getCurrentUser();

    if (!currentUser) throw new Error("User not found");

    const currentUserIsMember = await checkMembershipInSection(
      sectionId,
      currentUser.id
    );

    if (!currentUserIsMember)
      throw new Error("Current user is not a member of this section");
  }
);
