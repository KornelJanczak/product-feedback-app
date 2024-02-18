"use server";
import { registerFormSchema } from "@/schemas/@auth-actions-schemas";
import prisma from "@/lib/db";
import bcryptjs from "bcryptjs";
import { action } from "@/lib/clients/safe-action-client";
import { revalidatePath } from "next/cache";

export const createSafeUser = action(
  registerFormSchema,
  async ({ username, email, password, firstName, lastName }) => {
    try {
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [
            {
              email,
            },
            {
              userName: username,
            },
          ],
        },
      });

      if (existingUser) return { error: "User already existing!" };

      const hashPass = await bcryptjs.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          userName: username,
          password: hashPass,
        },
      });

      revalidatePath("/register");
      return { success: user };
    } catch {
      return { error: "Something went wrong" };
    }
  }
);
