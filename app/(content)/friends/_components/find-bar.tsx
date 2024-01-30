"use client";
import SubmitBtn from "@/app/(auth)/_components/submit-btn";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function FindBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <section className="py-6 bg-dark">
      <form
        className="container flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`friends?=${inputRef.current?.value}`);
        }}
      >
        <Input
          type="text"
          placeholder="Username"
          ref={inputRef}
          className="border-transparent focus:border-transparent focus:ring-0"
        ></Input>
        <SubmitBtn className="mt-0 w-48">Find</SubmitBtn>
      </form>
    </section>
  );
}
