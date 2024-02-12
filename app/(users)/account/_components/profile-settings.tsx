"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SettingsGradientIcon from "@/public/icons/settings-gradient";
import UserIcon from "@/public/icons/user";
import EmailIcon from "@/public/icons/email";
import Settings from "./settings";
import PreferRoleIcon from "@/public/icons/prefer-role";
import DescriptionIcon from "@/public/icons/description";
import LocationIcon from "@/public/icons/location";
import CompanyIcon from "@/public/icons/company";
import LinkIcon from "@/public/icons/link";

interface IProfileSettings {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  description?: string;
  company?: string;
  location?: string;
  preferRole?: string;
  gitHub?: string;
}

export function ProfileSettings({
  userName,
  firstName,
  lastName,
  email,
  description,
  company,
  location,
  preferRole,
  gitHub,
}: IProfileSettings) {
  const accountSettings = [
    { type: "User name", data: userName, icon: <UserIcon /> },
    { type: "First name", data: firstName, icon: <UserIcon /> },
    { type: "Last name", data: lastName, icon: <UserIcon /> },
    { type: "Email", data: email, icon: <EmailIcon /> },
  ];

  const profileSettings = [
    { type: "Prefer Role", data: preferRole, icon: <PreferRoleIcon /> },
    { type: "Bio", data: description, icon: <DescriptionIcon /> },
    { type: "Location", data: location, icon: <LocationIcon /> },
    { type: "Company", data: company, icon: <CompanyIcon /> },
    { type: "GitHub", data: gitHub, icon: <LinkIcon /> },
  ];

  return (
    <Accordion type="single" collapsible className="container w-full pt-40">
      <AccordionItem value="item-1 ">
        <AccordionTrigger className="text-secondDark text-xl font-semibold no-underline hover:no-underline">
          <SettingsGradientIcon />
          <span className="mr-auto pl-2">Account Settings</span>
        </AccordionTrigger>
        <Settings dataArr={accountSettings} type="account" />
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-secondDark text-xl font-semibold no-underline hover:no-underline">
          <SettingsGradientIcon />
          <span className="mr-auto pl-2">Profile Settings</span>
        </AccordionTrigger>
        <Settings dataArr={profileSettings} type="profile" />
      </AccordionItem>
    </Accordion>
  );
}
