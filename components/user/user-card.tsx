import Link from "next/link";
import UserAvatar from "./user-avatar";
import { ReactNode } from "react";

interface IUserCard {
  actionButton: ReactNode;
  image?: string | null;
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  userName: string;
}

export default function UserCard({
  actionButton,
  image,
  firstName,
  lastName,
  userName,
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
          className="w-28 h-28 z-0 hover:opacity-70 hover:transition-all duration-300"
        />
      </Link>
      <div className="flex flex-col w-full justify-center sm:items-center">
        <h3 className="text-dark font-medium text-xl mr-auto sm:text-center sm:mr-0">
          {firstName} {lastName}
        </h3>
        <span className="text-grey sm:text-center ">@{userName}</span>
        {actionButton}
      </div>
    </li>
  );
}
