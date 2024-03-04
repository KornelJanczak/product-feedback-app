"use client";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/public/icons/plus";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { FilterBarSelect } from "./filter-bar-select";
import SearchIcon from "@/public/icons/search";
import { Input } from "@/components/ui/input";
import FilterBarDrawer from "./filter-bar-drawer";
import { FormEvent, useRef } from "react";

export default function FilterBar({ className }: { className?: string }) {
  const router = useRouter();
  const mobileInput = useRef<HTMLInputElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const mobileInputValue = mobileInput.current?.value;
    const inputValue = input.current?.value;
    let routerValue;

    if (mobileInputValue?.trim() !== undefined) {
      routerValue = mobileInputValue;
    } else {
      routerValue = inputValue;
    }

    router.push(`?sectionTitle=${routerValue}`);
  };

  return (
    <form
      className={cn(
        "flex w-full items-center gap-2 py-3 px-3 sm:px-4 md:px-5 bg-dark md:rounded-lg ",
        className
      )}
      onSubmit={onSubmitHandler}
      id="mainForm"
    >
      <Button
        type="submit"
        className={
          "hidden sm:flex gap-1 bg-blue hover:opacity-60 hover:bg-blue transition duration-300 mt-0 lg:mt-0"
        }
      >
        Search
        <SearchIcon />
      </Button>
      <FilterBarDrawer mobileInputRef={mobileInput} className="sm:hidden" />

      <Input
        className="hidden sm:block sm:w-7/12 lg:w-6/12 xl:w-4/12 bg-transparent border-0 focus-visible:ring-offset-0 focus-visible:ring-0
         border-darkWhite bg-darkWhite w-auto text-dark placeholder:text-dark"
        placeholder="Search section"
        ref={input}
      />
      <FilterBarSelect />
      <Button
        className="bg-pink hover:bg-pink hover:opacity-70 transition duration-300 ml-auto"
        type="button"
        onClick={() => {
          router.push("/add-section");
        }}
      >
        <PlusIcon />
        Add Section
      </Button>
    </form>
  );
}
