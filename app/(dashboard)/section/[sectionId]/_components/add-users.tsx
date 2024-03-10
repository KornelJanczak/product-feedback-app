import getUserFriends from "@/lib/user/get-user-friends";
import AddUsersDrawer from "./add-users-drawer";
import AddUsersContainer from "./add-users-container";

export default async function AddUsers({ currentUser }: { currentUser: User }) {
  const friends = await getUserFriends(currentUser);

  return (
    <AddUsersDrawer>
      <AddUsersContainer friends={friends} />
    </AddUsersDrawer>
  );
}
