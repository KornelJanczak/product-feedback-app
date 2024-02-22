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
import { toast } from "sonner";
import { useEffect } from "react";

export default function DeleteFriendDialog({
  userName,
  open,
  onClick,
  userId,
}: {
  userName: string;
  open: boolean;
  userId: string;
  onClick: () => void;
}) {
  const toastId = "loadingToast";
  const { status: deleteFriendStatus, execute: deleteFriendExecute } =
    useAction(deleteUserFriend, {
      onSuccess(data) {
        toast.dismiss(toastId);
        if (data.error) {
          // toast.error(data.error, { duration: 3000 });
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
  return (
    <AlertDialog open={open} onOpenChange={onClick}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-secondDark">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will delete @{userName} from your
            friends.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-secondDark">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red text-darkWhite"
            onClick={() => deleteFriendExecute({ userId })}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
