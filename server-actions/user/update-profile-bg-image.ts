import * as z from "zod";
import { action } from "@/lib/safe-action-client";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";

const upProfileBgImgSchema = z.object({
  bgImage: z.string().min(1),
});

export const updateProgileBgImage = () =>
  action(upProfileBgImgSchema, async ({ bgImage }) => {
    try {
      const currentUser = await getCurrentUser();

      const updatedUser = await prisma.user.update({
        where: { id: currentUser!.id },
        data: {
          profile: {
            update: {
              // fields to update in Profile
              bgImage: bgImage,
            },
          },
        },
        include: {
          profile: true,
        },
      });
    } catch {
      return { error: "Something went wrong!" };
    }
  });
