import Link from "next/link";
import UserAvatar from "./user-avatar";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IUserCard {
  actionButton?: ReactNode;
  image?: string | null;
  id: string;
  children?: ReactNode;
  firstName?: string | null;
  lastName?: string | null;
  userName: string;
  className?: string;
  avatarClassName?: string;
  contentBoxClassName?: string;
}

export default function UserCard({
  actionButton,
  image,
  firstName,
  lastName,
  userName,
  avatarClassName,
  id,
  className,
  children,
  contentBoxClassName,
}: IUserCard) {
  let displayHeaderName = `${firstName} ${lastName}`;

  if (!firstName || !lastName) {
    displayHeaderName = userName;
  }

  return (
    <li
      className={cn(
        "flex flex-row items-center justify-between w-full bg-basicWhite p-4 gap-x-4 sm:flex-col sm:gap-x-2 sm:p-4",
        className
      )}
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
      <div
        className={cn(
          "flex flex-col w-full justify-center",
          contentBoxClassName
        )}
      >
        <h3 className="text-dark font-medium text-lg sm:text-xl">
          {displayHeaderName}
        </h3>
        <span className="text-grey text-sm sm:text-base">@{userName}</span>
        {actionButton}
      </div>
      {children}
    </li>
  );
}
