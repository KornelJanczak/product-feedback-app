import PlusGradientIcon from "@/public/icons/plus-gradient";
import UserAvatar from "@/components/user/user-avatar";
import { cn } from "@/lib/utils";
import FeedbackEditIcon from "@/public/icons/feedback-edit";

interface IFormHeader {
  userImage?: string | null;
  firstName?: string;
  lastName?: string;
  className?: string;
  headerClassName?: string;
  headerTitle: string;
  userName: string;
  additonalContent?: React.ReactNode;
  actionType: "create" | "update";
}

export default function FormHeader({
  userImage,
  firstName,
  lastName,
  userName,
  headerTitle,
  additonalContent,
  className,
  headerClassName,
  actionType,
}: IFormHeader) {
  const isCreate = actionType === "create";
  const isUpdate = actionType === "update";

  const showName =
    firstName && lastName ? `${firstName} ${lastName}` : `${userName}`;

  return (
    <div className={cn("pt-6", className)}>
      {isCreate && <PlusGradientIcon />}
      {isUpdate && <FeedbackEditIcon />}
      <h2
        className={cn(
          "text-lg sm:text-xl md:text-2xl text-secondDark font-bold pt-6",
          headerClassName
        )}
      >
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
