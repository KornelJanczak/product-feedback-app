import setAccountInformation from "../../_components/set-account-information";
import setProfileInformation from "../../_components/set-profile-information";
import { SettingsAcordion } from "./settings-accordion";

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
