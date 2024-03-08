import getCurrentUser from "@/lib/user/get-current-user";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import prisma from "@/lib/db";
import { UTApi } from "uploadthing/server";
import { revalidatePath } from "next/cache";

const utapi = new UTApi();

const f = createUploadthing();

export const ourFileRouter = {
  profile: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => {
      const user = await getCurrentUser();

      if (!user) throw new UploadThingError("Unauthorized");

      const profileImage = await prisma.profile.findUnique({
        where: {
          userId: user.id,
        },
      });
      return { userId: user.id, bgImageKey: profileImage?.bgImageKey };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      if (metadata.bgImageKey) await utapi.deleteFiles(metadata.bgImageKey);

      await prisma.profile.upsert({
        where: {
          userId: metadata.userId,
        },
        update: {
          bgImage: file.url,
          bgImageKey: file.key,
        },
        create: {
          userId: metadata.userId,
          bgImage: file.url,
          bgImageKey: file.key,
        },
      });
      revalidatePath("/account");
      return { uploadedBy: metadata.userId };
    }),

  avatar: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      const user = await getCurrentUser();

      if (!user) throw new UploadThingError("Unauthorized");

      const currentUser = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
      });

      return { userId: user.id, imageKey: currentUser?.imageKey };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      if (metadata.imageKey) await utapi.deleteFiles(metadata.imageKey);

      await prisma.user.update({
        where: {
          id: metadata.userId,
        },
        data: {
          image: file.url,
          imageKey: file.key,
        },
      });
      revalidatePath("/account");
      return { uploadedBy: metadata.userId };
    }),
  feedbackSectionBgImage: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(async ({ req }) => {
      const user = await getCurrentUser();

      if (!user) throw new UploadThingError("Unauthorized");

      return {};
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
