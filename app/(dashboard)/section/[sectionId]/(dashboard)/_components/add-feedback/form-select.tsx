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
import { ControllerRenderProps } from "react-hook-form";

export function FormSelect({
  onChange,
  selectValues,
}: {
  onChange: (value: string) => void;
  selectValues: string[];
}) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Feature" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-grey ring-[pink]">
          {/* <SelectLabel className="text-grey">All</SelectLabel> */}
          {selectValues.map((value) => (
            <SelectItem key={value} value={value}>
              {value.toLowerCase()}
            </SelectItem>
          ))}
          {/* <SelectItem value="all">All</SelectItem>
          <SelectItem value="ui">UI</SelectItem>
          <SelectItem value="ux">UX</SelectItem>
          <SelectItem value="enhancement">Enhancement</SelectItem>
          <SelectItem value="bug">Bug</SelectItem>
          <SelectItem value="feature">Feature</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
