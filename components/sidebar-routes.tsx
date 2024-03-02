import { Button } from "@/components/ui/button";

import { signOut } from "next-auth/react";
import GroupOfPeopleIcon from "@/public/icons/group-of-people";
import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Layout, UsersRound } from "lucide-react";
import SidebarItem from "./sidebar-item";

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
    <div
      className={cn(
        `flex flex-col items-center justify-center gap-2`,
        className
      )}
    >
      <div
        className={cn(
          " w-40 flex flex-col items-center justify-center gap-x-2",
          classNameBox
        )}
      >
        {routes.map(({ href, icon, label }) => (
          <SidebarItem key={href} href={href} icon={icon} label={label} />
        ))}
      </div>
    </div>
  );
}
