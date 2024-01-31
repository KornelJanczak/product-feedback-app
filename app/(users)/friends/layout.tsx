import { ReactNode } from "react";
import FindBar from "./_components/find-bar";
import Nav from "@/app/_components/nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <FindBar />
      {children}
    </>
  );
}
