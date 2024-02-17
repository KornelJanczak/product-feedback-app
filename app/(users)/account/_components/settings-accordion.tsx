"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SettingsGradientIcon from "@/public/icons/settings-gradient";
import SettingsContent from "./settings-content";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUser } from "@/server-actions/user/update-user";
import { updateUserSchema } from "@/schemas/@user-actions-schemas";
import {
  updateProfile,
  updateProfileSchema,
} from "@/server-actions/user/update-profile";
import { SettingsDialog } from "./settings-dialog";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export type updateAccount = z.infer<typeof updateUserSchema>;
export type updateProfile = z.infer<typeof updateProfileSchema>;

export function Settings({
  accountSettings,
  profileSettings,
}: {
  accountSettings: settings;
  profileSettings: settings;
}) {
  console.log(accountSettings);

  useEffect(() => {
    console.log("");
  });

  const updateForm = useForm<updateAccount>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      userName: accountSettings[0].data as string,
      firstName: accountSettings[1].data as string,
      lastName: accountSettings[2].data as string,
      email: accountSettings[3].data as string,
    },
  });

  const { execute: executeUpdateAccount } = useAction(updateUser);

  const { execute: executeUpdateProfile } = useAction(updateProfile);

  const processForm = async (data: z.infer<typeof updateUserSchema>) => {
    console.log(data);
  };

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Accordion type="single" collapsible className="container w-full pt-40">
      <AccordionItem value="item-1 ">
        <AccordionTrigger className="text-secondDark text-xl font-semibold no-underline hover:no-underline">
          <SettingsGradientIcon />
          <span className="mr-auto pl-2">Account Settings</span>
        </AccordionTrigger>
        <SettingsContent
          dataArr={accountSettings}
          onClick={() => setOpen((open) => !open)}
          dialog={
            <SettingsDialog
              processForm={processForm}
              form={updateForm}
              data={accountSettings}
              open={open}
              onOpen={() => setOpen((open) => !open)}
            />
          }
        />
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-secondDark text-xl font-semibold no-underline hover:no-underline">
          <SettingsGradientIcon />
          <span className="mr-auto pl-2">Profile Settings</span>
        </AccordionTrigger>
        {/* <SettingsContent dataArr={profileSettings} /> */}
      </AccordionItem>
    </Accordion>
  );
}
