"use client";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import SuggestionIcon from "@/public/icons/suggestion";
import CardSettings from "./card-settings";
import { useRouter } from "next/navigation";

type sectionUser = {
  user: {
    id: string;
    userName: string;
    lastName?: string | null;
    firstName?: string | null;
    image?: string | null;
    // profile: Profile;
  };
}[];

interface ICard {
  sectionId: string;
  currentUserId: string;
  suggestionsNumber: number;
  title: string;
  members: sectionUser;
  admins: sectionUser;
}

export default function Card({
  currentUserId,
  sectionId,
  suggestionsNumber,
  title,
  members,
  admins,
}: ICard) {
  const router = useRouter();
  const currentUserIsAdmin = admins.some(
    ({ user }) => user.id === currentUserId
  );

  const sectionMembers: sectionUser = [...members, ...admins];
  const membersAmout = sectionMembers.length;

  const showedMembers = sectionMembers.slice(0, 3);

  return (
    <div className="flex w-full bg-basicWhite rounded-xl px-5 py-4">
      <div className="flex flex-col justify-between w-full gap-2">
        <h2 className="text-dark text-lg sm:text-xl md:text-2xl font-semibold">
          {title}
        </h2>
        <div className="flex">
          {showedMembers.map(({ user }) => (
            <UserAvatar
              key={user.id}
              userImage={user.image}
              className="h-8 w-8"
            />
          ))}
          {membersAmout > 3 && (
            <div
              className="text-sm flex justify-center items-center 
             text-center font-semibold
             h-8 w-8 rounded-full bg-[#CDD2EE] text-dark"
            >
              +{membersAmout - 3}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col ml-auto items-center justify-center gap-6">
        <div className="flex items-center ml-auto">
          <span className="text-dark text-sm sm:text-base font-semibold">
            {suggestionsNumber}
          </span>
          <SuggestionIcon fill="#3A4374" />
        </div>
        <div className="flex flex-row gap-1">
          <CardSettings
            sectionId={sectionId}
            currentUserId={currentUserId}
            currentUserIsAdmin={currentUserIsAdmin}
          />
          <Button
            className="px-2 pt-1 pb-1 h-auto text-sm sm:text-base bg-blue hover:bg-blue
            hover:opacity-60 transition-all duration-300"
            onClick={() => {
              router.push(`/section/${sectionId}`);
            }}
          >
            Show section
          </Button>
        </div>
      </div>
    </div>
  );
}
