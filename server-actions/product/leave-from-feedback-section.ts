"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import { leaveFromSectionSchema } from "@/schemas/@product-actions-schemas";

export const leaveFromFeedbackSection = action(
  leaveFromSectionSchema,
  async ({ userId, sectionId }) => {
    try {
      if (!userId || !sectionId) throw new Error("Unvalid data!");

      const feedbackSection = await prisma.feedbackSection.findUnique({
        where: {
          id: sectionId,
        },
        select: {
          admins: {
            select: {
              userId: true,
            },
          },
          members: {
            select: {
              userId: true,
            },
          },
        },
      });

      if (!feedbackSection)
        throw new Error("This feedback section doesn't exist!");

      const isMember = feedbackSection.members.some(
        (member) => member.userId === userId
      );

      const isAdmin = feedbackSection.admins.some(
        (admin) => admin.userId === userId
      );

      const deletedValues = {
        userId: userId,
        feedbackSectionId: sectionId,
      };

      let prismaQuery;

      if (isMember) {
        prismaQuery = await prisma.userToFeedbackSection.delete({
          where: {
            userId_feedbackSectionId: deletedValues,
          },
        });
      }

      if (isAdmin) {
        prismaQuery = await prisma.adminToFeedbackSection.delete({
          where: {
            userId_feedbackSectionId: deletedValues,
          },
        });
      }

      if (!prismaQuery) throw new Error("Something went wrong!");

      return { success: prismaQuery };
    } catch {
      throw new Error("Something went wrong!");
    }
  }
);
