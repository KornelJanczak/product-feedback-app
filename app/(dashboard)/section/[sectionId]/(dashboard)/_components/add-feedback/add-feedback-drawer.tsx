import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { UserPlus2Icon } from "lucide-react";
import { ReactNode } from "react";

export default function AddFeedbackDrawer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Drawer>
      <DrawerTrigger
        className="flex items-center justify-center gap-0.5 bg-pink text-darkWhite px-3 py-1 rounded-md 
        hover:bg-pink hover:opacity-70 hover:transition-all hover:duration-300 w-6/12 sm:w-auto"
      >
        <UserPlus2Icon width={18} height={18} color="#fff" />
        Add User
      </DrawerTrigger>
      <DrawerContent className="h-full bg-darkWhite">
        {children}
        <DrawerClose className="pb-4 pt-5 px-4">
          <Button className="w-full bg-dark text-darkWhite" variant="outline">
            Cancel
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
