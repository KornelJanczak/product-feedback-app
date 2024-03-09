import getUserFriends from "@/lib/user/get-user-friends";
import AddUsersDrawer from "./add-users-drawer";

export default async function AddUsers({ currentUser }: { currentUser: User }) {
  const friends = await getUserFriends(currentUser);

  console.log(friends);

  return (
    <>
      <AddUsersDrawer>
        <div></div>
      </AddUsersDrawer>
    </>
  );
}
