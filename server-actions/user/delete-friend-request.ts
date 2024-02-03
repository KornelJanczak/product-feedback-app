"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import * as z from "zod";

const idSchema = z.object({
  userId: z.string().min(1),
});

export const deleteFriendRequest = action(idSchema, async ({ userId }) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return { error: "Unauthenticated" };

    const request = await prisma?.friendRequest.delete({
      where: {
        friendRequestId_friendRequestOfId: {
          friendRequestOfId: currentUser.id,
          friendRequestId: userId,
        },
      },
    });

    if (!request) return { error: "Something went wrong!" };

    revalidatePath("/friends/[slug]");
    return { success: request };
  } catch {
    return { error: "Something went wrong!" };
  }
});
