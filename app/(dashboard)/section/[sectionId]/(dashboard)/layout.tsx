import { ReactNode } from "react";
import SectionLayout from "./_components/section-layout/section-layout";
import Navbar from "./_components/navbar/navbar";
import getCurrentUser from "@/lib/user/get-current-user";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { sectionId: string };
}) {
  const currentUser = await getCurrentUser();

  return (
    <div className="lg:flex lg:gap-x-4 lg:container lg:py-14">
      <Navbar params={params.sectionId} currentUser={currentUser} />
      <main className="bg-darkWhite lg:col-start-2 lg:col-end-5 lg:w-full">
        <section className={"px-0 md:container lg:w-full lg:px-0 "}>
          <SectionLayout params={params} currentUser={currentUser} />
          {children}
        </section>
      </main>
    </div>
  );
}
