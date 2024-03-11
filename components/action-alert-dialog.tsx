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
import React, { ReactNode } from "react";

interface IActionAlertDialog {
  description: string | ReactNode;
  triggerChildren: React.ReactNode;
  triggerClassName?: string;
  onContinueHandler: () => void;
}

export default function ActionAlertDialog({
  description,
  triggerChildren,
  triggerClassName,
  onContinueHandler,
}: IActionAlertDialog) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={triggerClassName}>
        {triggerChildren}
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-80 sm:max-w-md md:max-w-lg rounded">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-secondDark">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
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
            onClick={onContinueHandler}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
