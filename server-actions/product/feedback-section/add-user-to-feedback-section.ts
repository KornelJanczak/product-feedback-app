"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import createActivityForFeedbackSection from "@/lib/product/create-activity";
import getCurrentUser from "@/lib/user/get-current-user";
import { sectionUserSchema } from "@/schemas/@product-actions-schemas";
import { revalidatePath } from "next/cache";

export const addUsersToFeedbackSection = action(
  sectionUserSchema,
  async ({ userId, sectionId }) => {
    if (!userId || !sectionId) throw new Error("Invalid input");

    // Add user to feedback section
    const currentUser = await getCurrentUser();

    if (!currentUser) throw new Error("Unauthorized!");

    let existingUser;

    try {
      existingUser = await prisma.userToFeedbackSection.findFirst({
        where: {
          userId: currentUser.id,
          feedbackSectionId: sectionId,
        },
      });

      if (existingUser)
        throw new Error("User already belongs to feedback section!");
    } catch (error) {
      throw new Error("Error while adding user to feedback section");
    }

    let addedUser;

    try {
      addedUser = await prisma.userToFeedbackSection.create({
        data: {
          userId: userId,
          feedbackSectionId: sectionId,
        },
      });

      if (!addedUser)
        throw new Error("Adding user to feedback section failed!");

      await createActivityForFeedbackSection(
        sectionId,
        currentUser.id,
        "Added user to feedback section"
      );
    } catch {
      throw new Error("Error while adding user to feedback section");
    }

    revalidatePath(`/section/${sectionId}`);
    return { success: addedUser };
  }
);
