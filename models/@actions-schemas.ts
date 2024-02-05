import * as z from "zod";

export const userActionSchema = z.object({
  userId: z.string().min(1),
  param: z.string().min(1),
});
