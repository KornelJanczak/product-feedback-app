import { ReactNode } from "react";
import Nav from "../../components/nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
