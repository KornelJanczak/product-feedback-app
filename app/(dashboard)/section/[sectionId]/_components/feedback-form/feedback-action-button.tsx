import FormContainer from "./form-container";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";

export default function FeedbackActionButton({
  currentUser,
  currentUserIsAdmin,
  actionType,
}: {
  currentUser: ICurrentUser;
  currentUserIsAdmin: boolean;
  actionType: "create" | "update";
}) {
  return (
    <Dialog>
      <DialogTrigger
        className="flex sm:flex items-center justify-center gap-0.5 bg-pink text-darkWhite text-nowrap px-3 py-1 rounded-md 
      hover:bg-pink hover:opacity-70 hover:transition-all hover:duration-300 w-6/12 sm:w-auto"
      >
        <PlusIcon width={18} height={18} color="#fff" />
        New feedback
      </DialogTrigger>
      <DialogContent>
        <FormContainer
          currentUser={currentUser}
          currentUserIsAdmin={currentUserIsAdmin}
          actionType={actionType}
        />
      </DialogContent>
    </Dialog>
  );
}
