import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { UserPlus2Icon } from "lucide-react";
import { ReactNode } from "react";


export default function AddUsersDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger
        className="hidden sm:flex items-center justify-center gap-1 bg-blue text-darkWhite px-3 py-1 rounded-md 
      hover:opacity-70 hover:transition-all hover:duration-300"
      >
        Add User
        <UserPlus2Icon width={20} height={20} color="#fff" />
      </DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
