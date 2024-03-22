import { Skeleton } from "@/components/ui/skeleton";
import setAccountInformation from "../../_components/set-account-information";
import setProfileInformation from "../../_components/set-profile-information";
import { SettingsAcordion } from "./settings-accordion";
import { Separator } from "@/components/ui/separator";

interface ISettings {
  accountValue: {
    userName: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
  };
  profileValue: {
    description?: null | string;
    company?: null | string;
    location?: null | string;
    preferRole?: null | string;
    gitHub?: null | string;
  };
}

export default async function Settings({
  accountValue,
  profileValue,
}: ISettings) {
  const accountSettings = setAccountInformation(accountValue);
  const profileSettings: ProfileInformation[] =
    setProfileInformation(profileValue);

  return (
    <SettingsAcordion
      accountSettings={accountSettings}
      profileSettings={profileSettings}
    />
  );
}

export const SettingsSkeleton = () => {
  return (
    <div className="w-full p-5 mt-44 md:mt-40 lg:order-1 lg:p-4 xl:w-7/12 xl:mt-14 xl:p-2">
      <div className="py-4">
        <Skeleton className="h-10 w-full rounded bg-skeletonTheme" />
      </div>
      <Separator />
      <div className="py-4">
        <Skeleton className="h-10 w-full rounded bg-skeletonTheme" />
      </div>
      <Separator />
    </div>
  );
};
