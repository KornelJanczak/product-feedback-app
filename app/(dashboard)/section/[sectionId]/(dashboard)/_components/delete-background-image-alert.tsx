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
import { deleteFeedbackSectionBgImage } from "@/server-actions/product/delete-feedback-section-bg-image";

import { X } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

export default function DeleteBackgroundImageAlert({
  sectionTitle,
  sectionId,
}: {
  sectionTitle: string;
  sectionId: string;
}) {
  const toastId = "deleteId";
  const { execute } = useAction(deleteFeedbackSectionBgImage, {
    onSuccess() {
      toast.dismiss(toastId);
      toast.success(`We deleted background image from ${sectionTitle}`);
    },
    onError() {
      toast.dismiss(toastId);
      toast.error("Deleting backround image failed!");
    },
    onExecute() {
      toast.loading("Deleting...", { id: toastId });
    },
  });

  const onClickHandler = () => {
    execute({ sectionId: sectionId });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="absolute z-10 bg-red p-1.5 hover:cursor-pointer 
      rounded bottom-14 right-4"
      >
        <X height={22} width={22} color="#fff" />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-80 sm:max-w-md md:max-w-lg rounded">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-dark">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            <span className="text-grey">
              This action will delete background image from
            </span>
            <strong className="text-pink"> {sectionTitle}</strong>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="text-darkWhite bg-dark
             hover:opacity-70"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red text-darkWhite 
            hover:opacity-70 hover:duration-300 hover:transition-all"
            onClick={onClickHandler}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
