"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";

export default function AddSectionButton() {
  const router = useRouter();

  return (
    <Button
      className="bg-pink hover:bg-pink hover:opacity-70 transition duration-300 ml-auto"
      type="button"
      onClick={() => {
        router.push("/add-section");
      }}
    >
      <PlusIcon width={20} height={20} color="#fff" />
      Add Section
    </Button>
  );
}
