"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import DeleteAlertDialog from "./delete-alert-dialog";
import { X } from "lucide-react";

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
        <X height={22} width={22} color="#fff" />
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
