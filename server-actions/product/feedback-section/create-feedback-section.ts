"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import createActivityForFeedbackSection from "@/lib/product/create-activity-for-feedback-section";
import { createFeedbackSectionSchema } from "@/schemas/@product-actions-schemas";
import { revalidatePath } from "next/cache";

export const createFeedbackSection = action(
  createFeedbackSectionSchema,
  async ({ title, membersIds, currentUserId }) => {
    if (!currentUserId || !title || !membersIds)
      throw new Error("Valid input required!");

    const users: { userId: string }[] = membersIds.map((id) => {
      return {
        userId: id,
      };
    });

    let feedbackSection;

    try {
      feedbackSection = await prisma.feedbackSection.create({
        data: {
          title,
          members: {
            create: users,
          },
          admins: { create: [{ userId: currentUserId }] },
        },
      });

      if (!feedbackSection)
        throw new Error("Creating feedback feedbackSection failed!");

      await createActivityForFeedbackSection(
        feedbackSection.id,
        currentUserId,
        "Created feedback feedbackSection"
      );
    } catch {
      throw new Error("Error while creating feedback feedbackSection");
    }

    revalidatePath("/");
    return { success: feedbackSection };
  }
);
