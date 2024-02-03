"use server";
import getCurrentUser from "@/lib/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import * as z from "zod";

const idSchema = z.object({
  userId: z.string().min(1),
});

export const acceptFriendRequest = action(idSchema, async ({ userId }) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return { error: "Unauthorized!" };

    const friend = await prisma?.friend.create({
      data: {
        friendOfId: currentUser.id,
        friendId: userId,
      },
    });

    if (!friend) return { error: "Add to friend failed!" };

    await prisma?.friendRequest.delete({
      where: {
        friendRequestId_friendRequestOfId: {
          friendRequestOfId: currentUser.id,
          friendRequestId: userId,
        },
      },
    });

    revalidatePath("/friends/[slug]");
    return friend;
  } catch {
    return { error: "Something went wrong!" };
  }
});
