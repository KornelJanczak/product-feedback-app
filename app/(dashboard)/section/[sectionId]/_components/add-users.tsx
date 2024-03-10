import getUserFriends from "@/lib/user/get-user-friends";
import AddUsersDrawer from "./add-users-drawer";
import UserCard from "@/components/user/user-card";

export default async function AddUsers({ currentUser }: { currentUser: User }) {
  const friends = await getUserFriends(currentUser);

  console.log(friends);

  return (
    <>
      <AddUsersDrawer>
        <div>
          {friends.map(
            ({
              id,
              userName,
              lastName,
              firstName,
              image,
              userFriend,
              email,
            }) => (
              <UserCard
                key={id}
                id={id}
                userName={userName}
                lastName={lastName}
                firstName={firstName}
                image={image}
                actionButton
              />
            )
          )}
        </div>
      </AddUsersDrawer>
    </>
  );
}
