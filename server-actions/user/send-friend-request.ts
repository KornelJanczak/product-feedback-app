"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import { userActionSchema } from "@/models/@actions-schemas";

export const sendFriendRequest = action(
  userActionSchema,
  async ({ userId, param }) => {
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

      revalidatePath(`/friends/${param}`);
      return { success: friendRequest };
    } catch {
      return {
        error: "Something went wrong!",
      };
    }
  }
);
