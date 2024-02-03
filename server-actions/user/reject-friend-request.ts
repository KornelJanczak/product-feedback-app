"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import * as z from "zod";

const idSchema = z.object({
  userId: z.string().min(1),
});

export const rejectFriendRequest = action(idSchema, async ({ userId }) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return { error: "Unauthorized!" };
  } catch {
    return { error: "Something went wrong!" };
  }
});
