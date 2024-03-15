"use client";
import { Button } from "@/components/ui/button";
import { addUsersToFeedbackSection } from "@/server-actions/product/feedback-section/add-user-to-feedback-section";
import { UserPlus2Icon } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "next/navigation";

interface IAdminActionButton {
  userId: string;
  userName: string;
}

export default function AddUsersButton({
  userId,
  userName,
}: IAdminActionButton) {
  const { sectionId } = useParams();

  const sectionIdGuard =
    typeof sectionId === "string" ? sectionId : sectionId[0];

  const { execute, status } = useAction(addUsersToFeedbackSection, {
    onSuccess: () => {
      toast.success(`You have added a ${userName} to the section!`);
    },
    onError: () => {
      toast.error("Adding a user failed!");
    },
  });

  const handleClick = () => {
    execute({ userId, sectionId: sectionIdGuard });
  };

  const isExecuting = status === "executing";

  return (
    <Button
      className="gap-1 bg-pink hover:bg-pink hover:opacity-70 hover:transition-all hover:duration-300"
      onClick={handleClick}
    >
      {!isExecuting && <UserPlus2Icon width={20} height={20} />}
      {isExecuting && <ClipLoader size={20} color="#ffffff" />}
      Add user
    </Button>
  );
}
