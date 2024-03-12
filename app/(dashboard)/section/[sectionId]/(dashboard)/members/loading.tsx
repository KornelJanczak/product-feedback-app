import { Skeleton } from "@/components/ui/skeleton";
import { ImageBackgroundSkeleton } from "@/components/image-uploading/image-background-skeleton";
import { MainInformationSkeleton } from "../_components/main-information";
import { ActionPanelSkeleton } from "../_components/action-panel";
import { SectionRoutesSkeleton } from "../_components/section-routes";

export default function Loading() {
  return (
    <section className="md:container">
      <div className="px-5 py-2">
        <div className="pb-5">
          <Skeleton className="w-full h-10 bg-skeletonTheme" />
        </div>
        <div className="pt-2">
          <Skeleton className="w-full h-24 bg-skeletonTheme" />
        </div>
        <ul className="pb-4 pt-6">
          <Skeleton className="w-20 pb-1 h-8 bg-skeletonTheme" />
          <div className="pt-2 flex flex-col gap-2">
            <Skeleton className="w-full h-24 bg-skeletonTheme" />
            <Skeleton className="w-full h-24 bg-skeletonTheme" />
            <Skeleton className="w-full h-24 bg-skeletonTheme" />
          </div>
        </ul>
        <ul className="pb-4 pt-6">
          <Skeleton className="w-20 pb-1 h-8 bg-skeletonTheme" />
          <div className="pt-2 flex flex-col gap-2">
            <Skeleton className="w-full h-24 bg-skeletonTheme" />
            <Skeleton className="w-full h-24 bg-skeletonTheme" />
            <Skeleton className="w-full h-24 bg-skeletonTheme" />
          </div>
        </ul>
      </div>
    </section>
  );
}
