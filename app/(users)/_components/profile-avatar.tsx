import DeleteImageButton from "./delete-image-button";
import ImageUploaderButton from "../../../components/image-uploader-button";
import { ReactNode } from "react";
import LinkIcon from "@/public/icons/link";
import Link from "next/link";
import UserAvatar from "@/components/user-avatar";
import { Camera } from "lucide-react";

export default function ProfileAvatar({
  username,
  firstName,
  lastName,
  image,
  viewType,
  children,
  userId,
}: {
  username: string;
  image?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  children?: ReactNode;
  userId?: string;
  viewType: "accountView" | "profileView";
}) {
  const firstAndLastNameExist = firstName && lastName;

  const accountView = viewType === "accountView";

  return (
    <div
      className="absolute top-28 w-full flex flex-col 
    items-center justify-center sm:top-40 lg:top-48"
    >
      <div className="relative">
        <UserAvatar className="w-44 h-44 " userImage={image} />
        {image && accountView && (
          <DeleteImageButton
            className="rounded-full right-0 ml-2 bottom-11"
            type="avatar"
          />
        )}
        {accountView && (
          <ImageUploaderButton
            actionType="profileAvatar"
            successToast="We uploaded your avatar image!"
            errorToast="Uploading your avatar image failed!"
            className="rounded-full right-3 bottom-2"
          >
            <Camera width={22} height={22} color="#fff" />
          </ImageUploaderButton>
        )}
      </div>
      <div className="flex justify-center items-center px-5">
        <h2 className="flex justify-center items-center text-center gap-2 text-2xl sm:text-3xl font-medium pt-2 text-dark">
          {accountView && <LinkIcon stroke="#AD1EFA" width={28} height={28} />}
          {accountView && (
            <Link href={`/profile?id=${userId}`}>
              {firstAndLastNameExist ? firstName + " " + lastName : username}
            </Link>
          )}
          {!accountView &&
            `${firstAndLastNameExist ? firstName + " " + lastName : username}`}
        </h2>
      </div>
      {children}
    </div>
  );
}
