"use server";
import * as z from "zod";
import { action } from "@/lib/safe-action-client";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { revalidatePath } from "next/cache";
import createImage from "@/lib/user/create-image";
import fs from "fs";

const updateImageSchema = z.object({
  image: z.string().min(1),
  imageType: z.union([z.literal("avatar"), z.literal("profile")]),
});

export const updateImage = action(
  updateImageSchema,
  async ({ image, imageType }) => {
    try {
      const currentUser = await getCurrentUser();

      if (!currentUser) return { error: "Unauthorizated!" };

      const img = (await createImage(
        image,
        imageType,
        currentUser.id
      )) as string;

      if (!img) return { error: "The creation of background image failed!" };
      let prismaQuery;

      if (imageType === "avatar") {
        prismaQuery = await prisma.user.update({
          where: {
            id: currentUser!.id,
          },
          data: {
            image: img,
          },
        });
      } else {
        prismaQuery = await prisma.profile.upsert({
          where: {
            userId: currentUser?.id,
          },
          update: {
            bgImage: img,
          },
          create: {
            userId: currentUser?.id,
            bgImage: img,
          },
        });
      }

      if (!prismaQuery)
        return { error: "The creation of the user profile has failed!" };

      revalidatePath("/account");
      return { success: prismaQuery };
    } catch {
      return { error: "An error occurred while updating the image!" };
    }
  }
);
