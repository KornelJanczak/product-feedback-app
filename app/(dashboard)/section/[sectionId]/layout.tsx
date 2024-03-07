import { ReactNode } from "react";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="lg:flex lg:gap-x-4 lg:container lg:py-14">{children}</div>
  );
}
