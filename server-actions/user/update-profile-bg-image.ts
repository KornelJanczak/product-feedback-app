"use server";
import * as z from "zod";
import { action } from "@/lib/safe-action-client";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { revalidatePath } from "next/cache";

const upProfileBgImgSchema = z.object({
  bgImage: z.string().min(1),
});

export const updateProfileBgImage = action(
  upProfileBgImgSchema,
  async ({ bgImage }) => {
    try {
      const currentUser = await getCurrentUser();

      if (!currentUser) return { error: "Unauthorizated!" };

      const userProfil = await prisma.profile.upsert({
        where: {
          userId: currentUser!.id,
        },
        update: {
          bgImage,
        },
        create: {
          userId: currentUser!.id,
          bgImage,
        },
      });

      if (!userProfil)
        return { error: "The creation of the user profile has failed!" };

      revalidatePath("/account");
      return { success: userProfil };
    } catch {
      return { error: "Something went wrong!" };
    }
  }
);
