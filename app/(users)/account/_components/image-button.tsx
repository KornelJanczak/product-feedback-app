"use client";
import { useImage } from "@/hooks/use-image";
import PictureIcon from "@/public/icons/picture";
import CameraIcon from "@/public/icons/camera";

export default function ImageButton({ type }: { type: "profile" | "avatar" }) {
  const { imageInput, handleImageChange, handlePickClick } = useImage(type);

  const absoluteSpace =
    type === "profile"
      ? "rounded right-4 bottom-4"
      : "rounded-full right-1 bottom-2";

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
        className={`absolute z-10  ${absoluteSpace} bg-pink p-1.5 hover:cursor-pointer`}
        type="button"
        onClick={handlePickClick}
      >
        {type === "profile" && <PictureIcon />}
        {type === "avatar" && <CameraIcon />}
      </button>
    </>
  );
}
