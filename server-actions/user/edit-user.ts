"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";
import * as z from "zod";

const typeEnum = z.enum(["profile", "account"]);

const accountSchema = z.object({
  actionType: z.literal(typeEnum.enum.account),
  userName: z.string(),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email().min(3),
});

const profileSchema = z.object({
  actionType: z.literal(typeEnum.enum.profile),
  preferRole: z.string().min(3),
  description: z.string().min(1),
  company: z.string().min(1),
  location: z.string().min(1),
  gitHub: z.string().min(1),
});

const editUserInfoSchema = z.discriminatedUnion("actionType", [
  accountSchema,
  profileSchema,
]);

export const editUser = action(editUserInfoSchema, async (data) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return { error: "Unauthorizated!" };

    let prismaQuery;
    if (data.actionType === "account") {
      const { userName, lastName, firstName, email } = data;

      prismaQuery = await prisma.user.update({
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
    }

    if (data.actionType === "profile") {
      const { preferRole, description, company, location, gitHub } = data;

      prismaQuery = await prisma.profile.upsert({
        where: {
          userId: currentUser.id,
        },
        update: {
          preferRole,
          description,
          company,
          location,
          gitHub,
        },
        create: {
          userId: currentUser.id,
          preferRole,
          description,
          company,
          location,
          gitHub,
        },
      });
    }

    if (!prismaQuery) return { error: `Editing ${data.actionType} failed!` };

    revalidatePath("/account");
    return { success: prismaQuery };
  } catch {
    return { error: `Editing ${data.actionType} failed!` };
  }
});
