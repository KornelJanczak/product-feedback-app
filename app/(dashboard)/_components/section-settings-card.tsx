import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import LeaveOrDeleteAlertDialog from "./leave-or-delete-alert-dialog";
import SettingsIcon from "@/public/icons/settings";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ICardSettings {
  currentUserIsAdmin: boolean;
  currentUserId: string;
  className?: string;
  sectionId: string;
  align?: "center" | "end" | "start";
  settings?: {
    icon: LucideIcon;
    href: string;
    label: string;
  }[];
}

export default function SectionSettingsCard({
  currentUserIsAdmin,
  sectionId,
  currentUserId,
  settings,
  className,
  align = "center",
}: ICardSettings) {
  return (
    <Popover>
      <PopoverTrigger
        className={cn("bg-dark px-1 pt-1 pb-1 h-auto rounded-lg", className)}
      >
        <SettingsIcon stroke="#ffffff" />
      </PopoverTrigger>
      <PopoverContent className="w-full" align={align}>
        <ul className="flex flex-col gap-1.5 text-dark font-semi text-sm sm:text-base">
          {settings?.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center rounded-lg text-grey
              gap-1 hover:text-pink transition-all duration-300"
            >
              <Icon width={16} height={16} />
              {label}
            </Link>
          ))}
          <LeaveOrDeleteAlertDialog
            dialogType="leave"
            currentUserId={currentUserId}
            sectionId={sectionId}
          />
          {currentUserIsAdmin && (
            <LeaveOrDeleteAlertDialog
              dialogType="delete"
              currentUserId={currentUserId}
              sectionId={sectionId}
            />
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
