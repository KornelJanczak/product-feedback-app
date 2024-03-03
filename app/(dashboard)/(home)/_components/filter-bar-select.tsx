"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export function FilterBarSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const onSelectHandler = (selectValue: string) => {
    router.push(`?sortBy=${selectValue}`);
  };

  const defaultValue = searchParams.get("sortBy");

  return (
    <Select
      onValueChange={onSelectHandler}
      value={defaultValue ? defaultValue : "/"}
    >
      <SelectTrigger
        className="w-[180px] 
      bg-dark border-dark text-darkWhite
        px-2
        focus:ring-0 focus:ring-ring focus:ring-offset-0
        gap-0
        "
      >
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="bg-darkWhite focus-visible:ring-0 border-0 focus:ring-0">
        <SelectGroup className="bg-darkWhite text-grey focus-visible:ring-0 ">
          <SelectItem value="/" className="hover:text-pink hidden">
            Sort by
          </SelectItem>
          <SelectItem value="most-suggestions" className="hover:text-pink">
            Most Suggestions
          </SelectItem>
          <SelectItem value="least-suggestions" className="hover:text-pink">
            Least Suggestions
          </SelectItem>
          <SelectItem value="most-members" className="hover:text-pink">
            Most members
          </SelectItem>
          <SelectItem value="least-members" className="hover:text-pink">
            Least members
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
