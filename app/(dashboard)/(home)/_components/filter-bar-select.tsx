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

export function FilterBarSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-dark border-dark text-middleWhite focus-visible:ring-0">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="bg-dark focus-visible:ring-0">
        <SelectGroup className="bg-dark focus-visible:ring-0">
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
