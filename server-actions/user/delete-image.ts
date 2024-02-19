"use server";
import * as z from "zod";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { revalidatePath } from "next/cache";
import s3 from "@/lib/clients/s3-client";

const deleteImageSchema = z.object({
  imageName: z.string().min(1),
  imageType: z.union([z.literal("avatar"), z.literal("profile")]),
});

export const deleteImage = action(
  deleteImageSchema,
  async ({ imageName, imageType }) => {
    try {
      const currentUser = await getCurrentUser();

      if (!currentUser) return { error: "Unauthorizated!" };

      let prismaQuery;

      if (imageType === "avatar") {
        prismaQuery = await prisma.user.update({
          where: {
            id: currentUser.id,
          },
          data: {
            image: null,
          },
        });
      } else {
        prismaQuery = await prisma.profile.update({
          where: {
            userId: currentUser.id,
          },
          data: {
            bgImage: null,
          },
        });
      }

      await s3.deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: imageName,
      });

      if (!prismaQuery) return { error: "Deleting the photo failed!" };

      revalidatePath("/account");
      return { success: prismaQuery };
    } catch {
      return { error: "An error occurred while deleting the image!" };
    }
  }
);
