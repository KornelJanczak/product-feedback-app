import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function UserAvatar({
  userImage,
  className,
  fallbackClassName,
}: {
  userImage?: string | null;
  className?: string;
  fallbackClassName?: string;
}) {
  const avatarImage = userImage ? userImage : "https://github.com/shadcn.png";

  return (
    <Avatar className={cn("h-10 w-10", className)}>
      <AvatarImage src={avatarImage} />
      <AvatarFallback className={fallbackClassName}>
        <Skeleton className="h-full w-full bg-[#0000002c]" />
      </AvatarFallback>
    </Avatar>
  );
}
