"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import IconHamburger from "@/public/icons/icon-hamburger";
import SidebarRoutes from "./sidebar-routes";
import { useSession } from "next-auth/react";
import UserInfoCard from "./user-info-card";

export default function MobileSidebar() {
  const { data: session } = useSession();

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <IconHamburger />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <UserInfoCard
          userName={session?.user?.name}
          userEmail={session?.user?.email}
          userImage={session?.user?.image}
        />
        <SidebarRoutes />
      </SheetContent>
    </Sheet>
  );
}
