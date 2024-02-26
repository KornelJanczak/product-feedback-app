"use client";
import { Button } from "@/components/ui/button";
import { AccordionContent } from "@/components/ui/accordion";
import EditIcon from "@/public/icons/edit";
import React, { ReactNode } from "react";

export default function SettingsContent({
  settings,
  dialog,
  onClick,
}: {
  settings: AccountInformation[] | ProfileInformation[];
  onClick: () => void;
  dialog: ReactNode;
}) {
  return (
    <>
      <AccordionContent className="sm:relative flex flex-col gap-y-3">
        {settings.map((item, i) => (
          <div key={i} className="flex items-center justify-between pl-2">
            <span className="text-grey text-base flex gap-x-1.5 ">
              {item.icon}
              <strong className="text-secondDark">{item.type}: </strong>
              {item.type === "GitHub" && (
                <a href={item.data as string}>
                  {item.data ? item.data : "no information available."}
                </a>
              )}
              {item.type !== "GitHub" && (
                <p>{item.data ? item.data : "no information available."}</p>
              )}
            </span>
          </div>
        ))}
        <Button
          className="mt-2 gap-1 text-sm right-0 bottom-4 bg-pink hover:opacity-70
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
