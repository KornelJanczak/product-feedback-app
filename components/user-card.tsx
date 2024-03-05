import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode } from "react";
import UserAvatar from "./user-avatar";
import { Settings, LogOutIcon } from "lucide-react";

import SidebarItem from "./sidebar-item";
import { signOut } from "next-auth/react";

export default function UserCard({
  children,
  currentUser,
}: {
  children: ReactNode;
  currentUser?: ICurrentUser;
}) {
  console.log(currentUser);


  const onClickHandler = () => {
    signOut();
  };

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent align="end">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2">
            <UserAvatar userImage={currentUser?.image} className="h-14 w-14" />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base text-secondDark font-bold">
                {currentUser?.name}
              </span>
              <span className="text-sm text-grey ">{currentUser?.email}</span>
            </div>
          </div>
          <div className="flex flex-col pl-6 pt-2 gap-0.5">
            <SidebarItem
              size={18}
              href="/account"
              icon={Settings}
              label="Manage account"
              className="md:mr-auto md:ml-0 md:pl-0 md:pb-0 md:text-sm"
              labelClassName="order-2"
            />
            <button
              className="text-sm flex items-center gap-x-2 text-grey  font-[500] transition-all hover:text-slate-600 "
              onClick={onClickHandler}
            >
              <LogOutIcon size={18} /> Log out
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
