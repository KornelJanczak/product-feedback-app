import { ReactNode } from "react";
import FindBar from "../(users)/friends/[friendsFilter]/_components/find-bar";
import MainLayout from "@/components/main-layout";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MainLayout>
      <FindBar />
      {children}
    </MainLayout>
  );
}
