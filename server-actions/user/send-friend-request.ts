"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import * as z from "zod";

const idSchema = z.object({
  userId: z.string().min(1),
});

export const sendFriendRequest = action(idSchema, async ({ userId }) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return { error: "Unauthorized!" };

    const existingFriendRequest = await prisma?.friendRequest.findFirst({
      where: {
        friendRequestOfId: currentUser.id,
        friendRequestId: userId,
      },
    });

    if (existingFriendRequest) return { error: "Friend request exist!" };

    const friendRequest = await prisma?.friendRequest.create({
      data: {
        friendRequestOfId: currentUser.id,
        friendRequestId: userId,
      },
    });

    revalidatePath("/friends/[slug]");
    return { success: friendRequest };
  } catch {
    return {
      error: "Something went wrong!",
    };
  }
});
