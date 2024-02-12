"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EditIcon from "@/public/icons/edit";
import SettingsIcon from "@/public/icons/settings";
import { useState } from "react";
import { SettingsDialog } from "./dialog";

export function ProfileSettings({
  userName,
  firstName,
  lastName,
  email,
}: {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}) {
  const dataArr = [
    { type: "User name", data: userName },
    { type: "First name", data: firstName },
    { type: "Last name", data: lastName },
    { type: "Email", data: email },
  ];

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Accordion type="single" collapsible className="container w-full pt-40">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-secondDark text-xl font-semibold">
            Information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-2.5">
            {dataArr.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-grey text-base flex gap-1 ">
                  <SettingsIcon />
                  <strong className="text-secondDark">{item.type}: </strong>
                  {item.data}
                </span>
                <button onClick={() => setOpen((open) => !open)}>
                  <EditIcon />
                </button>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-secondDark text-xl">
            Profile Settings
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <SettingsDialog open={open} onOpen={() => setOpen((open) => !open)} />
    </>
  );
}
