"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import { rejOrDelActionSchema } from "@/models/@actions-schemas";
import prisma from "@/lib/db";
import { revalidateFriends } from "@/lib/user/revalidate-friends";

export const rejectOrDeleteFriendRequest = action(
  rejOrDelActionSchema,
  async ({ userId, actionType }) => {
    try {
      if (actionType !== "reject" && actionType !== "delete")
        return { error: "Invalid actionType" };

      const currentUser = await getCurrentUser();

      if (!currentUser) return { error: "Unauthenticated" };
      const { friendRequestOfId, friendRequestId } = getFriendRequestIds(
        actionType,
        userId,
        currentUser.id
      );

      const request = await prisma.friendRequest.delete({
        where: {
          friendRequestId_friendRequestOfId: {
            friendRequestOfId,
            friendRequestId,
          },
        },
      });

      if (!request) return { error: "Error!" };

      revalidateFriends();
      return { success: request };
    } catch {
      return { error: "Something went wrong!" };
    }
  }
);

function getFriendRequestIds(
  actionType: string,
  userId: string,
  currentUserId: string
) {
  if (actionType === "reject") {
    return {
      friendRequestOfId: userId,
      friendRequestId: currentUserId,
    };
  } else {
    return {
      friendRequestOfId: currentUserId,
      friendRequestId: userId,
    };
  }
}
