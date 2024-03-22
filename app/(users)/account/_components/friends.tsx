import FriendsContainer from "./friends-container";
import NoFriendResult from "./no-friend-result";
import getUserFriends from "@/lib/user/get-user-friends";
import FriendHeader from "./friend-header";
import FriendCard from "./friend-card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default async function Friends({
  currentUser,
}: {
  currentUser: ICurrentUser;
}) {
  const userFriends = await getUserFriends(currentUser, undefined);
  const slicedFriends = userFriends.slice(0, 9);
  const userHasFriends = userFriends.length > 0;

  return (
    <div
      className={cn(
        "p-5 mt-5 md:rounded lg:order-1 lg:p-4 xl:p-2",
        userFriends && "xl:w-7/12",
        !userFriends && "xl:w-5/12"
      )}
    >
      <FriendHeader numberOfFriends={userFriends.length} />
      {userHasFriends && (
        <FriendsContainer>
          {slicedFriends.map(({ id, userName, firstName, lastName, image }) => (
            <FriendCard
              key={id}
              id={id}
              userName={userName}
              firstName={firstName}
              lastName={lastName}
              image={image}
            />
          ))}
        </FriendsContainer>
      )}
      {!userHasFriends && <NoFriendResult />}
    </div>
  );
}

export const FriendsSkeleton = () => {
  return (
    <div className="p-5 mt-5 lg:order-1 lg:p-4 xl:p-2 xl:w-7/12">
      <div className="flex items-center justify-between pb-6 pt-4">
        <Skeleton className="w-32 h-7 bg-skeletonTheme" />
        <Skeleton className="w-32 h-6 bg-skeletonTheme " />
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 w-full lg:gap-y-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="rounded-lg w-full h-full">
            <Skeleton className="h-28 sm:h-36 md:h-52 lg:h-40 bg-skeletonTheme" />
          </div>
        ))}
      </div>
    </div>
  );
};
