"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import { deleteFeedbackSectionSchema } from "@/schemas/@product-actions-schemas";

export const deleteFeedbackSection = action(
  deleteFeedbackSectionSchema,
  async ({ userId, sectionId }) => {
    try {
      if (!userId) throw new Error("Unauthorized");

      const deletedSection = await prisma.feedbackSection.delete({
        where: {
          id: sectionId,
          admins: {
            some: {
              userId,
            },
          },
        },
      });

      if (!deletedSection) throw new Error("Deleting section failed!");

      return { success: deletedSection };
    } catch {
      throw new Error("Deleting section failed!");
    }
  }
);
