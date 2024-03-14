import { ReactNode } from "react";
import SectionLayout from "./_components/section-layout";
import MainLayout from "@/components/main-layout";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { sectionId: string };
}) {
  return (
    <MainLayout>
      <SectionLayout params={params} />
      {children}
    </MainLayout>
  );
}
