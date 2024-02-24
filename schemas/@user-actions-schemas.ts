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
  userName: z
    .string()
    .min(3, { message: "User name must contain at least 3 characters" }),
  firstName: z
    .string()
    .min(2, { message: "First name must contain at least 3 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must contain at least 3 characters" }),
  email: z
    .string()
    .email({ message: "Email must contain @ symbol." })
    .min(2, { message: "Email must contain at least 3 characters" }),
});

export const updateProfileSchema = z.object({
  preferRole: z.string(),
  description: z.string(),
  company: z.string(),
  location: z.string(),
  gitHub: z.string(),
});

export const deleteImageSchema = z.object({
  imageType: z.union([z.literal("avatar"), z.literal("profile")]),
});
