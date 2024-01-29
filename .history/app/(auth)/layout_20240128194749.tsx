import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="container text-3xl font-bold text-secondDark pt-4">
        <h2>Feedback Product</h2>
      </header>
      {children}
    </>
  );
}
