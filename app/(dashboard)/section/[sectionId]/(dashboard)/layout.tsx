import { ReactNode } from "react";
import SectionLayout from "./_components/section-layout/section-layout";
import Nav from "@/components/nav/navbar";

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
      <main className="bg-darkWhite lg:col-start-2 lg:col-end-5 lg:w-full">
        <section className={"px-0 md:container lg:w-full lg:px-0 "}>
          <SectionLayout params={params} />
          {children}
        </section>
      </main>
    </div>
  );
}
