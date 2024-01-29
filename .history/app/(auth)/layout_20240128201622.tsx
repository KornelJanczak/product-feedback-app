import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="container pt-6 border-b-1 border-grey">
        <h2 className="text-2xl font-bold text-secondDark">Feedback Product</h2>
      </header>
      {children}
    </>
  );
}
