import * as z from "zod";

const basicUserSchema = {
  userId: z.string().min(1),
};

export const userActionSchema = z.object({ ...basicUserSchema });
export const rejOrDelActionSchema = z.object({
  actionType: z.string(),
  ...basicUserSchema,
});

export const updateUserSchema = z.object({
  userName: z.string().min(3),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email().min(3),
});

export const updateProfileSchema = z.object({
  preferRole: z.string().min(3),
  description: z.string().min(1),
  company: z.string().min(1),
  location: z.string().min(1),
  gitHub: z.string().min(1),
});

export const deleteImageSchema = z.object({
  imageType: z.union([z.literal("avatar"), z.literal("profile")]),
});
