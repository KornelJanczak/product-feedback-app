import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ActionAlertDialog from "./action-alert-dialog";
import SettingsIcon from "@/public/icons/settings";
import { Users2, UserRoundCog, ActivityIcon } from "lucide-react";
import Link from "next/link";

export default function CardSettings({
  currentUserIsAdmin,
  sectionId,
  currentUserId,
}: {
  currentUserIsAdmin: boolean;
  currentUserId: string;
  sectionId: string;
}) {
  const settings = [
    { icon: Users2, href: `/section/${sectionId}/members`, label: "Members" },
    {
      icon: UserRoundCog,
      href: `/section/${sectionId}/admins`,
      label: "Admins",
    },
    {
      icon: ActivityIcon,
      href: `/section/${sectionId}/activity`,
      label: "Activity",
    },
  ];

  return (
    <Popover>
      <PopoverTrigger className="bg-dark px-1 pt-1 pb-1 h-auto rounded-lg">
        <SettingsIcon stroke="#ffffff" />
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <ul className="flex flex-col gap-1.5 text-dark font-semi text-sm sm:text-base">
          {settings.map(({ href, label, icon: Icon }) => (
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
          <ActionAlertDialog
            dialogType="leave"
            currentUserId={currentUserId}
            sectionId={sectionId}
          />
          {currentUserIsAdmin && (
            <ActionAlertDialog
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
