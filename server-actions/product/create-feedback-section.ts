"use server";

import { action } from "@/lib/clients/safe-action-client";
import { createFeedbackSectionSchema } from "@/schemas/@product-actions-schemas";

export const createFeedbackSection = action(
  createFeedbackSectionSchema,
  async () => {

  }
);
