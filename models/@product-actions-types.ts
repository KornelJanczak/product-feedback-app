import {
  createFeedbackSectionSchema,
  createFeedbackSchema,
  createReplySchema,
} from "@/schemas/@product-actions-schemas";
import { createCommentSchema } from "@/schemas/@product-actions-schemas";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

import * as z from "zod";

// Feedback Section types
export type createFeedbackSectionInputs = z.infer<
  typeof createFeedbackSectionSchema
>;
export type createFeedbackSectionReturn =
  UseFormReturn<createFeedbackSectionInputs>;

export type createFeedbackSectionSubmitHandler =
  SubmitHandler<createFeedbackSectionInputs>;

// Feedback types
export type createFeedbackInputs = z.infer<typeof createFeedbackSchema>;
export type createFeedbackReturn = UseFormReturn<createFeedbackInputs>;
export type createFeedbackSubmitHandler = SubmitHandler<createFeedbackInputs>;

// Comment types
export type createCommentInputs = z.infer<typeof createCommentSchema>;
export type createCommentReturn = UseFormReturn<createCommentInputs>;
export type createCommentSubmitHandler = SubmitHandler<createCommentInputs>;

// Replies types
export type createReplyInputs = z.infer<typeof createReplySchema>;
export type createReplyReturn = UseFormReturn<createReplyInputs>;
export type createReplySubmitHandler = SubmitHandler<createReplyInputs>;
