import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="container text-2xl font-bold text-secondDark ">
        <h2>Feedback Product</h2>
      </header>
      {children}
    </>
  );
}
