"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import IconHamburger from "@/public/icons/icon-hamburger";
import SidebarRoutes from "./sidebar-routes";
import { useSession } from "next-auth/react";
import { Settings, LogOut } from "lucide-react";
import SidebarItem from "./sidebar-item";
import UserInfoCard from "./user-info-card";

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
        <UserInfoCard
          userName={session?.user?.name}
          userEmail={session?.user?.email}
          userImage={session?.user?.image}
        />
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
