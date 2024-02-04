import FriendCard from "./friend-card";
export default function FriendsContainer({ users }: { users: Friend[] }) {
  return (
    <ul
      className="flex flex-col items-center justify-center gap-2 p-4 w-full 
      sm:grid sm:grid-cols-2 sm:p-0 sm:gap-x-8 md:grid-cols-3 md:gap-x-4"
    >
      {users!.map(
        ({ id, userName, friendRequestExist, existingInvitation }) => (
          <FriendCard
            key={id}
            userName={userName}
            id={id}
            friendRequestExist={friendRequestExist}
            existingInvitation={existingInvitation}
          />
        )
      )}
    </ul>
  );
}
