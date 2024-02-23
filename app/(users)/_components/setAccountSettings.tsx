import UserIcon from "@/public/icons/user";
import EmailIcon from "@/public/icons/email";

interface IAccountSettings {
  userName: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
}

export default function setAccountSettings({
  userName,
  firstName,
  lastName,
  email,
}: IAccountSettings) {
  const accountSettings = [
    {
      type: "User name",
      data: userName,
      icon: <UserIcon />,
      name: "userName",
    },
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
    {
      type: "Email",
      data: email,
      icon: <EmailIcon />,
      name: "email",
    },
  ];

  return accountSettings;
}
