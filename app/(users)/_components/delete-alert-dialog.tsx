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
  const { status: deleteFriendStatus, execute: deleteFriendExecute } =
    useAction(deleteUserFriend, {
      onSuccess(data) {
        toast.dismiss(toastId);
        if (data.error) {
          toast.error("Delete user failed!", { duration: 3000 });
        } else {
          toast.success(`We deleted your ${userName} from your friends!`, {
            duration: 3000,
          });
        }
      },
      onError() {
        toast.error("Friend deleting failed!");
      },
    });

  // Delete image action handler
  const { execute: deleteImageExecute, status: deleteImageStatus } = useAction(
    deleteImage,
    {
      onSuccess(data) {
        toast.dismiss(toastId);
        if (data.error) {
          toast.error(data.error, { duration: 3000 });
        } else {
          toast.success(`We deleted your ${imageType} image!`, {
            duration: 3000,
          });
        }
      },
      onError() {
        toast.error("Image deleting failed!");
      },
    }
  );

  //Loading toast execute
  useEffect(() => {
    if (deleteImageStatus === "executing" || deleteFriendStatus === "executing")
      toast.loading("Loading...", { id: toastId });
  }, [deleteFriendStatus, deleteImageStatus]);

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
      <AlertDialogContent className={cn(className)}>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-secondDark">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-grey">
            {alertType === "deleteFriend" &&
              `This action cannot be undone. This will delete @${userName} from your
            friends.`}
            {alertType === "deleteImage" &&
              `This action cannot be undone. This will delete your ${imageType} image`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-secondDark">
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
