import { ReactNode, Suspense } from "react";
import SectionLayout from "./_components/section-layout";
import Nav from "@/components/nav/navbar";
import { ImageBackgroundSkeleton } from "@/components/image-uploading/image-background-skeleton";
import { MainInformationSkeleton } from "./_components/main-information";
import { ActionPanelSkeleton } from "./_components/action-panel";
import { SectionRoutesSkeleton } from "./_components/section-routes";
export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { sectionId: string };
}) {
  return (
    <div className="lg:flex lg:gap-x-4 lg:container lg:py-14">
      <Nav />
      {/* <Suspense
        fallback={
          <main className="bg-darkWhite lg:col-start-2 lg:col-end-5 lg:w-full">
            <section className="px-0 md:container lg:w-full lg:px-0 ">
              <ImageBackgroundSkeleton className="h-44" />
              <MainInformationSkeleton membersNumber={8} />
              <ActionPanelSkeleton />
              <SectionRoutesSkeleton />
            </section>
          </main>
        }
      > */}
        <SectionLayout params={params}>{children}</SectionLayout>;
      {/* </Suspense> */}
    </div>
  );
}
