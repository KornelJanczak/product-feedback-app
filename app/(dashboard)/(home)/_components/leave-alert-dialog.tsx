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
import IconLeft from "@/public/icons/icon-left";

export default function LeaveAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="flex rounded-lg bg-red text-basicWhite px-2 pt-1 pb-1 h-auto 
            text-sm sm:text-base gap-0.5"
      >
        Leave
        <IconLeft />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-secondDark">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            You won&apos;t be able to rejoin the section unless someone adds
            you back.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="text-secondDark hover:text-secondDark
           hover:opacity-90  transition-all duration-300"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red hover:bg-red hover:opacity-70 
            text-darkWhite transition-all duration-300"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
