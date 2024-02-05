"use server";
import getCurrentUser from "@/lib/user/get-current-user";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const type = z.object({
  type: z.string().min(1),
  email: z.string().min(1),
  password: z.string().min(1),
});

export const loginAction = action(type, async ({ type, email, password }) => {
  const chuj = { email, password };
  try {
    await signIn(type, chuj);
    redirect("/");
  } catch {
    return { error: "Something went wrong!" };
  }
});
