import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { ReactNode } from "react";

export default function FormDrawer({ children }: { children: ReactNode }) {
  return (
    <Drawer>
      <DrawerTrigger
        className="flex items-center justify-center gap-0.5 bg-pink text-darkWhite px-3 py-1 rounded-md 
        hover:bg-pink hover:opacity-70 hover:transition-all hover:duration-300 w-6/12 sm:w-auto"
      >
        <PlusIcon width={18} height={18} color="#fff" />
        New feedback
      </DrawerTrigger>
      <DrawerContent className="h-full px-4 bg-darkWhite">
        {children}
        <DrawerClose className="pt-2">
          <Button className="w-full  bg-dark text-darkWhite" variant="outline">
            Cancel
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
