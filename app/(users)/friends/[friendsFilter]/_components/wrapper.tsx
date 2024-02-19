import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <ul
      className="flex flex-col items-center justify-center gap-2 p-4 w-full 
    sm:grid sm:grid-cols-2 sm:p-0 sm:gap-x-8 md:grid-cols-3 md:gap-x-4"
    >
      {children}
    </ul>
  );
}
