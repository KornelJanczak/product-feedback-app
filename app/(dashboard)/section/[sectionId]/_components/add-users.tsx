import getUserFriends from "@/lib/user/get-user-friends";
import AddUsersDrawer from "./add-users-drawer";
import AddUsersContainer from "./add-users-container";
import AddUsersDialog from "./add-users-dialog";

export default async function AddUsers({ currentUser }: { currentUser: User }) {
  const friends = await getUserFriends(currentUser);

  return (
    <>
      <AddUsersDrawer>
        <AddUsersContainer friends={friends} />
      </AddUsersDrawer>
      <AddUsersDialog>
        <AddUsersContainer friends={friends} />
      </AddUsersDialog>
    </>
  );
}
