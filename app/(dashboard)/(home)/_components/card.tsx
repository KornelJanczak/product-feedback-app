"use client";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import IconLeft from "@/public/icons/icon-left";
import SettingsIcon from "@/public/icons/settings";
import SuggestionIcon from "@/public/icons/suggestion";

type sectionUser = {
  user: {
    id: string;
    userName: string;
    lastName?: string | null;
    firstName?: string | null;
    image?: string | null;
  };
}[];

interface ICard {
  id: string;
  title: string;
  members: sectionUser;
  admins: sectionUser;
}

export default function Card({ id, title, members, admins }: ICard) {
  console.log(members);

  const sectionMembers: sectionUser = [...members, ...admins];

  return (
    <div className="flex w-full bg-basicWhite rounded-lg px-5 py-4">
      <div className="flex flex-col justify-between w-full gap-2">
        <h2 className="text-dark text-lg sm:text-xl md:text-2xl font-semibold">
          {title}
        </h2>
        <div className="flex">
          {sectionMembers.map(({ user }) => (
            <UserAvatar key={1} userImage={user.image} className="h-8 w-8" />
          ))}
        </div>
      </div>
      <div className="flex flex-col ml-auto items-center justify-center gap-6">
        <div className="flex items-center ml-auto">
          <span className="text-dark text-sm sm:text-base font-semibold">
            3
          </span>
          <SuggestionIcon fill="#3A4374" />
        </div>
        <div className="flex flex-row gap-1">
          <Button className="bg-red text-basicWhite px-2 pt-1 pb-1 h-auto text-sm sm:text-base">
            Leave
            <IconLeft />
          </Button>
          <Button className="bg-dark px-2 pt-1 pb-1 h-auto">
            <SettingsIcon stroke="#ffffff" />
          </Button>
        </div>
      </div>
    </div>
  );
}
