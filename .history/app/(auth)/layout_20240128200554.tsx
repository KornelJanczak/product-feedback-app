import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="md:container  pt-6">
        <h2 className="text-2xl font-bold text-secondDark">Feedback Product</h2>
      </header>
      {children}
    </>
  );
}
