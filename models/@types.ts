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

type UserProfile = {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: null | string;
  createDate: Date;
  updateDate: Date;
  profile: {
    userId: string;
    bgImage: null | string;
    description: null | string;
    company: null | string;
    location: null | string;
    preferRole: null | string;
    gitHub: null | string;
  };
};

type settingsAccount = "userName" | "firstName" | "lastName" | "email";

type settingsProfile =
  | "preferRole"
  | "description"
  | "company"
  | "location"
  | "gitHub";

type settingsName = settingsAccount | settingsProfile;

type settings = {
  type: string;
  data: string | null;
  icon: React.ReactNode;
  name: settingsAccount;
}[];



