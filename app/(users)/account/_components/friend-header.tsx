import Link from "next/link";

export default function FriendHeader() {
  return (
    <div className="flex items-center justify-between pb-6 pt-4">
      <h2 className="text-2xl font-semibold text-dark">Your friends</h2>
      <Link
        href={"/friends/your-friends"}
        className="text-lg text-pink text-semibold"
      >
        Show more friends
      </Link>
    </div>
  );
}
