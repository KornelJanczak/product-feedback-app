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

export function FormSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Feature" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>All</SelectLabel>
          <SelectItem value="UI">UI</SelectItem>
          <SelectItem value="UX">UX</SelectItem>
          <SelectItem value="Enhancement">Enhancement</SelectItem>
          <SelectItem value="Bug">Bug</SelectItem>
          <SelectItem value="Feature">Feature</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
