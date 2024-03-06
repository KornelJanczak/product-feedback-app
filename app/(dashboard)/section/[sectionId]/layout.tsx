import { ReactNode } from "react";
import NavBar from "./_components/navbar";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="lg:flex lg:gap-x-4 lg:container lg:py-14">
      <NavBar />
      <main className="bg-darkWhite lg:col-start-2 lg:col-end-5 lg:w-full">
        <section
          className={cn("px-0 md:container lg:w-full lg:px-0 ", className)}
        >
          {children}
        </section>
      </main>
    </div>
  );
}
