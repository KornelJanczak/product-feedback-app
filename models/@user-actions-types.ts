import {
  updateProfileSchema,
  updateUserSchema,
} from "@/schemas/@user-actions-schemas";
import * as z from "zod";

export type updateUserInputs = z.infer<typeof updateUserSchema>;

export type updateProfileInputs = z.infer<typeof updateProfileSchema>;
