"use client";
import NoResult from "@/components/no-result";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function NoFriendResult() {
  const router = useRouter();

  return (
    <NoResult
      title="You don't have friends!"
      description="Find new friends and management your own product together!"
      className="pt-10"
      button={
        <Button
          onClick={() => router.push("/friends/suggestions")}
          className="mt-4 bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300"
        >
          Find friends!
        </Button>
      }
    />
  );
}
