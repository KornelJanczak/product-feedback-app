"use client";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { ReactNode, useCallback } from "react";
import { useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface IImageUploaderButton {
  actionType:
    | "profileBackground"
    | "profileAvatar"
    | "feedbackSectionBackgroundImage";
  className?: string;
  children: ReactNode;
  successToast: string;
  errorToast: string;
}
export default function ImageUploaderButton({
  actionType,
  className,
  children,
  successToast,
  errorToast,
}: IImageUploaderButton) {
  const toastID = "uploadToast";

  const { startUpload, permittedFileInfo } = useUploadThing(actionType, {
    onClientUploadComplete: () => {
      toast.dismiss(toastID);
      toast.success(successToast);
    },
    onUploadError: () => {
      toast.dismiss(toastID);
      toast.error(errorToast);
    },
    onUploadBegin: () => {
      toast.loading("Uploading...", { id: toastID });
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (actionType === "feedbackSectionBackgroundImage") {
        startUpload(acceptedFiles, { sectionId: "" });
      } else if (actionType === "profileAvatar") {
        //@ts-ignore
        startUpload(acceptedFiles);
      }
    },
    [startUpload, actionType]
  );

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} className="hidden" multiple={false} />
      <button
        className={cn(
          `absolute z-10 bg-pink p-1.5 hover:cursor-pointer`,
          className
        )}
      >
        {children}
      </button>
    </div>
  );
}
