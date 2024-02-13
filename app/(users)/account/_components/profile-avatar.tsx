"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageButton from "./use-image-button";
import { useEffect, useState } from "react";

const AWS_URL =
  "https://korneljanczak-product-feedback-app.s3.eu-north-1.amazonaws.com/";

export default function UserAvatar({
  username,
  firstName,
  lastName,
  image,
}: {
  username: string;
  image?: string;
  firstName?: string | undefined;
  lastName?: string | undefined;
}) {
  const firstAndLastNameExist = firstName && lastName;

  const avatar = image
    ? `${AWS_URL}${image}?${new Date().getTime()}`
    : "https://github.com/shadcn.png";

  return (
    <div className="container absolute top-24 w-full flex flex-col items-center justify-center">
      <div className="relative">
        <Avatar className="w-44 h-44">
          <AvatarImage src={avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ImageButton type="avatar" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl font-medium pt-2 text-dark">
          {firstAndLastNameExist ? firstName + " " + lastName : username}
        </h2>
      </div>
    </div>
  );
}
//
