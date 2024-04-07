"use client"
import { Layout, UsersRound } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { LogOutIcon, Settings } from "lucide-react";
import { signOut } from "next-auth/react";

const routes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: UsersRound,
    label: "Friends",
    href: "/friends/suggestions",
  },
];

const accountRoute = {
  icon: Settings,
  label: "Account",
  href: "/account",
};

export default function SidebarRoutes() {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <div
        className="flex justify-center flex-row ml-auto md:flex-col gap-x-2
      md:justify-end md:pt-1 lg:justify-start lg:flex-row lg:items-center lg:ml-0 lg:pt-0"
      >
        {routes.map(({ href, icon, label }) => (
          <SidebarItem key={href} href={href} icon={icon} label={label} />
        ))}
      </div>
      <div className="flex flex-row justify-center gap-x-2 md:hidden">
        <SidebarItem
          key={accountRoute.href}
          href={accountRoute.href}
          icon={accountRoute.icon}
          label={accountRoute.label}
        />
        <button
          className="flex justify-center items-center gap-x-2 font-[500]"
          onClick={handleSignOut}
        >
          Logout
          <LogOutIcon width={20} height={20} />
        </button>
      </div>
    </>
  );
}
