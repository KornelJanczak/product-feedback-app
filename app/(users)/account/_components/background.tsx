import React from "react";
import Image from "next/image";
import ImageButton from "./use-image-button";
import getBase64 from "@/lib/getLocalBase64";

const AWS_URL =
  "https://korneljanczak-product-feedback-app.s3.eu-north-1.amazonaws.com/";

export default async function ProfileBackground({ image }: { image?: string }) {
  const bgImage = `${AWS_URL}${image}?${new Date().getTime()}`;

  const img = await getBase64(bgImage);

  if (!image)
    return (
      <div className="relative w-full bg-dark h-52">
        param.friendsFilter
        <ImageButton type="profile" />
      </div>
    );

  if (image) {
    return (
      <div className="relative w-full h-56">
        <Image
          alt="user-background-image"
          src={bgImage}
          className="w-full h-full"
          placeholder="blur"
          blurDataURL={img}
          quality={100}
          priority
          fill
          objectFit="cover"
        />
        <ImageButton type="profile" />
      </div>
    );
  }
}
