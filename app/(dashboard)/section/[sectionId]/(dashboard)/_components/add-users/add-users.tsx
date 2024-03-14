import getUserFriends from "@/lib/user/get-user-friends";
import AddUsersDrawer from "./add-users-drawer";
import AddUsersContainer from "./add-users-container";
import AddUsersDialog from "./add-users-dialog";

interface IAddUsers {
  currentUser: User;
  sectionUsers: { user: IFeedbackSectionUser | null }[];
}

export default async function AddUsers({
  currentUser,
  sectionUsers,
}: IAddUsers) {
  const friends = await getUserFriends(currentUser);

  const sectionUsersIds = sectionUsers.map(({ user }) => user?.id);

  const friendsWithoutSectionUsers = friends.filter(
    (friend) => !sectionUsersIds.includes(friend.id)
  );

  return (
    <>
      <AddUsersDrawer>
        <AddUsersContainer friends={friendsWithoutSectionUsers} />
      </AddUsersDrawer>
      <AddUsersDialog>
        <AddUsersContainer friends={friendsWithoutSectionUsers} />
      </AddUsersDialog>
    </>
  );
}
