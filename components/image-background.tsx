import React, { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface IImageBackground {
  image?: string | null;
  image64?: string | null;
  className?: string;
  buttonsWithImage?: ReactNode;
  buttonsWithoutImage?: ReactNode;
}

export default function ImageBackground({
  image,
  image64,
  buttonsWithImage,
  buttonsWithoutImage,
  className,
}: IImageBackground) {
  if (!image)
    return (
      <div
        className={cn(
          "relative w-full bg-dark h-56 sm:h-72 lg:h-80 md:rounded-lg",
          className
        )}
      >
        {buttonsWithoutImage}
      </div>
    );
  else if (image) {
    return (
      <div
        className={cn(
          "relative w-full h-56 sm:h-72 lg:h-80 md:rounded-lg",
          className
        )}
      >
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
