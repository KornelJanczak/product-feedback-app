import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <span>CHUJ</span>
      {children}
    </>
  );
}
