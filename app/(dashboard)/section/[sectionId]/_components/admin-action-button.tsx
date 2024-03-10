import { Button } from "@/components/ui/button";
import { UserPlus2Icon } from "lucide-react";

export default function AdminActionButton() {
  return (
    <Button className="gap-1 bg-pink hover:opacity-70 hover:transition-all hover:duration-300">
      Add user
      <UserPlus2Icon width={20} height={20} />
    </Button>
  );
}
