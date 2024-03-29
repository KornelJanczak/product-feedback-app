import { Trash2 } from "lucide-react";

export default function DeleteTag() {
  return (
    <div className="flex justify-center items-center gap-1 text-sm text-grey">
      <Trash2 width={18} height={18} color="#647196" />
      Delete
    </div>
  );
}
