"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { ReactNode } from "react";

interface SubmitBtnProps {
  className?: string;
  children: ReactNode;
}

const SubmitBtn: React.FC<SubmitBtnProps> = React.memo(
  ({ className, children }) => {
    const { pending } = useFormStatus();
console.log(pending);

    return (
      <Button
        className={`mt-5 w-full bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300 lg:mt-7 ${className}`}
        type="submit"
        aria-disabled={pending}
      >
        {pending ? "<ClipLoader />" : children}
      </Button>
    );
  }
);

SubmitBtn.displayName = "SubmitBtn";

export default SubmitBtn;
