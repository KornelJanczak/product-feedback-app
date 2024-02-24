"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import ActionButton from "../../../_components/action-button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSelect from "@/hooks/use-select";

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
  const router = useRouter();
  const select = useSelect((state) => state);
  return (
    <li
      key={id}
      className="flex  flex-row items-center justify-between w-full bg-basicWhite p-4 
      gap-x-4 sm:flex-col sm:gap-x-2 sm:p-4"
    >
      <button
        className="z-0"
        onClick={(e) => {
          // e.stopPropagation();
          // if (select) return;
          router.push(`/profile?id=${id}`);
        }}
      >
        <Avatar className="w-28 h-28 z-0 hover:opacity-70 hover:transition-all duration-300">
          <AvatarImage
            src={image ? image : "https://github.com/shadcn.png"}
            alt="User image"
          />
          <AvatarFallback className="text-center">
            <Skeleton className="w-28 h-28 rounded-full bg-[#0000001c]" />
          </AvatarFallback>
        </Avatar>
      </button>
      <div className="flex flex-col w-full justify-center sm:items-center">
        <h3 className="text-dark font-medium text-xl mr-auto sm:text-center sm:mr-0">
          {firstName} {lastName}
        </h3>
        <span className="text-grey sm:text-center ">@{userName}</span>
        <ActionButton
          userName={userName}
          userId={id}
          friendRequestExist={friendRequestExist}
          existingInvitation={existingInvitation}
          userFriend={userFriend}
        />
      </div>
    </li>
  );
}
