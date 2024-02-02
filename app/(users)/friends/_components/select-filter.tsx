"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function SelectFilter() {
  const router = useRouter();
  const changeHandler = (value: string) => {
    router.push(`/friends%${value}`);
    
  };

  return (
    <Select onValueChange={changeHandler}>
      <SelectTrigger className="w-[180px] text-grey sm:w-full">
        <SelectValue placeholder="Find!" />
      </SelectTrigger>
      <SelectContent className="px-0 mt-2 text-grey">
        <SelectItem value="friend-sugesstions">Friend Suggestions</SelectItem>
        <SelectItem value="recived-invitations">
          Received Invitations
        </SelectItem>
        <SelectItem value="sended-invitations">Sended Invitations</SelectItem>
      </SelectContent>
    </Select>
  );
}
