import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="container pt-6 ">
        <h2 className="text-2xl font-bold  text-secondDark border-b-2 border-grey">
          Feedback Product
        </h2>
      </header>
      {children}
    </>
  );
}
