import SectionLayout from "./_components/section-layout";
import { ReactNode } from "react";
export default async function SectionDashboard({
  params,
}: {
  params: { sectionId: string };
}) {
  console.log(params);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div></div>;
}
