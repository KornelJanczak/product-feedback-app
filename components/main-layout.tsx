import { ReactNode } from "react";
import Nav from "@/components/nav";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="lg:grid lg:grid-cols-4 lg:container gap-8 lg:py-20">
      <Nav />
      <main className="lg:col-start-2 lg:col-end-5">
        <section className="px-0 md:container lg:px-0">{children}</section>
      </main>
    </div>
  );
}
