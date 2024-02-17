"use client";
import React from "react";
import Image from "next/image";
import ImageButton from "./use-image-button";

const AWS_URL =
  "https://korneljanczak-product-feedback-app.s3.eu-north-1.amazonaws.com/";

export default function ProfileBackground({ image }: { image?: string }) {
  const bgImage = `${AWS_URL}${image}?${new Date().getTime()}`;

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
          // width={375}
          // height={120}
          placeholder="blur"
          blurDataURL={bgImage}
          fill={true}
        />
        <ImageButton type="profile" />
      </div>
    );
  }
}
