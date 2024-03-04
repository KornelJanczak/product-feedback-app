import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode } from "react";
import UserAvatar from "./user-avatar";
import { Settings, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserCard({
  children,
  currentUser,
}: {
  children: ReactNode;
  currentUser?: ICurrentUser;
}) {
  console.log(currentUser);

  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="right-20">
        <div className="flex flex-row items-center gap-2">
          <UserAvatar userImage={currentUser?.image} className="h-14 w-14" />
          <div className="flex flex-col">
            <span className="text-sm sm:text-base text-secondDark font-bold">
              {currentUser?.name}
            </span>
            <span className="text-sm text-grey ">{currentUser?.email}</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-x-2 text-grey text-base 
            font-[500] md:pl-6 transition-all hover:text-slate-600 
            hover:bg-darkWhite md:ml-auto lg:pl-0"
          >
            <div className="flex items-center gap-x-1.5 py-2">
              Manage Account
              <Settings size={22} className="text-grey" />
            </div>
            <div className=" opacity-0 h-full transition-all" />
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
