import { ReactNode } from "react";
import Nav from "@/components/nav";
import { cn } from "@/lib/utils";

export default function MainLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="lg:flex lg:gap-x-4 lg:container lg:py-14">
      <Nav />
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
