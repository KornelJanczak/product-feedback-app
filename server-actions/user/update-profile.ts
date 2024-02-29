"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/clients/safe-action-client";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";
import { updateProfileSchema } from "@/schemas/@user-actions-schemas";

export const updateProfile = action(
  updateProfileSchema,
  async ({ preferRole, description, company, location, gitHub }) => {
    try {
      const currentUser = await getCurrentUser();

      if (!currentUser) throw new Error("Unauthorizated!");

      const profile = await prisma.profile.upsert({
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

      if (!profile) throw new Error(`Editing profile failed!`);

      revalidatePath("/account");
      return { success: profile };
    } catch {
      throw new Error(`Editing profile failed!`);
    }
  }
);
