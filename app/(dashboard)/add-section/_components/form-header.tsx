import PlusGradientIcon from "@/public/icons/plus-gradient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function FormHeader({
  userImage,
  firstName,
  lastName,
  userName,
}: {
  userImage?: string;
  firstName?: string;
  lastName?: string;
  userName: string;
}) {
  const avatarImage = userImage ? userImage : "https://github.com/shadcn.png";

  const showName =
    firstName && lastName ? `${firstName} ${lastName}` : `${userName}`;

  return (
    <div className="pt-6">
      <PlusGradientIcon />
      <h2 className="text-2xl text-secondDark font-bold pt-6">Create New Section</h2>
      <div className="flex flex-row gap-1.5 pt-2">
        <Avatar className="w-10 h-10">
          <AvatarImage src={avatarImage} />
          <AvatarFallback>
            <Skeleton className="h-full w-full bg-[#0000002c]" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-secondDark">{showName}</p>
          <span className="text-sm text-grey">Admin</span>
        </div>
      </div>
    </div>
  );
}


