interface Friend {
  id: string;
  userName: string;
  image?: string;
  friendRequestExist?: boolean;
  existingInvitation?: boolean;
}

interface User {
  email: string;
  name: string;
  id: string;
}
