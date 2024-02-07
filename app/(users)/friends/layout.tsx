import { ReactNode } from "react";
import MainLayout from "@/components/main-layout";
import FindBar from "./[friendsFilter]/_components/find-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MainLayout>
      <FindBar />
      {children}
    </MainLayout>
  );
}