import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageButton from "./use-image-button";
import { Skeleton } from "@/components/ui/skeleton";
import DeleteImageButton from "./delete-image-button";

export default function UserAvatar({
  username,
  firstName,
  lastName,
  image,
}: {
  username: string;
  image?: string;
  firstName?: string | undefined;
  lastName?: string | undefined;
}) {
  const firstAndLastNameExist = firstName && lastName;

  const avatar = image
    ? `${process.env.AWS_URL}${image}?${new Date().getTime()}`
    : `https://github.com/shadcn.png?${new Date().getTime()}`;

  return (
    <div className=" absolute top-28 w-full flex flex-col items-center justify-center">
      <div className="relative">
        <Avatar className="w-44 h-44">
          <AvatarImage src={avatar} />
          <AvatarFallback>
            <Skeleton className="h-full w-full bg-[#0000002c]" />
          </AvatarFallback>
        </Avatar>
        {image && (
          <DeleteImageButton
            className="rounded-full right-0 ml-2 bottom-11"
            imageName={image as string}
            type="avatar"
          />
        )}
        <ImageButton type="avatar" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl font-medium pt-2 text-dark">
          {firstAndLastNameExist ? firstName + " " + lastName : username}
        </h2>
      </div>
    </div>
  );
}
