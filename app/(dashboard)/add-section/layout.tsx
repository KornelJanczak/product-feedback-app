import { ReactNode } from "react";

export default function Layout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className="lg:col-start-2 lg:col-end-5 lg:w-full">
      <section
        className={
          "flex flex-col container pt-4 md:container  lg:w-full lg:px-0 " +
          className
        }
      >
        {children}
      </section>
    </main>
  );
}
