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
  inputClassName,
  buttonClassName,
}: {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  children?: ReactNode;
  params?: string;
}) {
  const router = useRouter();
  const param = useParams();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={cn(
        "flex w-full items-center gap-2 py-4 px-5 bg-dark md:rounded-lg md:container",
        className
      )}
      onSubmit={(e) => {
        e.preventDefault();
        router.push(
          `${param.friendsFilter ? param.friendsFilter : params}?=${
            inputRef.current?.value
          }`
        );
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
        className={cn(
          "w-2/5 border-transparent focus:border-transparent focus:ring-0",
          inputClassName
        )}
      ></Input>
      <Button
        type="submit"
        className={cn(
          "flex gap-1 w-1/5 bg-pink hover:opacity-60 hover:bg-pink hover:transition duration-300 mt-0  lg:mt-0",
          buttonClassName
        )}
      >
        Search
        <SearchIcon />
      </Button>
    </form>
  );
}
