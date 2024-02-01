import { Button } from "@/components/ui/button";
import IconLeft from "@/public/icons/icon-left";
import { useRouter } from "next/navigation";
import SettingsIcon from "@/public/icons/settings";
import { signOut } from "next-auth/react";

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
          className="bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300 flex gap-x-1 w-34 md:w-36 "
          onClick={() => router.push("/account")}
        >
          User Settings <SettingsIcon />
        </Button>
        <Button
          className="bg-red hover:opacity-70 hover:bg-red hover:transition duration-300 flex gap-x-1 w-34 md:w-36 "
          onClick={() => signOut()}
        >
          Sign Out <IconLeft />
        </Button>
      </div>
      <Button
        className={
          "bg-dark hover:opacity-70 hover:bg-dark hover:transition duration-300 mg-mx-auto w-34 md:w-36 " +
          friendBtnClass
        }
        onClick={() => {
          onClick!();
          router.push("/friends");
        }}
      >
        Find Friends!
      </Button>
    </div>
  );
}
