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
import { leaveFromFeedbackSection } from "@/server-actions/product/leave-from-feedback-section";
import { LogOutIcon, Trash2Icon } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface IActionAlertDialog {
  dialogType: "leave" | "delete";
  currentUserId: string;
  sectionId: string;
  className?: string;
}

export default function ActionAlertDialog({
  dialogType,
  currentUserId,
  sectionId,
  className,
}: IActionAlertDialog) {
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

  const { execute: leaveExecute } = useAction(leaveFromFeedbackSection, {
    onExecute() {
      toast.loading("Leaving...", { id: toastId });
    },
    onSuccess() {
      toast.dismiss(toastId);
      toast.success("You have left this section!");
    },
    onError() {
      toast.dismiss(toastId);
      toast.error("Leaving section failed!");
    },
  });

  const onClickHandler = () => {
    const executeData = {
      userId: currentUserId,
      sectionId,
    };

    if (deleteType) deleteExecute(executeData);

    if (leaveType) leaveExecute(executeData);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {leaveType && (
          <div
            className={cn(
              "flex items-center rounded-lg text-grey hover:text-pink transition-all duration-300 gap-1",
              className
            )}
          >
            <LogOutIcon width={16} height={16} />
            Leave
          </div>
        )}
        {deleteType && (
          <div
            className={cn(
              "flex items-center rounded-lg text-grey hover:text-pink transition-all duration-300 gap-1",
              className
            )}
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
