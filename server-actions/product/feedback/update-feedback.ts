"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import createActivityForFeedbackSection from "@/lib/product/helpers/create-activity";
import { updateFeedbackSchema } from "@/schemas/@product-actions-schemas";
import getCurrentUser from "@/lib/user/get-current-user";
import { revalidatePath } from "next/cache";

export const updateFeedback = action(
  updateFeedbackSchema,
  async ({
    userId,
    feedbackId,
    sectionId,
    category,
    detail,
    status,
    title,
  }) => {
    if (
      !userId ||
      !feedbackId ||
      !sectionId ||
      !category ||
      !detail ||
      !status ||
      !title
    )
      throw new Error("Invalid input");

    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.id !== userId)
      throw new Error("User not found");

    let updateFeedback;

    try {
      updateFeedback = await prisma.feedbackToFeedbackSection.update({
        where: {
          id: feedbackId,
        },
        data: {
          authorId: userId,
          title,
          status,
          category,
          detail,
        },
      });
    } catch {
      throw new Error("Error while updating feedback");
    }

    if (!updateFeedback) throw new Error("Error while updating feedback");

    await createActivityForFeedbackSection(
      sectionId,
      currentUser.id,
      `Updated ${title} suggestion by `
    );

    revalidatePath(`/section/${sectionId}`);
    revalidatePath(`/section/${sectionId}/feedback/${feedbackId}`);

    return { success: updateFeedback };
  }
);
