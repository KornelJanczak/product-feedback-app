"use client";
import { updateImage } from "@/server-actions/user/update-image";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { ChangeEvent, useEffect, useRef } from "react";

const duration = 2000;

export const useImage = (imageType: "avatar" | "profile") => {
  const imageInput = useRef<HTMLInputElement>(null);
  const toastId = "loadingToast";

  const { execute, status } = useAction(updateImage, {
    onSuccess() {
      toast.dismiss(toastId);
      toast.success("Image has been uploaded!");
    },
  });

  useEffect(() => {
    if (status === "executing") {
      toast.loading("Loading...", { id: toastId });
    } else if (status == "hasErrored") {
      toast.dismiss(toastId);
      toast.error("Image uploading has beed failed!");
    }
  }, [status]);

  const handlePickClick = () => {
    if (imageInput.current) imageInput.current.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (!event.target.files) return;
    const file = event.target.files?.[0];

    if (!file)
      toast.error("Update backround image has failed! Try again.", {
        duration,
      });

    fileReader.onload = () => {
      execute({ image: fileReader.result as string, imageType });
    };

    fileReader.readAsDataURL(file!);
  };

  return { handleImageChange, handlePickClick, execute, imageInput };
};