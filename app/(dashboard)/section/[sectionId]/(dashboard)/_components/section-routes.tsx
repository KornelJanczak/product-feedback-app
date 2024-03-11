"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SectionRoutes({ sectionId }: { sectionId: string }) {
  const path = usePathname();

  const isMembers = path.endsWith("members");

  return (
    <div className="flex flex-col px-5 pt-2">
      <Separator />
      <div className="flex gap-3 py-3">
        <Link
          href={`/section/${sectionId}`}
          className={cn(
            "text-grey font-semibold text-lg transition-all duration-300 hover:text-slate-600 ",
            !isMembers && "text-pink hover:text-pink"
          )}
        >
          Suggestions
        </Link>
        <Link
          href={`/section/${sectionId}/members`}
          className={cn(
            "text-grey font-semibold text-lg transition-all duration-300 hover:text-slate-600",
            isMembers && "text-pink hover:text-pink"
          )}
        >
          Members
        </Link>
      </div>
    </div>
  );
}
