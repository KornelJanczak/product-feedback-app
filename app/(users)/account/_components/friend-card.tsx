import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
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
  const userImage = image
    ? `${process.env.AWS_URL}${image}?${new Date().getTime()}`
    : `https://github.com/shadcn.png?${new Date().getTime()}`;

  const showName =
    firstName && lastName ? `${firstName} ${lastName}` : `${userName}`;

  return (
    <Link href={`/profile?id=${id}`} className="w-full h-ful">
      <div>
        <Avatar className="rounded-lg w-full h-full">
          <AvatarImage src={userImage as string} />
          <AvatarFallback>
            <Skeleton className="h-full w-full bg-[#0000002c]" />
          </AvatarFallback>
        </Avatar>
        <h3 className="text-sm text-secondDark font-bold w-full">{showName}</h3>
      </div>
    </Link>
  );
}
