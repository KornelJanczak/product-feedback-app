import { ReactNode } from "react";
import SectionLayout from "./_components/section-layout";
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
      <Nav /> <SectionLayout params={params}>{children}</SectionLayout>;
    </div>
  );
}
