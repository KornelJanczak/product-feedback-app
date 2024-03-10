"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { sectionUserSchema } from "@/schemas/@product-actions-schemas";
import { revalidatePath } from "next/cache";

export const addUsersToFeedbackSection = action(
  sectionUserSchema,
  async ({ userId, sectionId }) => {
    try {
      if (!userId || !sectionId) throw new Error("Invalid input");

      // Add user to feedback section
      const currentUser = await getCurrentUser();

      if (!currentUser) throw new Error("Unauthorized!");

      const existingUser = await prisma.userToFeedbackSection.findFirst({
        where: {
          userId: currentUser.id,
          feedbackSectionId: sectionId,
        },
      });

      if (existingUser) {
        throw new Error("User already belongs to feedback section!");
      }

      const addedUser = await prisma.userToFeedbackSection.create({
        data: {
          userId: userId,
          feedbackSectionId: sectionId,
        },
      });

      if (!addedUser)
        throw new Error("Adding user to feedback section failed!");

      revalidatePath(`/section/${sectionId}`);
      return { success: addedUser };
    } catch {
      throw new Error("Adding user to feedback section failed!");
    }
  }
);
