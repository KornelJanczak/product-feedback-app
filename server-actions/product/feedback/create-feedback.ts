"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import createActivityForFeedbackSection from "@/lib/product/create-activity-for-feedback-section";
import getCurrentUser from "@/lib/user/get-current-user";
import { addFeedbackSchema } from "@/schemas/@product-actions-schemas";
import { revalidatePath } from "next/cache";

export const addFeedback = action(
  addFeedbackSchema,
  async ({ userId, sectionId, category, detail, status, title }) => {
    try {
      if (!userId || !sectionId || !category || !detail || !status || !title)
        throw new Error("Invalid input");

      const currentUser = await getCurrentUser();

      if (!currentUser || currentUser.id !== userId)
        throw new Error("User not found");

      const feedback = await prisma.feedbackToFeedbackSection.create({
        data: {
          feedbackSectionId: sectionId,
          title,
          detail,
          category,
          status,
          authorId: userId,
        },
      });

      if (!feedback) throw new Error("Error while adding feedback");

      await createActivityForFeedbackSection(
        sectionId,
        currentUser.id,
        `Added new feedback id=${currentUser.id}`
      );

      revalidatePath(`/section/${sectionId}`);
      return { success: feedback };
    } catch {
      throw new Error("Error while adding feedback");
    }
  }
);
