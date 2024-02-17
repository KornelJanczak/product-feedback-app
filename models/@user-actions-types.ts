import {
  updateProfileSchema,
  updateUserSchema,
} from "@/schemas/@user-actions-schemas";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import * as z from "zod";

export type updateUserInputs = z.infer<typeof updateUserSchema>;
export type updateUserReturn = UseFormReturn<updateUserInputs>;
export type updateUserSubmitHandler = SubmitHandler<updateUserInputs>;

export type updateProfileInputs = z.infer<typeof updateProfileSchema>;
export type updateProfileReturn = UseFormReturn<updateProfileInputs>;
export type updateProfileSubmitHandler = SubmitHandler<updateProfileInputs>;

export type CombinedFormInputs = updateProfileInputs & updateUserInputs;
export type CombinedFormReturn = updateUserReturn & updateProfileReturn;
export type CombinedFormSumbit = updateUserSubmitHandler &
  updateProfileSubmitHandler;
