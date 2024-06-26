import UlCard from "@/app/(users)/friends/[friendsFilter]/_components/wrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard({ length }: { length: number }) {
  return (
    <UlCard>
      {[...new Array(length)].map((_, i) => (
        <li
          key={i}
          className="flex flex-row items-center justify-between w-full p-4 
            gap-x-4 sm:flex-col sm:gap-x-2 sm:p-4"
        >
          <div>
            <Skeleton className="w-28 h-28 rounded-full bg-[#0000001c]" />
          </div>
          <div className="flex flex-col w-full justify-center sm:items-center  sm:pt-1">
            <Skeleton className="w-full h-32 max-h-36 bg-[#0000001c]" />
          </div>
        </li>
      ))}
    </UlCard>
  );
}
