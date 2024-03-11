"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RouteItem({
  sectionId,
  title,
  href,
}: {
  sectionId: string;
  title: string;
  href: string;
}) {
  const pathname = usePathname();

  console.log(pathname.endsWith("/"));

  const isMember = pathname.endsWith(`section/${sectionId}/${href}`);
  const isSuggestions = pathname.endsWith(
    sectionId.split(" ")[sectionId.length - 1]
  );

  return (
    <Link
      href={`/section/${sectionId}/${href}`}
      className={cn(
        "text-grey font-semibold text-lg transition-all duration-300 hover:text-slate-600",
        isMember && href == "member" && "text-pink hover:text-pink",
        isSuggestions && href == "" && "text-pink hover:text-pink"
      )}
    >
      {title}
    </Link>
  );
}
