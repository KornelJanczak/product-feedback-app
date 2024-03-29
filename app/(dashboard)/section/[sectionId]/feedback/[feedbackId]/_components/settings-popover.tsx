import ActionAlertDialog from "@/components/action-alert-dialog";
import DeleteTag from "@/components/delete-tag";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { deleteComment } from "@/server-actions/product/comment/delete-comment";
import { deleteReply } from "@/server-actions/product/comment/delete-reply";
import { Settings } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useParams } from "next/navigation";
import { toast } from "sonner";

interface ISettingsPopover {
  commentId: string;
  replyId?: string;
  cardyType: "comment" | "reply";
}

type Params = { sectionId: string; feedbackId: string };

export default function SettingsPopover({
  commentId,
  replyId,
  cardyType,
}: ISettingsPopover) {
  const toastId = "delete-toast";
  const isComment = cardyType === "comment";
  const isReply = cardyType === "reply";
  const { sectionId, feedbackId }: Params = useParams();

  const { execute: deleteCommentExecute } = useAction(deleteComment, {
    onExecute() {
      toast.loading("Deleting comment...", { id: toastId });
    },
    onSuccess() {
      toast.dismiss(toastId);
      toast.success("Comment deleted successfully");
    },
    onError() {
      toast.dismiss(toastId);
      toast.error("Failed to delete comment");
    },
  });

  const { execute: deleteReplyExecute } = useAction(deleteReply, {
    onExecute() {
      toast.loading("Deleting reply...", { id: toastId });
    },
    onSuccess() {
      toast.dismiss(toastId);
      toast.success("Reply deleted successfully");
    },
    onError() {
      toast.dismiss(toastId);
      toast.error("Failed to delete reply");
    },
  });

  const executeDeleteHandler = () => {
    if (isComment) {
      deleteCommentExecute({ feedbackId, commentId, sectionId });
    }

    if (isReply && replyId) {
      deleteReplyExecute({ feedbackId, replyId, sectionId });
    }
  };

  return (
    <Popover>
      <PopoverTrigger className="bg-none text-blue text-sm sm:text-base font-semibold cursor-pointer ml-auto mb-auto">
        <Settings color="#3A4374" width={20} height={20} />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-full">
        <ActionAlertDialog
          onContinueHandler={executeDeleteHandler}
          triggerChildren={<DeleteTag />}
          description="This action will result in the removal of the comment."
        />
      </PopoverContent>
    </Popover>
  );
}
