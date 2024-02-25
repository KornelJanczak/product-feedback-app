import GroupOfPeopleIcon from "@/public/icons/group-of-people";
import DescriptionIcon from "@/public/icons/description";
import LocationIcon from "@/public/icons/location";
import CompanyIcon from "@/public/icons/company";
import LinkIcon from "@/public/icons/link";

interface informationData {
  description?: null | string;
  company?: null | string;
  location?: null | string;
  preferRole?: null | string;
  gitHub?: null | string;
}

export default function setProfileInformation({
  preferRole,
  description,
  location,
  company,
  gitHub,
}: informationData): ProfileInformation[] {
  const profileInformation: ProfileInformation[] = [
    {
      type: "Prefer Role",
      data: preferRole,
      icon: <GroupOfPeopleIcon />,
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

  return profileInformation;
}
