"use client";
import XMarkIcon from "@/public/icons/x-mark";
import { cn } from "@/lib/utils";
import { useState } from "react";
import DeleteAlertDialog from "./delete-alert-dialog";

export default function DeleteImageButton({
  className,
  type,
}: {
  className?: string;
  type: "avatar" | "profile";
}) {
  const [open, setOpen] = useState<boolean>(false);

  const onClick = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <button
        className={cn(
          "absolute z-10 bg-red p-1.5 hover:cursor-pointer",
          className
        )}
        type="button"
        onClick={onClick}
      >
        <XMarkIcon />
      </button>
      <DeleteAlertDialog
        alertType="deleteImage"
        imageType={type}
        open={open}
        onClick={onClick}
      />
    </>
  );
}
