"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import { userActionSchema } from "@/models/@actions-schemas";

export const rejectFriendRequest = action(
  userActionSchema,
  async ({ userId, param }) => {
    try {
      const currentUser = await getCurrentUser();

      if (!currentUser) return { error: "Unauthorized!" };
    } catch {
      return { error: "Something went wrong!" };
    }
  }
);
