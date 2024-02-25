import { createFeedbackSectionSchema } from "@/schemas/@product-actions-schemas";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import * as z from "zod";

export type createFeedbackSectionInputs = z.infer<
  typeof createFeedbackSectionSchema
>;
export type createFeedbackSectionReturn =
  UseFormReturn<createFeedbackSectionInputs>;
  
export type createFeedbackSectionSubmitHandler =
  SubmitHandler<createFeedbackSectionInputs>;
