"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import IconHamburger from "@/public/icons/icon-hamburger";
import SidebarRoutes from "./sidebar-routes";
import { useSession } from "next-auth/react";
import UserAvatar from "../user-avatar";
import { Settings, LogOut } from "lucide-react";
import SidebarItem from "./sidebar-item";

const routes = [
  {
    icon: Settings,
    label: "Account",
    href: "/account",
  },
  {
    icon: LogOut,
    label: "Log out",
    href: "/logout",
  },
];

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
        <span className="flex justify-center text-center text-grey text-base pb-1">
          {session?.user?.email}
        </span>
        <SidebarRoutes />
        <div className="flex flex-row justify-center gap-x-2">
          {routes.map(({ href, icon, label }) => (
            <SidebarItem key={href} href={href} icon={icon} label={label} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
