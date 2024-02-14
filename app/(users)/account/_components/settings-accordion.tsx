"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SettingsGradientIcon from "@/public/icons/settings-gradient";
import UserIcon from "@/public/icons/user";
import EmailIcon from "@/public/icons/email";
import Settings from "./settings-content";
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
    { type: "User name", data: userName, icon: <UserIcon />, name: "userName" },
    {
      type: "First name",
      data: firstName,
      icon: <UserIcon />,
      name: "firstName",
    },
    {
      type: "Last name",
      data: lastName,
      icon: <UserIcon />,
      name: "lastName",
    },
    { type: "Email", data: email, icon: <EmailIcon />, name: "email" },
  ];

  const profileSettings = [
    {
      type: "Prefer Role",
      data: preferRole,
      icon: <PreferRoleIcon />,
      name: "preferRole",
    },
    {
      type: "Bio",
      data: description,
      icon: <DescriptionIcon />,
      name: "description",
    },
    {
      type: "Location",
      data: location,
      icon: <LocationIcon />,
      name: "location",
    },
    { type: "Company", data: company, icon: <CompanyIcon />, name: "company" },
    { type: "GitHub", data: gitHub, icon: <LinkIcon />, name: "gitHub" },
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
