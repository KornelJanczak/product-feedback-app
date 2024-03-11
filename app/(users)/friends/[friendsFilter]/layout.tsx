import { ReactNode } from "react";
import MainLayout from "@/components/main-layout";
import FindBar from "@/components/find-bar";
import SelectFilter from "./_components/select-filter";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MainLayout>
      <FindBar>
        <SelectFilter />
      </FindBar>
      {children}
    </MainLayout>
  );
}
