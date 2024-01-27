"use server";
import { registerFormSchema } from "@/models/@register-schema";
import prisma from "@/lib/db";
import * as z from "zod";
import { revalidatePath } from "next/cache";

type Inputs = z.infer<typeof registerFormSchema>;
export default async function createUser(values: Inputs) {
  try {
    const validateFields = registerFormSchema.safeParse(values);

    if (!validateFields.success)
      return { error: validateFields.error.flatten().fieldErrors };

    const user = await prisma.user.create({
      data: {
        userName: values.username,
        email: values.username,
        password: values.password,
      },
    });

    revalidatePath("/login");

    return user;
  } catch (err) {
    return {
      error: err,
    };
  }
}
