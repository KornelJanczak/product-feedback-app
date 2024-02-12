import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

export function SettingsDialog({
  open,
  onOpen,
  data,
}: {
  data: { type: string; data: string | null | undefined; icon: ReactNode }[];
  open: boolean;
  onOpen: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <DialogContent className="max-w-80 sm:max-w-md rounded">
        <DialogHeader>
          <DialogTitle className="text-secondDark">Edit profile</DialogTitle>
          <DialogDescription className="text-grey">
            Make changes to your profile here. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {data.map((item, i) => (
            <div key={i} className="grid grid-cols-4 items-center gap-4 ">
              <Label htmlFor={item.type} className="">
                {item.type}
              </Label>
              <Input
                id={item.type}
                defaultValue={item.data as string}
                className="col-span-3"
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-pink hover:opacity-70
         hover:bg-pink hover:transition duration-300"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
