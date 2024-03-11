import { classNames } from "uploadthing/client";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
export function ImageBackgroundSkeleton({ className }: { className?: string }) {
  return (
    <Skeleton
      className={cn(
        "w-full h-56 rounded-none bg-[#0000002c] sm:h-72 lg:h-80 md:rounded-lg",
        className
      )}
    />
  );
}
