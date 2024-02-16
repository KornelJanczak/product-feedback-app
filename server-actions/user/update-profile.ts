"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";
import * as z from "zod";

export const updateProfileSchema = z.object({
  preferRole: z.string().min(3),
  description: z.string().min(1),
  company: z.string().min(1),
  location: z.string().min(1),
  gitHub: z.string().min(1),
});

export const updateProfile = action(updateProfileSchema, async (data) => {
  try {
    console.log("das");

    const currentUser = await getCurrentUser();

    if (!currentUser) return { error: "Unauthorizated!" };

    const { preferRole, description, company, location, gitHub } = data;

    const prismaQuery = await prisma.profile.upsert({
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

    if (!prismaQuery) return { error: `Editing profile failed!` };

    revalidatePath("/account");
    return { success: prismaQuery };
  } catch {
    return { error: `Editing profile failed!` };
  }
});
