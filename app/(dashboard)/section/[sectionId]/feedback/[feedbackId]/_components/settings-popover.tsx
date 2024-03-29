import ActionAlertDialog from "@/components/action-alert-dialog";
import DeleteTag from "@/components/delete-tag";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { deleteCommentOrReply } from "@/server-actions/product/comment/delete-comment-or-reply";
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

  const { execute: deleteCommentOrReplyExecute } = useAction(
    deleteCommentOrReply,
    {
      onExecute() {
        toast.loading(`Deleting ${cardyType}...`, { id: toastId });
      },
      onSuccess() {
        toast.dismiss(toastId);
        toast.success(`We deleted the ${cardyType} successfully`);
      },
      onError() {
        toast.dismiss(toastId);
        toast.error(`Failed to delete ${cardyType}`);
      },
    }
  );

  const executeDeleteHandler = () => {
    if (isComment) {
      deleteCommentOrReplyExecute({
        feedbackId,
        commentId,
        sectionId,
        actionType: cardyType,
      });
    }

    if (isReply && replyId) {
      deleteCommentOrReplyExecute({
        feedbackId,
        replyId,
        sectionId,
        actionType: cardyType,
      });
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
