"use server";
import { registerFormSchema } from "@/models/@auth-schema";
import prisma from "@/lib/db";
import * as z from "zod";
import bcryptjs from "bcryptjs";

type Inputs = z.infer<typeof registerFormSchema>;
export default async function createUser(values: Inputs) {
  try {
    const validateFields = registerFormSchema.safeParse(values);

    if (!validateFields.success)
      return { error: validateFields.error.flatten().fieldErrors };

    const existingUser = await prisma.user.findFirst({
      where: {
        email: values.email,
      },
    });

    if (existingUser) throw new Error("User already existing!");

    const hashPass = await bcryptjs.hash(values.password, 10);

    const user = await prisma.user.create({
      data: {
        userName: values.username,
        email: values.email,
        password: hashPass,
      },
    });
    return user;
  } catch (err) {
    throw new Error("Failed to create account!");
  }
}

cl