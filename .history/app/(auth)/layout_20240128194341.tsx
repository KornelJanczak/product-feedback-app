import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="container">
        <h1></h1>
      </header>
      {children}
    </>
  );
}
