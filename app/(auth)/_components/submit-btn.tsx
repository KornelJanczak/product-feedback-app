"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface SubmitBtnProps {
  className?: string;
  pending?: boolean;
  children: ReactNode;
  formAction?: any;
  onClick?: any
}

const SubmitBtn: React.FC<SubmitBtnProps> = React.memo(
  ({ className, children, pending, formAction, onClick }) => {
    const { pending: statusPending } = useFormStatus();
    return (
      <Button
        className={`mt-5 w-full bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300 lg:mt-7 ${className}`}
        type="submit"
        aria-disabled={pending ? pending : statusPending}
        formAction={formAction}
        onClick={onClick}
      >
        {pending || statusPending ? (
          <ClipLoader size={24} color="#3A4374" />
        ) : (
          children
        )}
      </Button>
    );
  }
);

SubmitBtn.displayName = "SubmitBtn";

export default SubmitBtn;
