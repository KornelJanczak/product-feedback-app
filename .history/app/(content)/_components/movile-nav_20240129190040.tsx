"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconClose from "@/public/icons/icon-close";
import IconHamburger from "@/public/icons/icon-hamburger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function MobileSheet() {
  const { data } = useSession();

  return (
    <Sheet>
      <SheetTrigger>
        <IconHamburger />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="pt-2 flex items-center justify-center">
            <Avatar className="w-36 h-36">
              <AvatarImage src="https://github.com/shadcn.png" className="" />
              <AvatarFallback className="">CN</AvatarFallback>
            </Avatar>
          </div>
          <SheetTitle className="pt-1">{data?.user?.name}</SheetTitle>
          <div className="flex items-center justify-between">
            <Button></Button>
            <Button></Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
