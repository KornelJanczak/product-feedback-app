"use client";
import { useImage } from "@/hooks/use-image";
import PictureIcon from "@/public/icons/picture";
import CameraIcon from "@/public/icons/camera";
import { cn } from "@/lib/utils";

export default function ImageButton({ type }: { type: "profile" | "avatar" }) {
  const { imageInput, handleImageChange, handlePickClick } = useImage(type);

  const absoluteSpace =
    type === "profile"
      ? "rounded right-4 bottom-4"
      : "rounded-full right-3 bottom-2";

  return (
    <>
      <input
        className="hidden"
        type="file"
        accept="image/png, image/jpeg"
        ref={imageInput}
        onChange={handleImageChange}
      />
      <button
        className={cn(
          `absolute z-10 bg-pink p-1.5 hover:cursor-pointer`,
          absoluteSpace
        )}
        type="button"
        onClick={handlePickClick}
      >
        {type === "profile" && <PictureIcon />}
        {type === "avatar" && <CameraIcon />}
      </button>
    </>
  );
}
