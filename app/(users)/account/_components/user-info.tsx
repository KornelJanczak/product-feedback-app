import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CameraIcon from "@/public/icons/camera";

export default function UserInfo({
  username,
  firstName,
  lastName,
  email,
}: {
  username: string;
  firstName?: string | undefined;
  lastName?: string | undefined;
  email: string;
}) {
  const firstAndLastNameExist = firstName && lastName;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative">
        <Avatar className="w-44 h-44">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <button className="absolute right-1 bottom-2 rounded-full bg-pink p-1.5">
          <CameraIcon />
        </button>
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl font-medium pt-2 text-dark">
          {firstAndLastNameExist ? firstName + " " + lastName : username}
        </h2>
      </div>
      <div className="w-full pt-12">
        <h3 className="text-3xl font-medium pt-2 text-secondDark">Information</h3>
        <p>Email: {email}</p>
        <p>User name: {username}</p>
        {firstName && <p>First name: {firstName}</p>}
        {lastName && <p>Last name: {lastName}</p>}
      </div>
    </div>
  );
}
