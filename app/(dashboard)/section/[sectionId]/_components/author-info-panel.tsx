import Link from "next/link";
import UserAvatar from "@/components/user/user-avatar";
import AdminTag from "./admin-tag";
import { cn } from "@/lib/utils";

interface IAuthorHeader {
  authorId: string;
  firstName?: string | null;
  lastName?: string | null;
  userName: string;
  image?: string | null;
  isAdmin: boolean;
  className?: string;
}

export default function AuthorInfoPanel({
  authorId,
  firstName,
  lastName,
  userName,
  image,
  isAdmin,
  className,
}: IAuthorHeader) {
  const displeyName = firstName ? `${firstName} ${lastName}` : `@${userName}`;

  return (
    <div className={cn("flex gap-1.5", className)}>
      <Link
        href={`/profile?id=${authorId}`}
        className="hover:opacity-70 hover:transition-all hover:duration-300"
      >
        <UserAvatar className="h-10 w-10" userImage={image} />
      </Link>
      <div>
        <h4 className="text-dark font-semibold">{displeyName}</h4>
        {isAdmin && <AdminTag />}
        {!isAdmin && <span className="text-sm text-grey">Member</span>}
      </div>
    </div>
  );
}
