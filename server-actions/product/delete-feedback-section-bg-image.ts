"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { deleteFeedbackSectionBgImgSchema } from "@/schemas/@product-actions-schemas";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export const deleteFeedbackSectionBgImage = action(
  deleteFeedbackSectionBgImgSchema,
  async ({ sectionId }) => {
    try {
      const currentUser = await getCurrentUser();

      if (!currentUser || !sectionId)
        throw new Error("Error! No required data!");

      const feedbackSection = await prisma.feedbackSection.update({
        where: {
          id: sectionId,
        },
        data: {
          bgImage: null,
          bgImageKey: null,
        },
      });

      if (feedbackSection.bgImageKey)
        await utapi.deleteFiles(feedbackSection.bgImageKey);

      if (!feedbackSection)
        throw new Error("Deleting feedback section image failed!");

      revalidatePath("section:path");
      return { success: feedbackSection };
    } catch {
      throw new Error("Deleting feedback section failed!");
    }
  }
);
