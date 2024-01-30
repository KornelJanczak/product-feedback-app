import { ReactNode } from "react";
import Nav from "../_components/nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Nav /> */}
      {children}
    </>
  );
}
