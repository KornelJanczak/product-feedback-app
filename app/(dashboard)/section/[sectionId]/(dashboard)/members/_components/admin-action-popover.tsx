"use client";
import ActionAlertDialog from "@/components/action-alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings2, UserX2 } from "lucide-react";

export default function AdminActionPopover({ userName }: { userName: string }) {
  const onClickHandler = () => {};

  return (
    <Popover>
      <PopoverTrigger className="text-grey text-3xl font-semibold mb-auto hover:cursor-pointer">
        <Settings2 width={20} height={20} color="#647196" />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto">
        <ActionAlertDialog
          onContinueHandler={onClickHandler}
          triggerClassName="flex text-grey text-sm font-semi 
          gap-1 items-center justify-center
          hover:cursor-pointer hover:opacity-70 hover:transition-all 
          hover:duration-300"
          triggerChildren={
            <>
              <UserX2 width={16} height={16} color="#647196" />
              Kick user
            </>
          }
          description={
            <span>
              This action will kick
              <strong className="text-pink"> @{userName} </strong>
              from this section!
            </span>
          }
        />
      </PopoverContent>
    </Popover>
  );
}
