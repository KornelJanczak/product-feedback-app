import FriendCard from "./friend-card";
import UlCard from "./ul-card";
import NoResult from "@/components/no-result";
export default function FriendsContainer({ users }: { users: Friend[] }) {
  if (users.length > 0)
    return (
      <UlCard>
        {users!.map(
          ({
            id,
            userName,
            friendRequestExist,
            existingInvitation,
            userFriend,
            lastName,
            firstName,
          }) => (
            <FriendCard
              key={id}
              userName={userName}
              id={id}
              lastName={lastName}
              firstName={firstName}
              friendRequestExist={friendRequestExist}
              existingInvitation={existingInvitation}
              userFriend={userFriend}
            />
          )
        )}
      </UlCard>
    );

  if (users.length === 0)
    return (
      <NoResult
        title="There is no users."
        description="The user with this name has not been found. Please provide the correct username and try again."
      />
    );
}
