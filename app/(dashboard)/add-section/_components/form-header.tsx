import PlusGradientIcon from "@/public/icons/plus-gradient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import UserAvatar from "@/components/user-avatar";

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
      <h2 className="text-2xl text-secondDark font-bold pt-6">
        Create New Section
      </h2>
      <div className="flex flex-row gap-1.5 pt-2">
        <UserAvatar userImage={userImage} />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-secondDark">{showName}</p>
          <span className="text-sm text-grey">Admin</span>
        </div>
      </div>
    </div>
  );
}
