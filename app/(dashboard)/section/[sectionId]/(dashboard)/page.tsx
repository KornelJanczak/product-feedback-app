import SectionLayout from "./_components/section-layout";
import { ReactNode } from "react";
export default async function SectionDashboard({
  children,
  params,
}: {
  children: ReactNode;
  params: { sectionId: string };
}) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return <SectionLayout params={params}>{children}</SectionLayout>;
}
