"use client";
import PictureIcon from "@/public/icons/picture";
import { useImage } from "@/hooks/use-image";
import React from "react";
import Image from "next/image";

export default function ProfileBackground({ image }: { image?: string }) {
  
  const { imageInput, handleImageChange, handlePickClick } = useImage();

  if (!image)
    return (
      <form className="relative w-full bg-dark h-52">
        <input
          className="hidden"
          type="file"
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className="absolute z-10 rounded right-4 bottom-4 bg-pink p-1.5 hover:cursor-pointer"
          type="button"
          onClick={handlePickClick}
        >
          <PictureIcon />
        </button>
      </form>
    );
}
