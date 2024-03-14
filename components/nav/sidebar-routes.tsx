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
    href: "/friends/suggestions",
  },
];

export default function SidebarRoutes() {
  return (
    <div
      className="flex justify-center flex-row ml-auto md:flex-col gap-x-2
      md:justify-end md:pt-1 lg:justify-start lg:flex-row lg:items-center lg:ml-0 lg:pt-0"
    >
      {routes.map(({ href, icon, label }) => (
        <SidebarItem key={href} href={href} icon={icon} label={label} />
      ))}
    </div>
  );
}
