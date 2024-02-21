import React from "react";
import Image from "next/image";
import ImageButton from "./use-image-button";
import getBase64 from "@/lib/getLocalBase64";
import DeleteImageButton from "./delete-image-button";


export default async function ProfileBackground({ image }: { image?: string }) {
  const bgImage = `${process.env.AWS_URL}${image}?${new Date().getTime()}`;

  const img = await getBase64(bgImage);

  if (!image)
    return (
      <div className="relative w-full bg-dark h-56 sm:h-72 lg:h-80 md:rounded-lg">
        <ImageButton type="profile" />
      </div>
    );

  if (image) {
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
          imageName={image}
        />
        <ImageButton type="profile" />
      </div>
    );
  }
}
