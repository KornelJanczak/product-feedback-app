import {
  createFeedbackSectionSchema,
  createFeedbackSchema,
} from "@/schemas/@product-actions-schemas";
import { createCommentSchema } from "@/schemas/@product-actions-schemas";
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

export type createCommentInputs = z.infer<typeof createCommentSchema>;

export type createCommentReturn = UseFormReturn<createCommentInputs>;

export type createCommentSubmitHandler = SubmitHandler<createCommentInputs>;
