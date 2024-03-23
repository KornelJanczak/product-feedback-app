import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FormSelect({
  onChange,
  selectValues,
  selectPlaceholder,
}: {
  onChange: (value: string) => void;
  selectValues: string[];
  selectPlaceholder: string;
}) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={selectPlaceholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-grey ">
          {selectValues.map((value) => (
            <SelectItem
              key={value}
              value={value.toLowerCase().trim().split(" ").join("")}
            >
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
