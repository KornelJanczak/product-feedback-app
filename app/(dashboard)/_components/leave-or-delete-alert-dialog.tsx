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
import ActionAlertDialog from "@/components/action-alert-dialog";

interface IActionAlertDialog {
  dialogType: "leave" | "delete";
  currentUserId: string;
  sectionId: string;
  className?: string;
}

export default function LeaveOrDeleteAlertDialog({
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
    <ActionAlertDialog
      description={
        leaveType
          ? "You won't be able to rejoin the section unless someone adds you back."
          : "The removal of the section cannot be undone."
      }
      triggerClassName={cn(
        "flex items-center rounded-lg text-grey hover:text-pink transition-all duration-300 gap-1",
        className
      )}
      triggerChildren={
        <>
          {leaveType && <LogOutIcon width={16} height={16} />}
          {deleteType && <Trash2Icon width={16} height={16} />}
          {leaveType && "Leave"}
          {deleteType && "Delete"}
        </>
      }
      onContinueHandler={onClickHandler}
    />
  );
}
