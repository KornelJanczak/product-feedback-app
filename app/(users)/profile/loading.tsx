import { ImageBackgroundSkeleton } from "@/components/image-uploading/image-background-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="relative">
      <ImageBackgroundSkeleton />
      <div className="absolute top-28 w-full flex flex-col items-center justify-center sm:top-40 lg:top-48">
        <div className="relative">
          <Skeleton className="w-40 h-40 rounded-full bg-skeletonTheme " />
        </div>
        <div className="flex justify-center items-center px-5">
          <div className="pt-2">
            <Skeleton className="w-60 h-8 bg-skeletonTheme" />
          </div>
        </div>
        <div className="pt-2">
          <Skeleton className="w-44 h-10 bg-skeletonTheme" />
        </div>
        <span className="pt-2">
          <Skeleton className="w-32 h-5 bg-skeletonTheme " />
        </span>
        <span className="pt-2">
          <Skeleton className="w-64 h-5 bg-skeletonTheme " />
        </span>
        <div className="flex items-center justify-center gap-1  pt-3.5">
          <Skeleton className="w-9 h-9 bg-skeletonTheme rounded-full " />
          <Skeleton className="w-9 h-9 bg-skeletonTheme rounded-full" />
        </div>
        <div className="px-6 py-7 w-full">
          <Skeleton className="w-full h-7 bg-skeletonTheme" />
        </div>
      </div>
    </div>
  );
}
