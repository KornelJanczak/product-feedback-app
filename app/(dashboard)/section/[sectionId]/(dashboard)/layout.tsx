import { ReactNode } from "react";
import SectionLayout from "./_components/section-layout";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { sectionId: string };
}) {
  return <SectionLayout params={params}>{children}</SectionLayout>;
}
