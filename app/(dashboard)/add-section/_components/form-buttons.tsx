"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function FormButtons() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3.5 sm:flex-row sm:pt-10 sm:justify-end">
      <Button
        type="submit"
        className="w-full bg-pink hover:bg-pink hover:opacity-70 
        text-sm sm:text-base
        transition-all duration-300 sm:w-auto sm:order-2"
      >
        Add Section
      </Button>
      <Button
        type="button"
        className="w-full bg-secondDark hover:bg-secondDark 
        text-sm sm:text-base
        hover:opacity-70 transition-all duration-300 sm:w-auto"
        onClick={() => {
          router.push("/");
        }}
      >
        Cancel
      </Button>
    </div>
  );
}
