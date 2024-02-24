"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSelect from "@/hooks/use-select";
import { useParams, useRouter } from "next/navigation";

export default function SelectFilter() {
  const router = useRouter();
  const { friendsFilter } = useParams();
  const select = useSelect((state) => state);

  const changeHandler = (value: string) => {
    // select.onToggle();
    router.push(`/friends/${value}`);
    // select.onToggle();
  };

  return (
    <Select onValueChange={changeHandler} value={friendsFilter as string}>
      <SelectTrigger className="w-2/5 text-grey z-50">
        <SelectValue placeholder="Suggestions" />
      </SelectTrigger>
      <SelectContent className="px-0 mt-2 text-grey z-50">
        <SelectItem value="sugesstions" className="z-50">
          Friend Suggestions
        </SelectItem>
        <SelectItem
          value="recived-invitations"
          className="z-50"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation();
          }}
        >
          Received Invitations
        </SelectItem>
        <SelectItem value="sended-invitations" className="z-50">
          Sended Invitations
        </SelectItem>
        <SelectItem value="your-friends" className="z-50">
          Your Friends
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
