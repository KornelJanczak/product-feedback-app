"use client";
import SubmitBtn from "@/app/(auth)/_components/submit-btn";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { ReactNode, useRef } from "react";
import { Button } from "./ui/button";
import SearchIcon from "@/public/icons/search";

export default function FindBar({
  children,
  params,
  className,
}: {
  className?: string;
  children?: ReactNode;
  params?: string;
}) {
  const router = useRouter();
  const param = useParams();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={cn(
        "flex w-full items-center gap-2 py-6 px-6 bg-dark md:rounded-lg md:container",
        className
      )}
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`${params}?=${inputRef.current?.value}`);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }}
    >
      {children}
      <Input
        type="text"
        placeholder="Username"
        ref={inputRef}
        className="border-transparent focus:border-transparent focus:ring-0"
      ></Input>
      <Button
        type="submit"
        className="flex gap-1 bg-pink hover:opacity-60 hover:bg-pink hover:transition 
      duration-300 mt-0 w-4/12 lg:mt-0"
      >
        Search
        <SearchIcon />
      </Button>
    </form>
  );
}
