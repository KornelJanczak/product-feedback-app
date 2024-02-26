"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function FormButtons() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3.5">
      <Button
        type="submit"
        className="w-full bg-pink hover:bg-pink hover:opacity-70 
      text-sm sm:text-base
      transition-all Hover:duration-300"
      >
        Add Section
      </Button>
      <Button
        type="button"
        className="w-full bg-secondDark hover:bg-secondDark 
      text-sm sm:text-base
      hover:opacity-70 transition-all hover:duration-300"
        onClick={() => {
          router.push("/");
        }}
      >
        Cancel
      </Button>
    </div>
  );
}
