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
  lastName?: string;
  email: string;
  firstName?: string;
  image?: string;
  createDate: Date;
  updateDate: Date;
  profileId?: string;
  profile?: string;
  bgImage?: string;
}
