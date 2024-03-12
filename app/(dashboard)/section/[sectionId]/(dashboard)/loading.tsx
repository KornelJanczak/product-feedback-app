import { ImageBackgroundSkeleton } from "@/components/image-uploading/image-background-skeleton";
import { MainInformationSkeleton } from "./_components/main-information";
import { ActionPanelSkeleton } from "./_components/action-panel";
import { SectionRoutesSkeleton } from "./_components/section-routes";

export default function Loading() {
  return (
    <main className="bg-darkWhite lg:col-start-2 lg:col-end-5 lg:w-full">
      <section className="px-0 md:container lg:w-full lg:px-0 ">
        <ImageBackgroundSkeleton className="h-44" />
        <MainInformationSkeleton membersNumber={8} />
        <ActionPanelSkeleton />
        <SectionRoutesSkeleton />
      </section>
    </main>
  );
}
