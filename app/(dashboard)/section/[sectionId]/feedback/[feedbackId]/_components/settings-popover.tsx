import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SettingsPopover() {
  return (
    <Popover>
      <PopoverTrigger className="bg-none text-blue text-sm sm:text-base font-semibold cursor-pointer ml-auto mb-auto">
        Reply
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
}
