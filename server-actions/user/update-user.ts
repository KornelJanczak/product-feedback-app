"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";
import * as z from "zod";

const typeEnum = z.enum(["profile", "account"]);

export const updateUserSchema = z.object({
  userName: z.string(),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email().min(3),
});

// const profileSchema = z.object({
//   actionType: z.literal(typeEnum.enum.profile),
//   preferRole: z.string().min(3),
//   description: z.string().min(1),
//   company: z.string().min(1),
//   location: z.string().min(1),
//   gitHub: z.string().min(1),
// });

// export const editUserInfoSchema = z.discriminatedUnion("actionType", [
//   accountSchema,
//   profileSchema,
// ]);

export const updateUser = action(updateUserSchema, async (data) => {
  try {
    console.log("das");

    const currentUser = await getCurrentUser();

    if (!currentUser) return { error: "Unauthorizated!" };

    const { userName, lastName, firstName, email } = data;

    const prismaQuery = await prisma.user.update({
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

    if (!prismaQuery) return { error: `Editing user account failed!` };

    revalidatePath("/account");
    return { success: prismaQuery };
  } catch {
    return { error: `Editing user account failed!` };
  }
});
