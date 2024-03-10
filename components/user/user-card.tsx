import Link from "next/link";
import UserAvatar from "./user-avatar";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IUserCard {
  actionButton: ReactNode;
  image?: string | null;
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  userName: string;
  avatarClassName?: string;
}

export default function UserCard({
  actionButton,
  image,
  firstName,
  lastName,
  userName,
  avatarClassName,
  id,
}: IUserCard) {
  return (
    <li
      className="flex  flex-row items-center justify-between w-full bg-basicWhite p-4 
    gap-x-4 sm:flex-col sm:gap-x-2 sm:p-4"
    >
      <Link href={`/profile?id=${id}`}>
        <UserAvatar
          userImage={image}
          className={cn(
            "w-24 h-24 z-0 hover:opacity-70 hover:transition-all duration-300",
            avatarClassName
          )}
        />
      </Link>
      <div className="flex flex-col w-full justify-center sm:items-center">
        <h3 className="text-dark font-medium text-lg sm:text-xl md:text-2xl mr-auto sm:text-center sm:mr-0">
          {firstName} {lastName}
        </h3>
        <span className="text-grey text-sm sm:text-base md:text-center">
          @{userName}
        </span>
        {actionButton}
      </div>
    </li>
  );
}
