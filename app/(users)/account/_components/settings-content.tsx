"use client";
import { useState } from "react";
import { updateAccount } from "./settings-accordion";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { AccordionContent } from "@/components/ui/accordion";
import EditIcon from "@/public/icons/edit";
import React, { ReactNode } from "react";

export default function SettingsContent({
  dataArr,
  dialog,
  onClick,
}: {
  dataArr: settings;
  onClick: () => void;
  dialog: ReactNode;
}) {
  // const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <AccordionContent className="sm:relative flex flex-col gap-y-3">
        {dataArr.map((item, i) => (
          <div key={i} className="flex items-center justify-between pl-2">
            <span className="text-grey text-base flex gap-x-1.5 ">
              {item.icon}
              <strong className="text-secondDark">{item.type}: </strong>
              {item.data ? item.data : "no information available."}
            </span>
          </div>
        ))}
        <Button
          className="mt-2 gap-1 right-0 bottom-4 bg-pink hover:opacity-70
         hover:bg-pink hover:transition duration-300
         sm:absolute
         "
          onClick={onClick}
        >
          Edit
          <EditIcon />
        </Button>
      </AccordionContent>
      {dialog}
    </>
  );
}
