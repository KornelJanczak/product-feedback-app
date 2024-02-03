"use server";
import getCurrentUser from "@/lib/user/get-current-user";
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

    const firstUser = await prisma?.friend.create({
      data: {
        friendOfId: currentUser.id,
        friendId: userId,
      },
    });

    const secondUser = await prisma?.friend.create({
      data: {
        friendOfId: userId,
        friendId: currentUser.id,
      },
    });

    if (!firstUser || !secondUser) return { error: "Add to friend failed!" };

    const deletedRequest = await prisma?.friendRequest.delete({
      where: {
        friendRequestId_friendRequestOfId: {
          friendRequestOfId: userId,
          friendRequestId: currentUser.id,
        },
      },
    });

    console.log(deletedRequest, "DELETE");

    revalidatePath("/friends/[slug]");
    return { success: { secondUser, firstUser, deletedRequest } };
  } catch {
    return { error: "Something went wrong!" };
  }
});
