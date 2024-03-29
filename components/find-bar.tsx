"use client";
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
  inputPlaceHolder,
}: {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  inputPlaceHolder?: string;
  children?: ReactNode;
  params?: string;
}) {
  const router = useRouter();
  const param = useParams();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={cn(
        "flex w-full items-center gap-2 py-3 px-3 bg-dark md:rounded-lg md:container",
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
        placeholder={inputPlaceHolder ? inputPlaceHolder : "Username"}
        ref={inputRef}
        className={cn(
          "w-4/12 border-transparent focus:border-transparent focus:ring-0",
          inputClassName
        )}
      ></Input>
      <Button
        type="submit"
        className={cn(
          "flex gap-1 w-4/12 bg-pink hover:opacity-60 hover:bg-pink hover:transition duration-300 mt-0  lg:mt-0",
          buttonClassName
        )}
      >
        Search
        <SearchIcon />
      </Button>
    </form>
  );
}
