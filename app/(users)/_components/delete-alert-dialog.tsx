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
import { useAction } from "next-safe-action/hooks";
import { deleteUserFriend } from "@/server-actions/user/delete-user-friend";
import { deleteImage } from "@/server-actions/user/delete-image";
import { toast } from "sonner";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface IDeleteAlertDialog {
  alertType: "deleteImage" | "deleteFriend";
  open: boolean;
  onClick: () => void;
  imageType?: "avatar" | "profile" | null;
  userName?: string;
  userId?: string;
  className?: string;
}

export default function DeleteAlertDialog({
  userName,
  open,
  onClick,
  userId,
  alertType,
  imageType,
  className,
}: IDeleteAlertDialog) {
  const toastId = "loadingToast";

  // Delete friend aciton handler
  const { execute: deleteFriendExecute } = useAction(deleteUserFriend, {
    onSuccess() {
      toast.dismiss(toastId);
      toast.success(`We deleted your ${userName} from your friends!`);
    },
    onError() {
      toast.dismiss(toastId);
      toast.error("Friend deleting failed!");
    },
    onExecute() {
      toast.loading("Deleting...", { id: toastId });
    },
  });

  // Delete image action handler
  const { execute: deleteImageExecute } = useAction(deleteImage, {
    onSuccess() {
      toast.dismiss(toastId);
      toast.success(`We deleted your ${imageType} image!`, {
        duration: 3000,
      });
    },
    onError() {
      toast.dismiss(toastId);
      toast.error("Image deleting failed!");
    },
    onExecute() {
      toast.loading("Deleting...", { id: toastId });
    },
  });

  //Action handler
  const deleteHandler = () => {
    if (alertType === "deleteImage" && imageType) {
      deleteImageExecute({ imageType });
    }
    if (alertType === "deleteFriend" && userId) {
      deleteFriendExecute({ userId });
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onClick}>
      <AlertDialogContent
        className={cn(className, "max-w-80 sm:max-w-md md:max-w-lg rounded")}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="text-secondDark">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-grey">
            {alertType === "deleteFriend" && (
              <span>
                This action cannot be undone. This will delete
                <strong className="text-pink"> @{userName} </strong>
                from your friends.
              </span>
            )}
            {alertType === "deleteImage" &&
              `This action cannot be undone. This will delete your ${imageType} image`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-secondDark hover:text-secondDark hover:opacity-70">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red text-darkWhite"
            onClick={deleteHandler}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
