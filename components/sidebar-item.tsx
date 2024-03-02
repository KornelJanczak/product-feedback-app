"use client";
import { LucideIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface ISidebarItem {
  icon: LucideIcon;
  label: string;
  href: string;
}
export default function SidebarItem({ icon: Icon, label, href }: ISidebarItem) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClickHandler = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClickHandler}
      type="button"
      className={cn(
        "ml-auto flex items-center gap-x-2 text-grey text-base font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-darkWhite",
        isActive && "text-pink bg-darkWhite hover:text-pink"
      )}
    >
      <div className="ml-auto flex items-center gap-x-2 py-2">
        {label}
        <Icon size={22} className={cn("text-grey", isActive && "text-pink")} />
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
}
