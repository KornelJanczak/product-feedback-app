import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { UserPlus2Icon } from "lucide-react";
import { ReactNode } from "react";

export default function AddUsersDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger
        className="hidden sm:flex items-center justify-center gap-1 bg-blue text-darkWhite px-3 py-1 rounded-md 
      hover:opacity-70 hover:transition-all hover:duration-300 sm:w-auto"
      >
        <UserPlus2Icon width={18} height={18} color="#fff" />
        Add User
      </DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
