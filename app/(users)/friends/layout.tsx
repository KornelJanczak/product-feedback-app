import { ReactNode } from "react";
import FindBar from "./_components/find-bar";
import Nav from "@/components/nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <FindBar />
      {children}
    </>
  );
}
