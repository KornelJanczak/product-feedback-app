import { Button } from "@/components/ui/button";

import { signOut } from "next-auth/react";
import GroupOfPeopleIcon from "@/public/icons/group-of-people";
import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Layout, UsersRound, Settings, LogOut } from "lucide-react";
import SidebarItem from "./sidebar-item";
import UserAvatar from "./user-avatar";

const routes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: UsersRound,
    label: "Friends",
    href: "/friends/sugesstions",
  },
  // {
  //   icon: Settings,
  //   label: "Manage account",
  //   href: "/account",
  // },
  // {
  //   icon: LogOut,
  //   label: "Log out",
  //   href: "/logout",
  // },
];

export default function SidebarRoutes({
  className,
  classNameBox,
  friendBtnClass,
}: {
  className?: string;
  classNameBox?: string;
  friendBtnClass?: string;
}) {
  return (
    // <div className={cn(`flex flex-row flex-wrap gap-2 pt-2`, className)}>
    <div
      className={cn(
        "flex flex-row flex-wrap gap-x-2 md:justify-end",
        classNameBox
      )}
    >
      {routes.map(({ href, icon, label }) => (
        <SidebarItem key={href} href={href} icon={icon} label={label} />
      ))}
    </div>
    // </div>
  );
}
