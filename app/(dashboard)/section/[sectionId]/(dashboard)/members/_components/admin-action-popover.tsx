"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings2 } from "lucide-react";

export default function AdminActionPopover() {
  return (
    <Popover>
      <PopoverTrigger className="text-grey text-3xl font-semibold mb-auto hover:cursor-pointer">
        <Settings2 width={20} height={20} color="#647196" />
      </PopoverTrigger>
      <PopoverContent align="end">
        
      </PopoverContent>
    </Popover>
  );
}
