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
import UserAvatar from "./user-avatar";

export default function MobileSidebar() {
  const { data: session } = useSession();

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <IconHamburger />
      </SheetTrigger>

      <SheetContent side={"right"}>
        <UserAvatar
          userImage={session?.user?.image}
          className="m-auto h-24 w-24"
        />
        <h2 className="pt-2 text-dark font-semibold text-xl sm:text-2xl md:text-3xl text-center">
          Hello {session?.user?.name}!
        </h2>
        <SidebarRoutes />
      </SheetContent>
    </Sheet>
  );
}
