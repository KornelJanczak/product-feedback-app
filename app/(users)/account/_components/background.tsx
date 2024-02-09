"use client";
import PictureIcon from "@/public/icons/picture";
import { updateImage } from "@/server-actions/user/update-image";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import React, { ChangeEvent, useRef } from "react";
import Image from "next/image";

export default function ProfileBackground({ image }: { image?: string }) {
  const imageInput = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    if (imageInput.current) imageInput.current.click();
  };
  const { execute } = useAction(updateImage, {});

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files?.[0];

    // if (!file)
    // toast.error("Update backround image has failed! Try again later.");

    const fileReader = new FileReader();

    console.log(file);
    fileReader.onload = () => {
      if (fileReader.result)
        execute({ image: fileReader.result as string, imageType: "profile" });

      fileReader.readAsDataURL(file!);
    };
  };

  if (!image)
    return (
      <div className="relative w-full bg-dark h-52">
        <input
          className="hidden"
          type="file"
          accept="image/png, image/jpeg"
          id="bgImagePicke"
          name="bgImagePicker"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className="absolute z-10 rounded right-4 bottom-4 bg-pink p-1.5 hover:cursor-pointer"
          type="button"
          onClick={handlePickClick}
        >
          <PictureIcon />
        </button>
      </div>
    );
}
