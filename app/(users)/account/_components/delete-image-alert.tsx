"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteImage } from "@/server-actions/user/delete-image";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { useEffect } from "react";

export function DeleteImageAlert({
  open,
  onClick,
  type,
  imageName,
}: {
  open: boolean;
  type: "avatar" | "profile";
  imageName: string;
  onClick: () => void;
}) {
  const toastId = "loadingToast";

  const { execute, status } = useAction(deleteImage, {
    onSuccess(data) {
      toast.dismiss(toastId);
      if (data.error) {
        toast.error(data.error, { duration: 3000 });
      } else {
        toast.success(`We deleted your ${type} image!`, { duration: 3000 });
      }
    },
    onError() {
      toast.error("Image deleting failed!");
    },
  });

  useEffect(() => {
    if (status === "executing") {
      toast.loading("Loading...", { id: toastId });
    }
  }, [status]);

  return (
    <AlertDialog open={open} onOpenChange={onClick}>
      <AlertDialogContent className="max-w-80 sm:max-w-md rounded">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-secondDark">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-grey">
            This action cannot be undone. This will delete your {type} image
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-secondDark">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => execute({ imageName, imageType: type })}
            className="bg-red text-darkWhite"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
