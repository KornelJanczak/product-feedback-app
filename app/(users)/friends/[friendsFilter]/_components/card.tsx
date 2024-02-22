import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import ActionButton from "../../../_components/action-button";
import Link from "next/link";

export default function Card({
  userName,
  firstName,
  lastName,
  friendRequestExist,
  existingInvitation,
  userFriend,
  id,
  image,
}: Friend) {
  return (
    <li
      key={id}
      className="flex flex-row items-center justify-between w-full bg-basicWhite p-4 
      gap-x-4 sm:flex-col sm:gap-x-2 sm:p-4"
    >
      <Link href={`/profile?id=${id}`}>
        <Avatar className="w-28 h-28 hover:opacity-70 hover:transition-all duration-300">
          <AvatarImage
            src={image ? image : "https://github.com/shadcn.png"}
            alt="User image"
          />
          <AvatarFallback className="text-center">
            <Skeleton className="w-28 h-28 rounded-full bg-[#0000001c]" />
          </AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex flex-col w-full justify-center sm:items-center">
        <h3 className="text-dark font-medium text-xl mr-auto sm:text-center sm:mr-0">
          {firstName} {lastName}
        </h3>
        <span className="text-grey sm:text-center ">@{userName}</span>
        <ActionButton
          userId={id}
          friendRequestExist={friendRequestExist}
          existingInvitation={existingInvitation}
          userFriend={userFriend}
        />
      </div>
    </li>
  );
}
