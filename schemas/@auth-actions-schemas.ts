import * as z from "zod";

export const validation = {
  email: z
    .string()
    .email({ message: "Email must contain @ symbol." })
    .min(2, { message: "Email must contain at least 3 characters" }),
  password: z
    .string()
    .min(5, { message: "Password must contain at lesat 5 symbol" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one digit." })
    .regex(/[@#$%^&+=!]/, {
      message: "Password must contain at least one special character.",
    }),
};

export const registerFormSchema = z
  .object({
    username: z.string().min(2, {
      message: "User name must be at least 2 characters.",
    }),
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    ...validation,
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match.",
  });

export const loginFormSchema = z.object({ ...validation });
