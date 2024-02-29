"use client";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/public/icons/plus";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { FilterBarSelect } from "./filter-bar-select";
import SearchIcon from "@/public/icons/search";

export default function FilterBar({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <form
      className={cn(
        "flex w-full items-center gap-2 py-3 px-3 bg-dark md:rounded-lg md:container",
        className
      )}
    >
      <Button
        className=""
        type="button"
        onClick={() => {
          router.push("/add-section");
        }}
      >
        <PlusIcon />
        Add Section
      </Button>
      <FilterBarSelect />
      <Button
        type="submit"
        className={
          "flex gap-1 w-4/12 bg-pink hover:opacity-60 hover:bg-pink hover:transition duration-300 mt-0  lg:mt-0"
        }
      >
        Search
        <SearchIcon />
      </Button>
    </form>
  );
}
