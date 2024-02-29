import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ActionAlertDialog from "./action-alert-dialog";
import SettingsIcon from "@/public/icons/settings";
import TrashIcon from "@/public/icons/trash";

export default function CardSettings({
  currentUserIsAdmin,
}: {
  currentUserIsAdmin: boolean;
}) {
  return (
    <Popover>
      <PopoverTrigger className="bg-dark px-1 pt-1 pb-1 h-auto rounded-lg">
        <SettingsIcon stroke="#ffffff" />
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <ul className="flex flex-col gap-1.5 text-dark font-semi text-sm sm:text-base">
          <li>Show members</li>
          <li>Show admins</li>
          <ActionAlertDialog dialogType="leave" />
          {currentUserIsAdmin && (
            <li className="text-red flex gap-0.5 ">
              Delete
              <TrashIcon width={19} height={19} />
            </li>
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
