import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Pencil } from "lucide-react";

export default function UpdateFeedbackButton() {
  return (
    <Dialog>
      <DialogTrigger className="flex text-grey text-sm mr-auto gap-1">
        <Pencil width={18} height={18} color="#647196" />
        Edit
      </DialogTrigger>
      <DialogContent></DialogContent>
    </Dialog>
  );
}
