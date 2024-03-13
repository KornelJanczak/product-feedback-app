"use server";
import { action } from "@/lib/clients/safe-action-client";
import { kickUserFromFeedbackSectionSchema } from "@/schemas/@product-actions-schemas";
import prisma from "@/lib/db";

export const kickUserFromFeedbackSection = action(
  kickUserFromFeedbackSectionSchema,
  async ({ sectionId, adminId, kickedUserId }) => {
    try {
      if (!sectionId || !adminId || !kickedUserId)
        throw new Error("Invalid data.");

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

      const isAdmin = feedbackSection.members.some(
        (member) => member.userId === adminId
      );

      if (!isAdmin) {
        throw new Error("You are not an admin.");
      }

      const isKickedUser = feedbackSection.members.some(
        (member) => member.userId === kickedUserId
      );

      if (!isKickedUser) {
        throw new Error("User not found in Feedback Section.");
      }

      const kickedUser = await prisma.feedbackSection.update({
        where: {
          id: sectionId,
        },
        data: {
          members: {
            disconnect: {
              userId_feedbackSectionId: {
                userId: kickedUserId,
                feedbackSectionId: sectionId,
              },
            },
          },
        },
      });

      return { success: kickedUser };
    } catch {
      throw new Error("Kick user from feedback section failed.");
    }
  }
);
