import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { UserPlus2Icon } from "lucide-react";
import { ReactNode } from "react";

export default function AddUsersDrawer({ children }: { children: ReactNode }) {
  return (
    <Drawer>
      <DrawerTrigger
        className="flex items-center justify-center gap-1 bg-blue text-darkWhite px-3 py-1 rounded-md 
      hover:opacity-70 hover:transition-all hover:duration-300 w-5/12 sm:hidden"
      >
        <UserPlus2Icon width={18} height={18} color="#fff" />
        Add User
      </DrawerTrigger>
      <DrawerContent className="h-5/6 bg-darkWhite">
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
