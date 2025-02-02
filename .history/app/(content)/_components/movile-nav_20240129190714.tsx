"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconClose from "@/public/icons/icon-left";
import IconHamburger from "@/public/icons/icon-hamburger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import IconLeft from "@/public/icons/icon-left";

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
          <SheetTitle className="pt-1">Hello {data?.user?.name}!</SheetTitle>
          <div className="flex items-center justify-between pt-4">
            <Button className="bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300">
              Account Settings
            </Button>
            <Button className="bg-red hover:opacity-70 hover:bg-red hover:transition duration-300 flex gap-x-1">
              Sign Out <IconLeft />
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
