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
import SidebarRoutes from "./sidebar-routes";
import getCurrentUser from "@/lib/user/get-current-user";
import { useSession } from "next-auth/react";

export default function MobileSidebar() {
  const { data: session } = useSession();

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <IconHamburger />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex items-center justify-center md:hidden">
          <div className="pt-2 flex items-center justify-center">
            {/* <Avatar className="w-36 h-36">
              <AvatarImage src="https://github.com/shadcn.png" className="" />
              <AvatarFallback className="">CN</AvatarFallback>
            </Avatar> */}
          </div>
          <SheetTitle className="pt-1 text-dark font-bold">
            {/* Hello {data?.user?.name}! */}
          </SheetTitle>
          <SidebarRoutes />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
