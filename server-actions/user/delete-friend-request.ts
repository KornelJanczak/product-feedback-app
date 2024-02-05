"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import { userActionSchema } from "@/models/@actions-schemas";

export const deleteFriendRequest = action(
  userActionSchema,
  async ({ userId, param }) => {
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

      revalidatePath(`/friends/${param}`);
      return { success: request };
    } catch {
      return { error: "Something went wrong!" };
    }
  }
);
