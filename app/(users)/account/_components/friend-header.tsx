import Link from "next/link";

export default function FriendHeader({
  numberOfFriends,
}: {
  numberOfFriends: number;
}) {
  const friendsExist = numberOfFriends > 0;

  return (
    <div className="flex items-center justify-between pb-6 pt-4">
      <h2 className="text-2xl font-semibold text-dark">
        {friendsExist && `Your friends: ${numberOfFriends}`}
        {!friendsExist && "You don't have friends!"}
      </h2>
      {friendsExist && (
        <Link
          href={"/friends/your-friends"}
          className="text-lg text-pink text-semibold"
        >
          Show more friends
        </Link>
      )}
      {!friendsExist && (
        <Link
          href={"/friends/sugesstions"}
          className="text-lg text-pink text-semibold"
        >
          Find new friends!
        </Link>
      )}
    </div>
  );
}
