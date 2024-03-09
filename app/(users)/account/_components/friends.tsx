import FriendsContainer from "./friends-container";
import NoFriendResult from "./no-friend-result";
import getUserFriends from "@/lib/user/get-user-friends";
import FriendHeader from "./friend-header";
import FriendCard from "./friend-card";
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
      className={`p-5 mt-5 md:rounded lg:order-1 lg:p-4 ${
        userFriends ? "xl:w-7/12" : "xl:w-5/12"
      }  xl:p-2`}
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
