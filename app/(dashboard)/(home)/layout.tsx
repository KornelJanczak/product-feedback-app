import { ReactNode } from "react";
import MainLayout from "@/components/main-layout";

export default async function Layout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
