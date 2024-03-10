import { Skeleton } from "../ui/skeleton";
export function ImageBackgroundSkeleton() {
  return (
    <Skeleton
      className="w-full h-56 rounded-none bg-[#0000002c]
      sm:h-72 lg:h-80 md:rounded-lg"
    />
  );
}
