"use client";
import ActionAlertDialog from "@/components/action-alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { deleteFeedback } from "@/server-actions/product/feedback/delete-feedback";
import { Settings, Trash2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface ISettingsPopover {
  feedbackId: string;
  sectionId: string;
  currentUserId: string;
}

export default function SettingsPopover({
  feedbackId,
  sectionId,
  currentUserId,
}: ISettingsPopover) {
  const toastId = "delete-feedback-toast";

  const { execute } = useAction(deleteFeedback, {
    onExecute() {
      toast.loading("Deleting feedback...", { id: toastId });
    },
    onError() {
      toast.dismiss(toastId);
      toast.error("Failed to delete feedback!");
    },
    onSuccess() {
      toast.dismiss(toastId);
      toast.success("Feedback deleted!");
    },
  });

  const onClickHandler = () => {
    execute({
      feedbackId,
      sectionId,
      currentUserId,
    });
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Settings width={20} height={20} color="#3A4374" />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="flex flex-col items-center w-auto gap-2"
      >
        <ActionAlertDialog
          onContinueHandler={onClickHandler}
          triggerChildren={
            <div className="flex justify-center items-center gap-1 text-sm text-grey">
              <Trash2 width={18} height={18} color="#647196" />
              Delete
            </div>
          }
          description={"The following action will delete this feedback."}
        />
      </PopoverContent>
    </Popover>
  );
}
