import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="container text-lg font-bold">
        <h2>Feedback Product</h2>
      </header>
      {children}
    </>
  );
}
