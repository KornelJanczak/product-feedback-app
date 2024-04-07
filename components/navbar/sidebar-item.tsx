"use client";
import { LucideIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface ISidebarItem {
  icon: LucideIcon;
  label: string;
  href: string;
  size?: number;
  className?: string;
  labelClassName?: string;
}
export default function SidebarItem({
  icon: Icon,
  label,
  href,
  className,
  size,
  labelClassName,
}: ISidebarItem) {
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
        "flex items-center gap-x-2 text-grey text-base font-[500] md:pl-6 transition-all hover:text-slate-600  md:ml-auto lg:pl-0",
        isActive && "text-pink hover:text-pink",
        className
      )}
    >
      <div className="flex items-center gap-x-1.5 py-2">
        <span className={labelClassName}>{label}</span>
        <Icon
          size={size ? size : 22}
          className={cn("text-grey", isActive && "text-pink")}
        />
      </div>
      <div
        className={cn(
          " opacity-0 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
}
