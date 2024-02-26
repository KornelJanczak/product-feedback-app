"use server";

import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import { createFeedbackSectionSchema } from "@/schemas/@product-actions-schemas";

export const createFeedbackSection = action(
  createFeedbackSectionSchema,
  async ({ title, membersIds }) => {
    try {
      console.log(title, membersIds);

      // const section = await prisma.userToFeedbackSection.createMany(({
      //   data:{
      //     userId: [""]
      //   }
      // }))
    } catch {}
  }
);
