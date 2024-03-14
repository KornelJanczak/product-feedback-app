import {
  createFeedbackSectionSchema,
  addFeedbackSchema,
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

export type addFeedbackInputs = z.infer<typeof addFeedbackSchema>;

export type addFeedbackReturn = UseFormReturn<addFeedbackInputs>;

export type addFeedbackSubmitHandler = SubmitHandler<addFeedbackInputs>;
