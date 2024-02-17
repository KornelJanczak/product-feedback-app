import * as z from "zod";
import { registerFormSchema } from "@/schemas/@auth-actions-schemas";

export type registerInputs = z.infer<typeof registerFormSchema>;
