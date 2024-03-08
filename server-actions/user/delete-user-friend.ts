"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { revalidateFriends } from "@/lib/user/revalidate-friends";
import { userActionSchema } from "@/schemas/@user-actions-schemas";

export const deleteUserFriend = action(userActionSchema, async ({ userId }) => {
  try {
    const currenUser = await getCurrentUser();

    if (!currenUser) throw new Error("Unauthorizated!");

    const deletedUserFriend = await prisma.friend.delete({
      where: {
        friendId_friendOfId: {
          friendOfId: currenUser.id,
          friendId: userId,
        },
      },
    });

    const delatedRelation = await prisma.friend.delete({
      where: {
        friendId_friendOfId: {
          friendOfId: userId,
          friendId: currenUser.id,
        },
      },
    });

    if (!deletedUserFriend || !delatedRelation)
      throw new Error("Deleting user failed!");

    revalidateFriends();
    return { success: { deletedUserFriend, delatedRelation } };
  } catch (err) {
    return { error: err };
  }
});
