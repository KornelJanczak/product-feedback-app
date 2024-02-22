import React from "react";
import Image from "next/image";
import getBase64 from "@/lib/getLocalBase64";
import DeleteImageButton from "./delete-image-button";
import ImageUploaderButton from "./image-uploader-button";
import { Skeleton } from "@/components/ui/skeleton";

export default async function ProfileBackground({
  image,
  viewType,
}: {
  image?: string | null;
  viewType: "accountView" | "profileView";
}) {
  if (!image)
    return (
      <div className="relative w-full bg-dark h-56 sm:h-72 lg:h-80 md:rounded-lg">
        {viewType === "accountView" && <ImageUploaderButton type="profile" />}
      </div>
    );
  else if (image) {
    const bgImage = `${image}?${new Date().getTime()}`;
    const img = await getBase64(bgImage);
    return (
      <div className="relative w-full h-56 sm:h-72 lg:h-80 md:rounded-lg">
        <Image
          alt="user-background-image"
          src={bgImage}
          className="w-full h-full object-cover md:rounded-lg"
          placeholder="blur"
          blurDataURL={img}
          quality={100}
          priority
          fill
        />
        {viewType === "accountView" && (
          <DeleteImageButton
            className="rounded right-4 bottom-14"
            type="profile"
          />
        )}
        {viewType === "accountView" && <ImageUploaderButton type="profile" />}
      </div>
    );
  }
}

export function ProfileBackgroundSkeleton() {
  return (
    <Skeleton
      className="w-full h-56 rounded-none bg-[#0000002c]
 sm:h-72 lg:h-80 md:rounded-lg"
    />
  );
}
