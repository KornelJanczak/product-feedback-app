"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";
import { deleteImageSchema } from "@/schemas/@user-actions-schemas";

const utapi = new UTApi();

export const deleteImage = action(deleteImageSchema, async ({ imageType }) => {
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
          imageKey: null,
        },
      });

      if (prismaQuery.imageKey) await utapi.deleteFiles(prismaQuery.imageKey);
    } else {
      prismaQuery = await prisma.profile.update({
        where: {
          userId: currentUser.id,
        },
        data: {
          bgImage: null,
          bgImageKey: null,
        },
      });

      if (prismaQuery.bgImageKey)
        await utapi.deleteFiles(prismaQuery.bgImageKey);
    }

    if (!prismaQuery) return { error: "Deleting the photo failed!" };

    revalidatePath("/account");
    return { success: prismaQuery };
  } catch {
    return { error: "An error occurred while deleting the image!" };
  }
});
