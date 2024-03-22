"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import createActivityForFeedbackSection from "@/lib/product/create-activity";
import getCurrentUser from "@/lib/user/get-current-user";
import { createFeedbackSchema } from "@/schemas/@product-actions-schemas";
import { revalidatePath } from "next/cache";

export const createFeedback = action(
  createFeedbackSchema,
  async ({ userId, sectionId, category, detail, status, title }) => {
    if (!userId || !sectionId || !category || !detail || !status || !title)
      throw new Error("Invalid input");

    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.id !== userId)
      throw new Error("User not found");

    let feedback;

    try {
      feedback = await prisma.feedbackToFeedbackSection.create({
        data: {
          feedbackSectionId: sectionId,
          title,
          detail,
          category,
          status,
          authorId: userId,
        },
      });
    } catch {
      throw new Error("Error while adding feedback");
    }

    await createActivityForFeedbackSection(
      sectionId,
      currentUser.id,
      `Added new suggestion`
    );

    revalidatePath(`/section/${sectionId}`);
    return { success: feedback };
  }
);
