import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col p-4 gap-4 xl:grid xl:grid-cols-2">
      {[...Array(6)].map((_, index) => (
        <Skeleton key={index} className="bg-skeletonTheme h-28 w-full" />
      ))}
    </div>
  );
}
