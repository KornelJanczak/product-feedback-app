import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageButton from "./image-button";

const AWS_URL =
  "https://korneljanczak-product-feedback-app.s3.eu-north-1.amazonaws.com/";

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

  return (
    <div className="container absolute top-24 w-full flex flex-col items-center justify-center">
      <div className="relative">
        <Avatar className="w-44 h-44">
          <AvatarImage
            src={image ? AWS_URL + image : "https://github.com/shadcn.png"}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
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
