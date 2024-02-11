import React from "react";
import Image from "next/image";
import ImageButton from "./use-image-button";

const AWS_URL =
  "https://korneljanczak-product-feedback-app.s3.eu-north-1.amazonaws.com/";

export default function ProfileBackground({ image }: { image?: string }) {
  console.log("a");

  if (!image)
    return (
      <div className="relative w-full bg-dark h-52">
        <ImageButton type="profile" />
      </div>
    );

  if (image) {
    return (
      <div className="relative w-full h-52">
        <Image
          alt="user-background-image"
          src={AWS_URL + image}
          className="w-full h-full"
          width={375}
          height={120}
        />
        <ImageButton type="profile" />
      </div>
    );
  }
}
