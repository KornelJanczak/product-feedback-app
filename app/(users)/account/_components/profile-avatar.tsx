"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import DeleteImageButton from "./delete-image-button";
import ImageUploaderButton from "./image-uploader-button";
import { useMemo } from "react";

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
  // const [avatarImage, setAvatarTmage] = useState<string | null>(null);

  //   : `https://github.com/shadcn.png?${new Date().getTime()}`;

  const firstAndLastNameExist = firstName && lastName;
  const avatar = useMemo(() => {
    return image
      ? `${image}?${new Date().getTime()}`
      : `https://github.com/shadcn.png?${new Date().getTime()}`;
  }, [image]);

  return (
    <div
      className="absolute top-28 w-full flex flex-col 
    items-center justify-center sm:top-40 lg:top-48"
    >
      <div className="relative">
        <Avatar className="w-44 h-44">
          <AvatarImage src={avatar} />
          <AvatarFallback>
            <Skeleton className="h-full w-full bg-[#0000002c]" />
          </AvatarFallback>
        </Avatar>
        {avatar && (
          <DeleteImageButton
            className="rounded-full right-0 ml-2 bottom-11"
            type="avatar"
          />
        )}
        <ImageUploaderButton type="avatar" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl font-medium pt-2 text-dark">
          {firstAndLastNameExist ? firstName + " " + lastName : username}
        </h2>
      </div>
    </div>
  );
}
