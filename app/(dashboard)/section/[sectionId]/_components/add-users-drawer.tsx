"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
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
      hover:opacity-70 hover:transition-all hover:duration-300"
      >
        Add User
        <UserPlus2Icon width={18} height={18} color="#fff" />
      </DrawerTrigger>
      <DrawerContent className="h-5/6 bg-darkWhite">
        <DrawerHeader>
          {/* <DrawerTitle>Are you absolutely sure?</DrawerTitle> */}
          {children}
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
