"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { updateUserSchema } from "@/schemas/@user-actions-schemas";
import prisma from "@/lib/db";
import { action } from "@/lib/clients/safe-action-client";
import { revalidatePath } from "next/cache";

export const updateUser = action(
  updateUserSchema,
  async ({ userName, lastName, firstName, email }) => {
    try {
      const currentUser = await getCurrentUser();

      if (!currentUser) throw new Error("Unauthorizated!");

      const existingUserName = await prisma.user.findFirst({
        where: {
          NOT: {
            id: currentUser.id,
          },
          userName,
        },
      });

      if (existingUserName) throw new Error("Username is already taken!");

      const existingEmail = await prisma.user.findFirst({
        where: {
          NOT: {
            id: currentUser.id,
          },
          email: email,
        },
      });

      if (existingEmail) throw new Error("Email is already taken!");

      const user = await prisma.user.update({
        where: {
          id: currentUser.id,
        },
        data: {
          userName,
          firstName,
          lastName,
          email,
        },
      });

      if (!user) throw new Error(`Editing user account failed!`);

      revalidatePath("/account");
      return { success: user };
    } catch {
      throw new Error(`Editing user account failed!`);
    }
  }
);
