"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FriendButton from "./friend-button";

export default function FriendCard({
  userName,
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
      <Avatar className="w-28 h-28">
        <AvatarImage src="https://github.com/shadcn.png" alt="User image" />
        <AvatarFallback className="text-center">{userName}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full justify-center sm:items-center">
        <h3 className="text-xl mr-auto sm:text-center sm:mr-0">{userName}</h3>
        <span className="text-grey sm:text-center ">@nikuskamien123</span>
        <FriendButton
          userId={id}
          friendRequestExist={friendRequestExist}
          existingInvitation={existingInvitation}
          userFriend={userFriend}
        />
      </div>
    </li>
  );
}
