"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconHamburger from "@/public/icons/icon-hamburger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import IconLeft from "@/public/icons/icon-left";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SettingsIcon from "@/public/icons/settings";

export default function MobileSheet() {
  const { data } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <IconHamburger />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex items-center justify-center">
          <div className="pt-2 flex items-center justify-center">
            <Avatar className="w-36 h-36">
              <AvatarImage src="https://github.com/shadcn.png" className="" />
              <AvatarFallback className="">CN</AvatarFallback>
            </Avatar>
          </div>
          <SheetTitle className="pt-1 text-dark font-bold">
            Hello {data?.user?.name}!
          </SheetTitle>
          <div className="flex items-center justify-center gap-x-4 pt-4">
            <Button
              className="bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300 flex gap-x-1"
              onClick={() => router.push("/account")}
            >
              Account Settings <SettingsIcon />
            </Button>
            <Button
              className="bg-red hover:opacity-70 hover:bg-red hover:transition duration-300 flex gap-x-1"
              onClick={() => signOut()}
            >
              Sign Out <IconLeft />
            </Button>
          </div>
          <Button
            className="bg-dark hover:opacity-70 hover:bg-dark hover:transition duration-300"
            onClick={() => {
              setOpen((open) => !open);
              router.push("/friends");
            }}
          >
            Find Friends!
          </Button>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
