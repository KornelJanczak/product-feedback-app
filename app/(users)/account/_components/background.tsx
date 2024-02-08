"use client";
import PictureIcon from "@/public/icons/picture";
import React, { ChangeEvent, useRef, useState } from "react";

export default function ProfileBackground({ image }: { image?: string }) {
  const [pickedImage, setPickedImage] = useState<string | null | ArrayBuffer>(
    null
  );
  const imageInput = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) setPickedImage(null);

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file!);
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
          className="absolute rounded right-4 bottom-4 bg-pink p-1.5 hover:cursor-pointer"
          type="button"
          onClick={handlePickClick}
        >
          <PictureIcon />
        </button>
      </div>
    );
}
