"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import UserCard from "@/components/user/user-card";
import AdminActionButton from "./admin-action-button";
import { useState } from "react";
import SearchInput from "@/components/search-input";
import NoResult from "@/components/no-result";
import { Button } from "@/components/ui/button";
import { Users2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddUsersContainer({ friends }: { friends: IFriend[] }) {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const pushToFindFriends = () => {
    router.push("/friends/suggestions");
  };

  const filteredFriends = friends.filter(({ userName }) =>
    userName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const friendsExist = filteredFriends.length > 0;

  return (
    <>
      <SearchInput searchHandler={searchHandler} value={searchValue} />
      <Separator />
      {friendsExist && (
        <ScrollArea className="h-full">
          {filteredFriends.map(
            ({ id, userName, lastName, firstName, image }) => (
              <UserCard
                key={id}
                id={id}
                userName={userName}
                lastName={lastName}
                firstName={firstName}
                image={image}
                className="sm:flex-row"
                avatarClassName="h-20 w-20 sm:h-24 sm:w-24"
                actionButton={
                  <AdminActionButton userId={id} userName={userName} />
                }
              />
            )
          )}
        </ScrollArea>
      )}
      {!friendsExist && (
        <NoResult
          title="All of your friends are here in this section!"
          description="If you'd like to add someone new, you can find new friends by clicking below!"
          className="py-4 h-full"
          button={
            <Button
              onClick={pushToFindFriends}
              className="bg-pink text-darkWhite hover:bg-pink 
            hover:opacity-70 hover:transition-all hover:duration-300 mt-4 gap-x-1"
            >
              Find new friends!
              <Users2 width={20} height={20} color="#fff" />
            </Button>
          }
        />
      )}
    </>
  );
}
