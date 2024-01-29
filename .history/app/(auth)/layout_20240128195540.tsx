import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="md:container md: text-2xl font-bold text-secondDark pt-6">
        <h2>Feedback Product</h2>
      </header>
      {children}
    </>
  );
}
