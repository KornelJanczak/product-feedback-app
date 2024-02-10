"use client";
import { updateImage } from "@/server-actions/user/update-image";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { ChangeEvent, useEffect, useRef } from "react";

const duration = 2000;

export const useImage = (imageType: "avatar" | "profile") => {
  const imageInput = useRef<HTMLInputElement>(null);

  const { execute, status } = useAction(updateImage, {
    onSuccess() {
      toast.success("Image has been uploaded!");
    },
    // onError({ fetchError, serverError }) {
    //   //   if (fetchError) toast.error(fetchError, { duration });
    //   //   else if (serverError) toast.error(serverError, { duration });
    //   //   else toast.error("Image uploading has beed failed!", { duration });
    // },
  });

  useEffect(() => {
    console.log(status);

    if (status === "executing") toast.loading("Loading...");
    else if (status == "hasErrored")
      toast.error("Image uploading has beed failed!", { duration: 5000 });
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
