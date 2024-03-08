import React, { ReactNode } from "react";
import Image from "next/image";

interface IImageBackground {
  image?: string | null;
  image64?: string | null;
  buttonsWithImage?: ReactNode;
  buttonsWithoutImage?: ReactNode;
}

export default function ImageBackground({
  image,
  image64,
  buttonsWithImage,
  buttonsWithoutImage,
}: IImageBackground) {
  if (!image)
    return (
      <div className="relative w-full bg-dark h-56 sm:h-72 lg:h-80 md:rounded-lg">
        {buttonsWithoutImage}
      </div>
    );
  else if (image) {
    return (
      <div className="relative w-full h-56 sm:h-72 lg:h-80 md:rounded-lg">
        <Image
          alt="user-background-image"
          src={image}
          className="w-full h-full object-cover md:rounded-lg"
          placeholder="blur"
          blurDataURL={image64 ? image64 : undefined}
          quality={100}
          priority
          fill
        />

        {buttonsWithImage}
      </div>
    );
  }
}
