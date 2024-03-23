import FormContainer from "./form-container";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IFeedbackActionButton {
  currentUser: ICurrentUser;
  currentUserIsAdmin: boolean;
  feedbackId?: string;
  headerTitle: string;
  title?: string;
  detail?: string;
  status?: string;
  category?: string;
  actionType: "create" | "update";
}

export default function FeedbackActionButton({
  currentUser,
  currentUserIsAdmin,
  feedbackId,
  headerTitle,
  actionType,
  title,
  detail,
  status,
  category,
}: IFeedbackActionButton) {
  const isCreateForm = actionType === "create";
  const isEditForm = actionType === "update";

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "flex sm:flex items-center justify-center gap-0 text-darkWhite text-nowrap px-3 py-1 rounded-md hover:opacity-70 hover:transition-all hover:duration-300",
          isCreateForm && "bg-pink hover:bg-pink w-6/12 sm:w-auto",
          isEditForm && "bg-blue hover:bg-blue"
        )}
      >
        {isCreateForm && (
          <>
            <PlusIcon width={18} height={18} color="#fff" />
            New feedback
          </>
        )}
        {isEditForm && "Edit Feedback"}
      </DialogTrigger>
      <DialogContent>
        <FormContainer
          currentUser={currentUser}
          currentUserIsAdmin={currentUserIsAdmin}
          actionType={actionType}
          feedbackId={feedbackId}
          headerTitle={headerTitle}
          title={title}
          detail={detail}
          status={status}
          category={category}
        />
      </DialogContent>
    </Dialog>
  );
}
