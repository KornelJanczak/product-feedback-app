"use server";
import { registerFormSchema } from "@/models/@auth-schema";
import prisma from "@/lib/db";
import bcryptjs from "bcryptjs";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";

export const createSafeUser = action(
  registerFormSchema,
  async ({ username, email, password }) => {
    try {
      const existingUser = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (existingUser) return { error: "User already existing!" };

      const hashPass = await bcryptjs.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          userName: username,
          email: email,
          password: hashPass,
        },
      });

      revalidatePath("/friends");
      return { success: user };
    } catch {
      return { error: "Something went wrong" };
    }
  }
);
