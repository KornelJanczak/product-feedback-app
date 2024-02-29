"use client";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/public/icons/plus";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { FilterBarSelect } from "./filter-bar-select";
import SearchIcon from "@/public/icons/search";
import { Input } from "@/components/ui/input";

export default function FilterBar({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <form
      className={cn(
        "flex w-full items-center gap-2 py-3 px-5 bg-dark md:rounded-lg ",
        className
      )}
    >
      <Button
        type="submit"
        className={
          "flex gap-1 bg-blue hover:opacity-60 hover:bg-blue hover:transition duration-300 mt-0 lg:mt-0"
        }
      >
        <span className="hidden sm:block">Search</span>
        <SearchIcon />
      </Button>
      <Input
        className="hidden sm:block sm:w-8/12 lg:w-6/12 xl:w-4/12 bg-transparent border-0 border-b-2 focus-visible:ring-offset-0 focus-visible:ring-0
         border-darkWhite bg-darkWhite w-auto text-dark placeholder:text-dark"
        placeholder="Search section"
      />
      <FilterBarSelect />
      <Button
        className="bg-pink hover:opacity-60 hover:bg-pink hover:transition duration-300 ml-auto"
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
