"use server";
import { action } from "@/lib/clients/safe-action-client";
import getCurrentUser from "@/lib/user/get-current-user";
import { deleteReplySchema } from "@/schemas/@product-actions-schemas";
import prisma from "@/lib/db";
import checkMembershipInSection from "@/lib/product/check-membership-in-section";
import { revalidatePath } from "next/cache";

export const deleteReply = action(
  deleteReplySchema,
  async ({ feedbackId, replyId, sectionId }) => {
    if (!feedbackId || !replyId || !sectionId)
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
      reply = await prisma.repliesToComments.delete({
        where: {
          id: replyId,
        },
      });
    } catch {
      throw new Error("Failed to delete reply");
    }

    revalidatePath(`/section/${sectionId}/feedback/${feedbackId}`);
    return { success: reply };
  }
);
