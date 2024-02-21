import getCurrentUser from "@/lib/user/get-current-user";
import { createUploadthing, UTFiles, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import prisma from "@/lib/db";

const f = createUploadthing();

export const ourFileRouter = {
  profile: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ files }) => {
      console.log(files, "PLIKI");

      const user = await getCurrentUser();

      if (!user) throw new UploadThingError("Unauthorized");

      const fileOverrides = addCustomId(files, user.id, "profile");

      return { userId: user.id, [UTFiles]: fileOverrides };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await prisma.profile.upsert({
        where: {
          userId: metadata.userId,
        },
        update: {
          bgImage: file.url,
          bgImageKey: file.customId,
        },
        create: {
          userId: metadata.userId,
          bgImage: file.url,
          bgImageKey: file.customId,
        },
      });
      return { uploadedBy: metadata.userId };
    }),

  avatar: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(async ({ files }) => {
      const user = await getCurrentUser();

      if (!user) throw new UploadThingError("Unauthorized");

      const fileOverrides = addCustomId(files, user.id, "profile");

      return { userId: user.id, [UTFiles]: fileOverrides };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await prisma.user.update({
        where: {
          id: metadata.userId,
        },
        data: {
          image: file.url,
          imageKey: file.customId,
        },
      });
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

function addCustomId(
  files: { name: string; size: number }[],
  userId: string,
  actionType: string
) {
  const fileOverrides = files.map((file) => {
    const originalFileExtension = file.name.split(".").pop();
    const fileName: string = `${userId}-${actionType}.${originalFileExtension}`;
    return { ...file, customId: fileName };
  });
  return fileOverrides;
}
