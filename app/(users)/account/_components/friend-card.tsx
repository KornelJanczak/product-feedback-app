import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import UserAvatar from "@/components/user-avatar";
import Link from "next/link";

export default function FriendCard({
  id,
  userName,
  firstName,
  lastName,
  image,
}: {
  id: string;
  userName: string;
  firstName: string | null;
  lastName: string | null;
  image: string | null;
}) {
  const showName =
    firstName && lastName ? `${firstName} ${lastName}` : `${userName}`;

  console.log(image);

  return (
    <Link href={`/profile?id=${id}`} className="w-full h-ful">
      <div>
        <UserAvatar className="rounded-lg w-full h-full" />
        <h3 className="text-sm text-secondDark font-bold w-full">{showName}</h3>
      </div>
    </Link>
  );
}
