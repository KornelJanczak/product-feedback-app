import PreferRoleIcon from "@/public/icons/prefer-role";
import DescriptionIcon from "@/public/icons/description";
import LocationIcon from "@/public/icons/location";
import CompanyIcon from "@/public/icons/company";
import LinkIcon from "@/public/icons/link";

interface IProfile {
  description?: null | string;
  company?: null | string;
  location?: null | string;
  preferRole?: null | string;
  gitHub?: null | string;
}

export default function setProfileSettings({
  preferRole,
  description,
  location,
  company,
  gitHub,
}: IProfile) {
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
    {
      type: "Company",
      data: company,
      icon: <CompanyIcon />,
      name: "company",
    },
    {
      type: "GitHub",
      data: gitHub,
      icon: <LinkIcon />,
      name: "gitHub",
    },
  ];

  return profileSettings;
}
