import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Settings2 } from "lucide-react";

const filterValues = [
  { value: "all", label: "All" },
  { value: "ui", label: "UI" },
  { value: "ux", label: "UX" },
  { value: "enhancement", label: "Enhancement" },
  { value: "bug", label: "Bug" },
  { value: "feature", label: "Feature" },
];

export default function FilterPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Settings2 width={20} height={20} color="#fff" />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-full">
        <RadioGroup defaultValue="All">
          {filterValues.map(({ value, label }) => (
            <div key={value} className="flex items-center space-x-2">
              <RadioGroupItem value={value} id={value} />
              <Label htmlFor={value} className="font-semibold">
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </PopoverContent>
    </Popover>
  );
}
