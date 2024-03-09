"use client";
import UserAvatar from "@/components/user-avatar";
import useSelectFriend from "@/hooks/use-selected-friends";
import { X } from "lucide-react";

export default function FriendsContainer() {
  const selectedFriends = useSelectFriend((state) => state.selectedFriends);
  const deleteFriend = useSelectFriend((state) => state.deleteFriend);
  return (
    <div className="flex flex-wrap flex-row w-full gap-2">
      {selectedFriends.map(({ id, image, userName }) => (
        <div
          key={id}
          className="flex  gap-1.5 justify-center items-center
           bg-[#d68ffd] p-1 rounded-lg"
        >
          <UserAvatar className="h-8 w-8" userImage={image} />
          <span className="text-pink text-sm font-semibold 1"> {userName}</span>
          <button
            onClick={() => {
              deleteFriend(id);
            }}
          >
            <X height={22} width={22} color="#AD1EFA" />
          </button>
        </div>
      ))}
    </div>
  );
}
