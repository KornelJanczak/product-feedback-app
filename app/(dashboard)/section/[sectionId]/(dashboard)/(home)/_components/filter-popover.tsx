import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Settings2 } from "lucide-react";

export default function FilterPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Settings2 width={20} height={20} color="#fff" />
      </PopoverTrigger>
      <PopoverContent>
        <RadioGroup defaultValue="All">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all">
              All
            </RadioGroupItem>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ui" id="ui">
              UI
            </RadioGroupItem>
          </div>
        </RadioGroup>
      </PopoverContent>
    </Popover>
  );
}
