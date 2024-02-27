"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import { createFeedbackSectionSchema } from "@/schemas/@product-actions-schemas";
import { revalidatePath } from "next/cache";

export const createFeedbackSection = action(
  createFeedbackSectionSchema,
  async ({ title, membersIds, currentUserId }) => {
    try {
      if (!currentUserId) throw new Error("Unauthorized");

      const users: { userId: string }[] = membersIds.map((id) => {
        return {
          userId: id,
        };
      });

      const section = await prisma.feedbackSection.create({
        data: {
          title,
          members: {
            create: users,
          },
          admins: { create: [{ userId: currentUserId }] },
        },
      });

      if (!section) throw new Error("Creating feedback section failed!");

      revalidatePath("/");
      return { success: section };
    } catch {
      throw new Error("Creating feedback section failed!");
    }
  }
);
