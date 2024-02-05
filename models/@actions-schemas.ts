import * as z from "zod";

const basicUserSchema = {
  userId: z.string().min(1),
  // param: z.string().min(1),
};

export const userActionSchema = z.object({ ...basicUserSchema });
export const rejOrDelActionSchema = z.object({
  actionType: z.string(),
  ...basicUserSchema,
});
