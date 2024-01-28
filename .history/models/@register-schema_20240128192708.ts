import * as z from "zod";

const validation = {
  email: z.string().email({ message: "Email must contain @ symbol." }),
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
      message: "Username must be at least 2 characters.",
    }),
    // email: z.string().email({ message: "Email must contain @ symbol." }),
    // password: z
    //   .string()
    //   .min(5, { message: "Password must contain at lesat 5 symbol" })
    //   .regex(/[A-Z]/, {
    //     message: "Password must contain at least one uppercase letter.",
    //   })
    //   .regex(/[a-z]/, {
    //     message: "Password must contain at least one lowercase letter.",
    //   })
    //   .regex(/[0-9]/, { message: "Password must contain at least one digit." })
    //   .regex(/[@#$%^&+=!]/, {
    //     message: "Password must contain at least one special character.",
    //   }),

    ...validation,
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match.",
  });
