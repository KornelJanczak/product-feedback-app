import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import SettingsIcon from "@/public/icons/settings";

export default function CardSettings({}) {
  return (
    <Popover>
      <PopoverTrigger className="bg-dark px-2 pt-1 pb-1 h-auto rounded-lg">
        <SettingsIcon stroke="#ffffff" />
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <ul className="flex flex-col gap-2 text-dark font-semi">
          <li>Show members</li>
          <li>Show admins</li>
          <li className="text-red">Delete Section</li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
