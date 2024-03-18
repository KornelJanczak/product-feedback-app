"use client";
import ActionAlertDialog from "@/components/action-alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings, Trash2 } from "lucide-react";

export default function SettingsPopover() {
  const onClickHandler = () => {};

  return (
    <Popover>
      <PopoverTrigger>
        <Settings width={20} height={20} color="#3A4374" />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="flex flex-col items-center w-auto gap-2"
      >
        <ActionAlertDialog
          onContinueHandler={onClickHandler}
          triggerChildren={
            <div className="flex justify-center items-center gap-1 text-sm text-grey">
              <Trash2 width={18} height={18} color="#647196" />
              Delete
            </div>
          }
          description={"The following action will delete this feedback."}
        />
      </PopoverContent>
    </Popover>
  );
}
