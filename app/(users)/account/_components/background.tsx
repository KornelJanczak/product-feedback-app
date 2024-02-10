"use client";
import PictureIcon from "@/public/icons/picture";
import { updateImage } from "@/server-actions/user/update-image";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import React, { ChangeEvent, useRef } from "react";
import Image from "next/image";

export default function ProfileBackground({ image }: { image?: string }) {
  const imageInput = useRef<HTMLInputElement>(null);
  const { execute } = useAction(updateImage, {});

  const handlePickClick = () => {
    if (imageInput.current) imageInput.current.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (!event.target.files) return;
    const file = event.target.files?.[0];

    if (!file) toast.error("Update backround image has failed! Try again.");

    fileReader.onload = () => {
      execute({ image: fileReader.result as string, imageType: "profile" });
    };

    fileReader.readAsDataURL(file!);
  };

  const submitForm = (e: any) => {
    e.preventDefault();
  };

  if (!image)
    return (
      <form className="relative w-full bg-dark h-52" onSubmit={submitForm}>
        <input
          className="hidden"
          type="file"
          accept="image/png, image/jpeg"
          id="bgImagePicke"
          name="bgImagePicker"
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className="absolute z-10 rounded right-4 bottom-4 bg-pink p-1.5 hover:cursor-pointer"
          type="submit"
          onClick={handlePickClick}
        >
          <PictureIcon />
        </button>
      </form>
    );
}
