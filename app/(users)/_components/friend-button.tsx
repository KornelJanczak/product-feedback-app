import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import ClipLoader from "react-spinners/ClipLoader";
export default function FriendButton({
  className,
  onClick,
  icon,
  children,
  pending,
}: {
  className: string;
  onClick: () => void;
  icon: ReactNode;
  children: ReactNode;
  pending: boolean;
}) {
  return (
    <Button
      className={
        className +
        "  w-full bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300 "
      }
      onClick={onClick}
      aria-disabled={pending}
    >
      {pending ? <ClipLoader size={20} color="#ffffff" /> : icon}
      {children}
    </Button>
  );
}
