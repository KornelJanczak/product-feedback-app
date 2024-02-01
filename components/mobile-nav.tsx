"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconHamburger from "@/public/icons/icon-hamburger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { useState } from "react";
import AccountPanel from "../app/(users)/_components/account-panel";

export default function MobileSheet() {
  const [open, setOpen] = useState(false);
  const { data } = useSession();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden">
        <IconHamburger />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex items-center justify-center md:hidden">
          <div className="pt-2 flex items-center justify-center">
            <Avatar className="w-36 h-36">
              <AvatarImage src="https://github.com/shadcn.png" className="" />
              <AvatarFallback className="">CN</AvatarFallback>
            </Avatar>
          </div>
          <SheetTitle className="pt-1 text-dark font-bold">
            Hello {data?.user?.name}!
          </SheetTitle>
          <AccountPanel onClick={() => setOpen((open) => !open)} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
