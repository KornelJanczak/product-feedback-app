import {
  createFeedbackSectionSchema,
 createFeedbackSchema,
} from "@/schemas/@product-actions-schemas";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

import * as z from "zod";

export type createFeedbackSectionInputs = z.infer<
  typeof createFeedbackSectionSchema
>;
export type createFeedbackSectionReturn =
  UseFormReturn<createFeedbackSectionInputs>;

export type createFeedbackSectionSubmitHandler =
  SubmitHandler<createFeedbackSectionInputs>;

export type createFeedbackInputs = z.infer<typeof createFeedbackSchema>;

export type createFeedbackReturn = UseFormReturn<createFeedbackInputs>;

export type createFeedbackSubmitHandler = SubmitHandler<createFeedbackInputs>;
