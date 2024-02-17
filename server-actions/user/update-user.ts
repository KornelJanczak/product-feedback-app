"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { updateUserSchema } from "@/schemas/@user-actions-schemas";
import prisma from "@/lib/db";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";

export const updateUser = action(
  updateUserSchema,
  async ({ userName, lastName, firstName, email }) => {
    try {
      console.log("das");

      const currentUser = await getCurrentUser();

      if (!currentUser) return { error: "Unauthorizated!" };

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

      if (!user) return { error: `Editing user account failed!` };

      revalidatePath("/account");
      return { success: user };
    } catch {
      return { error: `Editing user account failed!` };
    }
  }
);
