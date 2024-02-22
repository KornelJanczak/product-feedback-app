import React from "react";
import Image from "next/image";
import getBase64 from "@/lib/getLocalBase64";
import DeleteImageButton from "./delete-image-button";
import ImageUploaderButton from "./image-uploader-button";

export default async function ProfileBackground({ image }: { image?: string }) {
  if (!image)
    return (
      <div className="relative w-full bg-dark h-56 sm:h-72 lg:h-80 md:rounded-lg">
        <ImageUploaderButton type="profile" />
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
        <DeleteImageButton
          className="rounded right-4 bottom-14"
          type="profile"
        />
        <ImageUploaderButton type="profile" />
      </div>
    );
  }
}
