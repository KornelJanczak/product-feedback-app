import UserIcon from "@/public/icons/user";
import EmailIcon from "@/public/icons/email";

interface informationData {
  userName: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
}

export default function setAccountInformation({
  userName,
  firstName,
  lastName,
  email,
}: informationData): AccountInformation[] {
  const accountInformation: AccountInformation[] = [
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

  return accountInformation;
}
