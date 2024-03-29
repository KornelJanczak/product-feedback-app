"use client";
import ActionAlertDialog from "@/components/action-alert-dialog";
import DeleteTag from "@/components/delete-tag";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { deleteFeedback } from "@/server-actions/product/feedback/delete-feedback";
import { Settings, Trash2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface ISettingsPopover {
  feedbackId: string;
  sectionId: string;
  currentUserId: string;
}

type Params = { feedbackId?: string; sectionId: string };

export default function SettingsPopover({
  feedbackId,
  sectionId,
  currentUserId,
}: ISettingsPopover) {
  const params: Params = useParams();
  const router = useRouter();
  const toastId = "delete-feedback-toast";
  const feedbackView = params.feedbackId;

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
      if (feedbackView) {
        router.push(`/section/${sectionId}`);
      }
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
          triggerChildren={<DeleteTag />}
          description={"The following action will delete this feedback."}
        />
      </PopoverContent>
    </Popover>
  );
}
