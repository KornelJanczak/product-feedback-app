import { ReactNode } from "react";
import MainLayout from "@/components/main-layout";
import FilterBar from "./_components/filter-bar";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <MainLayout>
      <FilterBar />
      {children}
    </MainLayout>
  );
}
