import UserAvatar from "@/components/user/user-avatar";
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

  return (
    <Link href={`/profile?id=${id}`} className="w-full h-ful">
      <div>
        <UserAvatar
          className="rounded-lg w-full h-full"
          fallbackClassName="max-h-50 max-w-50 w-full h-full"
          userImage={image}
        />
        <h3 className="text-sm text-secondDark font-bold w-full">{showName}</h3>
      </div>
    </Link>
  );
}
