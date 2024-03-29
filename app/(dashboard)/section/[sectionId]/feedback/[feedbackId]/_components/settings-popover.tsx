import ActionAlertDialog from "@/components/action-alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";

export default function SettingsPopover() {
  return (
    <Popover>
      <PopoverTrigger className="bg-none text-blue text-sm sm:text-base font-semibold cursor-pointer ml-auto mb-auto">
        <Settings color="#3A4374" width={20} height={20} />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-full">
        {/* <ActionAlertDialog description="This action " /> */}
      </PopoverContent>
    </Popover>
  );
}
