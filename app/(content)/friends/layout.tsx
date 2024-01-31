import { ReactNode } from "react";
import FindBar from "./_components/find-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <FindBar />
      {children}
    </>
  );
}
