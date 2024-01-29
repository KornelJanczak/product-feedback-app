import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="container">
        <h2>Feedback-App</h2>
      </header>
      {children}
    </>
  );
}
