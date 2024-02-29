import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@radix-ui/react-select";

export function FilterBarSelect() {
  return (
    <Select>
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
        <SelectGroup className="bg-darkWhite text-grey focus-visible:ring-0  ">
          <SelectItem value="Most Suggestions" className="hover:text-pink">
            Most Suggestions
          </SelectItem>
          <SelectItem value="Least Suggestions" className="hover:text-pink">
            Least Suggestions
          </SelectItem>
          <SelectItem value="Most members" className="hover:text-pink">
            Most members
          </SelectItem>
          <SelectItem value="Least members" className="hover:text-pink">
            Least members
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
