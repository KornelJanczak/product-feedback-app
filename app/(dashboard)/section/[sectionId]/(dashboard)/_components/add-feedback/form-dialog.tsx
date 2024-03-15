import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";

export default function FormDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger
        className="hidden sm:flex items-center justify-center gap-0.5 bg-pink text-darkWhite text-nowrap px-3 py-1 rounded-md 
        hover:bg-pink hover:opacity-70 hover:transition-all hover:duration-300 w-6/12 sm:w-auto"
      >
        <PlusIcon width={18} height={18} color="#fff" />
        New feedback
      </DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
