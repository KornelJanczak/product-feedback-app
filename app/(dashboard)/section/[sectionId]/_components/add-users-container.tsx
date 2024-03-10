"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import UserCard from "@/components/user/user-card";
import AdminActionButton from "./admin-action-button";
import { useState } from "react";
import SearchInput from "@/components/search-input";

export default function AddUsersContainer({ friends }: { friends: IFriend[] }) {
  const [searchValue, setSearchValue] = useState<string>("");

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredFriends = friends.filter(({ userName }) =>
    userName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <SearchInput searchHandler={searchHandler} />
      <Separator />
      <ScrollArea className="h-full">
        {filteredFriends.map(({ id, userName, lastName, firstName, image }) => (
          <UserCard
            key={id}
            id={id}
            userName={userName}
            lastName={lastName}
            firstName={firstName}
            image={image}
            className="sm:flex-row"
            avatarClassName="h-20 w-20 sm:h-24 sm:w-24"
            actionButton={<AdminActionButton />}
          />
        ))}
      </ScrollArea>
    </>
  );
}
