"use client";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { useCallback } from "react";
import PictureIcon from "@/public/icons/picture";
import CameraIcon from "@/public/icons/camera";
import { useUploadThing } from "@/utils/uploadthing";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function ImageUploaderButton({
  type,
}: {
  type: "profile" | "avatar";
}) {
  const toastID = "uploadToast";

  const { startUpload, permittedFileInfo } = useUploadThing(type, {
    onClientUploadComplete: () => {
      toast.dismiss(toastID);
      toast.success(`We uploaded your ${type} image!`);
    },
    onUploadError: () => {
      toast.dismiss(toastID);
      toast.error(`Uploading your ${type} image failed!`);
    },
    onUploadBegin: () => {
      toast.loading("Uploading...", { id: toastID });
    },
  });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log(acceptedFiles);

      startUpload(acceptedFiles);
    },
    [startUpload]
  );

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  const absoluteSpace =
    type === "profile"
      ? "rounded right-4 bottom-4"
      : "rounded-full right-3 bottom-2";

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} className="hidden" multiple={false} />
      <button
        className={cn(
          `absolute z-10 bg-pink p-1.5 hover:cursor-pointer`,
          absoluteSpace
        )}
      >
        {type === "profile" && <PictureIcon />}
        {type === "avatar" && <CameraIcon />}
      </button>
    </div>
  );
}
