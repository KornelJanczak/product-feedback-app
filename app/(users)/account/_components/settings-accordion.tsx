"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SettingsGradientIcon from "@/public/icons/settings-gradient";
import SettingsContent from "./settings-content";
import { SettingsDialog } from "./settings-dialog";
import { updateUser } from "@/server-actions/user/update-user";
import { CombinedFormInputs } from "@/models/@user-actions-types";
import { updateUserSchema } from "@/schemas/@user-actions-schemas";
import { updateProfile } from "@/server-actions/user/update-profile";
import { updateProfileSchema } from "@/schemas/@user-actions-schemas";
import { useUserSettings } from "@/hooks/use-settings";

export function SettingsAcordion({
  accountSettings,
  profileSettings,
}: {
  accountSettings: AccountInformation[];
  profileSettings: ProfileInformation[];
}) {
  const {
    processForm: accountProcess,
    form: accountForm,
    open: accountOpen,
    setOpen: accountSetOpen,
  } = useUserSettings(updateUser, updateUserSchema, accountSettings, "account");

  const {
    processForm: profileProcess,
    form: profileForm,
    open: profileOpen,
    setOpen: profileSetOpen,
  } = useUserSettings(
    updateProfile,
    updateProfileSchema,
    profileSettings,
    "profile"
  );

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full p-5 mt-44 md:mt-40 lg:order-1 lg:p-4 xl:w-7/12 xl:mt-14 xl:p-2"
    >
      <AccordionItem value="item-1 ">
        <AccordionTrigger className="text-secondDark text-xl font-semibold no-underline hover:no-underline">
          <SettingsGradientIcon />
          <h3 className="mr-auto pl-2 text-lg">Account Settings</h3>
        </AccordionTrigger>
        <SettingsContent
          settings={accountSettings}
          onClick={() => accountSetOpen((open) => !open)}
          dialog={
            <SettingsDialog
              dialogTitle="Edit account"
              dialogDescription="Make changes to your account here. Click save when you re done."
              processForm={accountProcess}
              form={accountForm as CombinedFormInputs | any | undefined}
              data={accountSettings}
              open={accountOpen}
              onOpen={() => accountSetOpen((open) => !open)}
            />
          }
        />
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-secondDark text-xl font-semibold no-underline hover:no-underline">
          <SettingsGradientIcon />
          <h3 className="mr-auto pl-2 text-lg">Profile Settings</h3>
        </AccordionTrigger>
        <SettingsContent
          settings={profileSettings}
          onClick={() => profileSetOpen((open) => !open)}
          dialog={
            <SettingsDialog
              dialogTitle="Edit profile"
              dialogDescription="Make changes to your profile here. Click save when you re done."
              processForm={profileProcess}
              form={profileForm as CombinedFormInputs | any | undefined}
              data={profileSettings}
              open={profileOpen}
              onOpen={() => profileSetOpen((open) => !open)}
            />
          }
        />
      </AccordionItem>
    </Accordion>
  );
}
