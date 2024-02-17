"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { userActionSchema } from "@/schemas/@user-actions-schemas";
import prisma from "@/lib/db";
import { revalidateFriends } from "@/lib/user/revalidate-friends";

export const sendFriendRequest = action(
  userActionSchema,
  async ({ userId }) => {
    try {
      const currentUser = await getCurrentUser();

      if (!currentUser) return { error: "Unauthorized!" };

      const existingFriendRequest = await prisma.friendRequest.findFirst({
        where: {
          friendRequestOfId: currentUser.id,
          friendRequestId: userId,
        },
      });

      if (existingFriendRequest) return { error: "Friend request exist!" };

      const friendRequest = await prisma.friendRequest.create({
        data: {
          friendRequestOfId: currentUser.id,
          friendRequestId: userId,
        },
      });

      revalidateFriends();
      return { success: friendRequest };
    } catch {
      return {
        error: "Something went wrong!",
      };
    }
  }
);
