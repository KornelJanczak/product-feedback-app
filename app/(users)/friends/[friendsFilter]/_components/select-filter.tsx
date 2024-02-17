"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, useRouter } from "next/navigation";

export default function SelectFilter() {
  const router = useRouter();
  const { friendsFilter } = useParams();
  const changeHandler = (value: string) => {
    router.push(`/friends/${value}`);
  };

  return (
    <Select onValueChange={changeHandler} value={friendsFilter as string}>
      <SelectTrigger className="w-2/5 text-grey ">
        <SelectValue placeholder="Suggestions" />
      </SelectTrigger>
      <SelectContent className="px-0 mt-2 text-grey">
        <SelectItem value="sugesstions">Friend Suggestions</SelectItem>
        <SelectItem value="recived-invitations">
          Received Invitations
        </SelectItem>
        <SelectItem value="sended-invitations">Sended Invitations</SelectItem>
        <SelectItem value="your-friends">Your Friends</SelectItem>
      </SelectContent>
    </Select>
  );
}
