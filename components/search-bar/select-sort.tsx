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

interface ISortSelect {
  value: string;
  label: string;
}

export function SelectSort({ sortValues }: { sortValues: ISortSelect[] }) {
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
        className="
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
          {sortValues.map(({ value, label }) => (
            <SelectItem key={value} value={value} className="hover:text-pink">
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
