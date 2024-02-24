interface Friend {
  id: string;
  userName: string;
  lastName?: string;
  firstName?: string;
  image?: string;
  friendRequestExist?: boolean;
  existingInvitation?: boolean;
  userFriend?: boolean;
}

interface User {
  email: string;
  name: string;
  id: string;
}

interface UserProfile {
  id: string;
  userName: string;
  lastName: string | null;
  firstName: string | null;
  image: string | null;
  email: string;
  profile: {
    userId: string;
    bgImage: null | string;
    description: null | string;
    company: null | string;
    location: null | string;
    preferRole: null | string;
    gitHub: null | string;
  } | null;
}

interface IUserAccountView extends UserProfile {
  createDate: Date;
}

interface IUserProfileView extends UserProfile {
  friendRequestExist?: boolean;
  existingInvitation?: boolean;
  userFriend?: boolean;
  createDate: Date;
}

type settingsAccount = "userName" | "firstName" | "lastName" | "email";

type settingsProfile =
  | "preferRole"
  | "description"
  | "company"
  | "location"
  | "gitHub";

interface settings {
  type: string;
  data?: string | null;
  icon: React.ReactNode;
}

interface AccountInformation extends settings {
  name: settingsAccount;
}

interface ProfileInformation extends settings {
  name: settingsProfile;
}
