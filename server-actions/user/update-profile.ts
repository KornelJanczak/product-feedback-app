"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";
import { updateProfileSchema } from "@/schemas/@user-actions-schemas";

export const updateProfile = action(
  updateProfileSchema,
  async ({ preferRole, description, company, location, gitHub }) => {
    try {
      console.log("das");

      const currentUser = await getCurrentUser();

      if (!currentUser) return { error: "Unauthorizated!" };

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

      if (!profile) return { error: `Editing profile failed!` };

      revalidatePath("/account");
      return { success: profile };
    } catch {
      return { error: `Editing profile failed!` };
    }
  }
);
