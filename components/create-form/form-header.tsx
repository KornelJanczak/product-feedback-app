import PlusGradientIcon from "@/public/icons/plus-gradient";
import UserAvatar from "@/components/user/user-avatar";
import { cn } from "@/lib/utils";

interface IFormHeader {
  userImage?: string | null;
  firstName?: string;
  lastName?: string;
  className?: string;
  headerTitle: string;
  userName: string;
  additonalContent?: React.ReactNode;
}

export default function FormHeader({
  userImage,
  firstName,
  lastName,
  userName,
  headerTitle,
  additonalContent,
  className,
}: IFormHeader) {
  const showName =
    firstName && lastName ? `${firstName} ${lastName}` : `${userName}`;

  return (
    <div className={cn("pt-6", className)}>
      <PlusGradientIcon />
      <h2 className="text-lg sm:text-xl md:text-2xl text-secondDark font-bold pt-6">
        {headerTitle}
      </h2>
      <div className="flex flex-row gap-1.5 pt-2">
        <UserAvatar userImage={userImage} />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-secondDark">{showName}</p>
          {additonalContent}
        </div>
      </div>
    </div>
  );
}
