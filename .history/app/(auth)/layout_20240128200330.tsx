import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="container  pt-6">
        <h2>Feedback Product</h2>
      </header>
      {children}
    </>
  );
}
