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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteFeedbackSection } from "@/server-actions/product/delete-feedback-section";
import { LogOutIcon, Trash2Icon } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

export default function ActionAlertDialog({
  dialogType,
  currentUserId,
  sectionId,
}: {
  dialogType: "leave" | "delete";
  currentUserId: string;
  sectionId: string;
}) {
  const toastId = "loadingToast";
  const deleteType = dialogType === "delete";
  const leaveType = dialogType === "leave";

  const { execute: deleteExecute } = useAction(deleteFeedbackSection, {
    onExecute() {
      toast.loading("Deleting...", { id: toastId });
    },
    onSuccess() {
      toast.dismiss(toastId);
      toast.success("We delated your section!");
    },
    onError() {
      toast.dismiss(toastId);
      toast.error("Deleting section failed!");
    },
  });

  const onClickHandler = () => {
    if (deleteType) {
      deleteExecute({ userId: currentUserId, sectionId });
    }

    if (leaveType) {
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="flex rounded-lg  text-red 
        gap-0.5"
      >
        {leaveType && (
          <div
            className="flex items-center rounded-lg  text-grey
            hover:text-pink transition-all duration-300
             gap-1"
          >
            <LogOutIcon width={16} height={16} />
            Leave
          </div>
        )}
        {deleteType && (
          <div
            className="flex items-center rounded-lg  text-grey
            hover:text-pink transition-all duration-300
            gap-1"
          >
            <Trash2Icon width={16} height={16} />
            Delete
          </div>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-80 sm:max-w-md md:max-w-lg rounded">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-secondDark">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            {leaveType &&
              "You won't be able to rejoin the section unless someone adds you back."}
            {deleteType && "The removal of the section cannot be undone."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="text-darkWhite bg-secondDark hover:bg-secondDark
            hover:text-white
           hover:opacity-75  transition-all duration-300"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red hover:bg-red hover:opacity-70 
            text-darkWhite transition-all duration-300"
            onClick={onClickHandler}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
