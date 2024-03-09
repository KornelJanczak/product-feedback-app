import getCurrentUser from "@/lib/user/get-current-user";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import prisma from "@/lib/db";
import { UTApi } from "uploadthing/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const utapi = new UTApi();

const f = createUploadthing();

export const ourFileRouter = {
  // Uploading profile background image
  profileBackground: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
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

  // Uploading profile avatar image
  profileAvatar: f({
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

  // Uploading feedback section image
  feedbackSectionBackgroundImage: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .input(z.object({ sectionId: z.string() }))
    .middleware(async ({ input }) => {
      const user = await getCurrentUser();

      if (!user || !input.sectionId) throw new UploadThingError("Unauthorized");

      const feedbackSection = await prisma.feedbackSection.findUnique({
        where: {
          id: input.sectionId,
        },
      });

      if (!feedbackSection)
        throw new UploadThingError("There is no feedback section!");

      return {
        userId: user.id,
        sectionId: feedbackSection.id,
        imageKey: feedbackSection.bgImageKey,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      if (metadata.imageKey) await utapi.deleteFiles(metadata.imageKey);

      const updatedSection = await prisma.feedbackSection.update({
        where: {
          id: metadata.sectionId,
        },
        data: {
          bgImage: file.url,
          bgImageKey: file.key,
        },
      });

      return { uploadedBy: metadata.userId, updatedSection: updatedSection.id };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
