import { Button } from "@/components/ui/button";
import IconLeft from "@/public/icons/icon-left";
import { useRouter } from "next/navigation";
import SettingsIcon from "@/public/icons/settings";
import { signOut } from "next-auth/react";
import GroupOfPeopleIcon from "@/public/icons/group-of-people";

export default function AccountPanel({
  onClick,
  className,
  classNameBox,
  friendBtnClass,
}: {
  onClick?: () => void;
  className?: string;
  classNameBox?: string;
  friendBtnClass?: string;
}) {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <div
        className={
          "flex items-center justify-center gap-x-2 pt-2 " + classNameBox
        }
      >
        <Button
          className="bg-pink p-1.5 text-xs hover:opacity-70 hover:bg-pink hover:transition duration-300 flex gap-x-1 w-34 md:w-36 "
          onClick={() => router.push("/account")}
        >
          Account Settings <SettingsIcon />
        </Button>
        <Button
          className={
            "bg-pink hover:opacity-70 text-xs hover:bg-pink hover:transition duration-300 gap-x-1 mg-mx-auto md:w-36 " +
            friendBtnClass
          }
          onClick={() => {
            onClick!;
            router.push("/friends/sugesstions");
          }}
        >
          Find Friends!
          <GroupOfPeopleIcon stroke="#ffffff" />
        </Button>
      </div>
      <Button
        className="bg-red hover:opacity-70 text-xs hover:bg-red hover:transition duration-300 flex gap-x-1 w-34 md:w-36 "
        onClick={() => signOut()}
      >
        Sign Out <IconLeft />
      </Button>
    </div>
  );
}
