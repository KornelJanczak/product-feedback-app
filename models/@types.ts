interface IFriendOfButton {
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
  id: string;
  email: string;
  name: string;
}

interface ICurrentUser {
  id: string;
  email: string;
  lastName?: string;
  firstName?: string;
  name: string;
  image?: string | null;
}

interface IFriend {
  id: string;
  userName: string;
  image: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string;
  userFriend: boolean;
}

type Profile = {
  userId: string;
  bgImage: null | string;
  description: null | string;
  company: null | string;
  location: null | string;
  preferRole: null | string;
  gitHub: null | string;
} | null;

interface UserProfile {
  id: string;
  userName: string;
  lastName: string | null;
  firstName: string | null;
  image: string | null;
  email: string;
  profile: Profile;
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

interface IIcon {
  stroke?: string;
  width?: number;
  height?: number;
}

interface IFeedbackSectionUser {
  image?: string | null;
  id: string;
  userName: string;
  lastName?: string | null;
  firstName?: string | null;
  email?: string | null;
}

interface IFeedbackFormValues {
  name: "title" | "detail" | "category" | "status";
  label: string;
  description: string;
}

interface IFeedbackFormTagsValues extends IFeedbackFormValues {
  selectValues: string[];
  selectPlaceholder: string;
}
