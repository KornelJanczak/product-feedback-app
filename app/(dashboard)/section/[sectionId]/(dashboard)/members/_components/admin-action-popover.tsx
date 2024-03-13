"use client";
import ActionAlertDialog from "@/components/action-alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings2, ShieldCheck, UserX2 } from "lucide-react";
import { kickUserFromFeedbackSection } from "@/server-actions/product/kick-user-from-feedback-section";
import { giveAdminRoleInFeedbackSection } from "@/server-actions/product/give-admin-role-in-feedback-section";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface IAdminActionPopover {
  userName: string;
  sectionId: string;
  memberId: string;
  adminId: string;
  isAdmin?: boolean;
}

export default function AdminActionPopover({
  userName,
  sectionId,
  memberId,
  adminId,
  isAdmin,
}: IAdminActionPopover) {
  const toastID = "admin-action-popover-toast";

  const { execute: kickUserExecute } = useAction(kickUserFromFeedbackSection, {
    onSuccess: () => {
      toast.dismiss(toastID);
      toast.success(`${userName} has been kicked!`);
    },
    onError: () => {
      toast.dismiss(toastID);
      toast.error(`Failed to kick ${userName}!`);
    },
    onExecute: () => {
      toast.loading("Kicking user...", { id: toastID });
    },
  });

  const { execute: giveAdminExecute } = useAction(
    giveAdminRoleInFeedbackSection,
    {
      onSuccess: () => {
        toast.dismiss(toastID);
        toast.success(`${userName} has been given admin role!`);
      },
      onError: () => {
        toast.dismiss(toastID);
        toast.error(`Failed to give admin role for ${userName} !`);
      },
      onExecute: () => {
        toast.loading("Giving admin role...", { id: toastID });
      },
    }
  );

  const onKickHandler = () => {
    kickUserExecute({
      sectionId,
      adminId,
      kickedUserId: memberId,
    });
  };

  const onGiveAdminHandler = () => {
    giveAdminExecute({
      sectionId,
      adminId,
      memberId,
    });
  };

  return (
    <Popover>
      <PopoverTrigger className="text-grey text-3xl font-semibold mb-auto hover:cursor-pointer">
        <Settings2 width={20} height={20} color="#647196" />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="flex flex-col items-start
       justify-center gap-y-2 w-auto"
      >
        <ActionAlertDialog
          onContinueHandler={onKickHandler}
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
        {!isAdmin && (
          <ActionAlertDialog
            onContinueHandler={onGiveAdminHandler}
            triggerClassName="flex text-grey text-sm font-semi 
          gap-1 items-center justify-center
          hover:cursor-pointer hover:opacity-70 hover:transition-all 
          hover:duration-300"
            triggerChildren={
              <>
                <ShieldCheck width={16} height={16} color="#647196" />
                Give admin
              </>
            }
            description={
              <span>
                This action will give admin role to
                <strong className="text-pink"> @{userName} </strong>
                in this section!
              </span>
            }
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
