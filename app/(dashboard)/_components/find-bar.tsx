"use client";
import FindBar from "@/components/find-bar";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/public/icons/plus";
import { useRouter } from "next/navigation";
export default function FilterBar() {
  const router = useRouter();
  return (
    <FindBar inputPlaceHolder="Section name" params="/">
      <Button
        className=""
        type="button"
        onClick={() => {
          router.push("/add-section");
        }}
      >
        <PlusIcon />
        Add Section
      </Button>
    </FindBar>
  );
}
