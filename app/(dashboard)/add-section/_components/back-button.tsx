"use client";

import ArrowLeft from "@/public/icons/arrow-left";
import Link from "next/link";

export default function BackButton() {
  return (
    <div className="mr-auto">
      <Link
        href="/"
        className="flex flex-row text-grey font-semibold 
        justify-center items-center gap-1.5 hover:underline-offset-1"
      >
        <ArrowLeft />
        Go back
      </Link>
    </div>
  );
}
