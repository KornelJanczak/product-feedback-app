"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import SearchIcon from "@/public/icons/search";
import { Input } from "@/components/ui/input";
import { RefObject } from "react";

export default function FilterBarDrawer({
  className,
  mobileInputRef,
}: {
  className?: string;
  mobileInputRef: RefObject<HTMLInputElement>;
}) {
  return (
    <Drawer>
      <DrawerTrigger
        className={cn(
          "py-2 px-4 rounded-md bg-blue hover:opacity-60 hover:bg-blue hover:transition duration-300",
          className
        )}
      >
        <SearchIcon />
      </DrawerTrigger>
      <DrawerContent className="h-5/6 bg-darkWhite ">
        <DrawerHeader>
          <Input
            className="rounded-xl text-base py-5 px-3 bg-transparent border-[#CDD2EE] border-2
         bg-darkWhite w-auto text-dark placeholder:text-dark"
            placeholder="Search section"
            ref={mobileInputRef}
          />
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose
            className="text-darkWhite bg-pink hover:bg-pink hover:opacity-70  
            transition-all duration-300 rounded-md py-1.5 px-1"
            type="submit"
            form="mainForm"
          >
            Show sections
          </DrawerClose>
          <DrawerClose
            className="text-darkWhite w-full rounded-md py-1.5 px-1 bg-dark
            hover:bg-dark hover:opacity-70  
            transition-all duration-300"
          >
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
