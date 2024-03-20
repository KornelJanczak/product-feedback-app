"use server";
import { action } from "@/lib/clients/safe-action-client";
import { kickUserFromFeedbackSectionSchema } from "@/schemas/@product-actions-schemas";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import getCurrentUser from "@/lib/user/get-current-user";
import createActivityForFeedbackSection from "@/lib/product/create-activity";

export const kickUserFromFeedbackSection = action(
  kickUserFromFeedbackSectionSchema,
  async ({ sectionId, adminId, kickedUserId }) => {
    try {
      if (!sectionId || !adminId || !kickedUserId)
        throw new Error("Invalid data.");

      const currentUser = await getCurrentUser();

      if (!currentUser || currentUser.id !== adminId)
        throw new Error("You are not an admin.");

      const feedbackSection = await prisma.feedbackSection.findUnique({
        where: {
          id: sectionId,
        },
        select: {
          members: {
            select: {
              userId: true,
            },
          },
          admins: {
            select: {
              userId: true,
            },
          },
        },
      });

      if (!feedbackSection) {
        throw new Error("Section not found.");
      }

      const isAdmin = feedbackSection.admins.some(
        (member) => member.userId === currentUser.id
      );

      if (!isAdmin) {
        throw new Error("You are not an admin.");
      }

      const kickedUserIsMember = feedbackSection.members.some(
        (member) => member.userId === kickedUserId
      );

      if (kickedUserIsMember) {
        await prisma.userToFeedbackSection.delete({
          where: {
            userId_feedbackSectionId: {
              feedbackSectionId: sectionId,
              userId: kickedUserId,
            },
          },
        });
      }

      const kickedUserIsAdmin = feedbackSection.admins.some(
        (admin) => admin.userId === kickedUserId
      );

      if (kickedUserIsAdmin) {
        await prisma.adminToFeedbackSection.delete({
          where: {
            userId_feedbackSectionId: {
              feedbackSectionId: sectionId,
              userId: kickedUserId,
            },
          },
        });
      }

      await createActivityForFeedbackSection(
        sectionId,
        currentUser.id,
        `Kicked user from feedback section id=${kickedUserId}`
      );

      revalidatePath(`/section/${sectionId}/members`);
      return { success: true };
    } catch {
      throw new Error("Kick user from feedback section failed.");
    }
  }
);
