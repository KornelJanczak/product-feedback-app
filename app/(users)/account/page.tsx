import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import UserAvatar from "./_components/profile-avatar";
import prisma from "@/lib/db";
import ProfileBackground from "./_components/background";
import { Settings } from "./_components/settings-accordion";
import UserIcon from "@/public/icons/user";
import EmailIcon from "@/public/icons/email";
import PreferRoleIcon from "@/public/icons/prefer-role";
import DescriptionIcon from "@/public/icons/description";
import LocationIcon from "@/public/icons/location";
import CompanyIcon from "@/public/icons/company";
import LinkIcon from "@/public/icons/link";
import FriendsContainer from "./_components/friends-container";
import { Suspense } from "react";
import getUserFriends from "@/lib/user/get-user-friends";
import { Skeleton } from "@/components/ui/skeleton";
import FriendCard from "./_components/friend-card";
import FriendHeader from "./_components/friend-header";
import MultiUploader from "./_components/uploader";
import ImageUpload from "./_components/chuj";

async function getUserProfile(currentUser: User) {
  const user = await prisma.user.findUnique({
    where: {
      id: currentUser.id,
    },
    include: {
      profile: true,
      friends: true,
    },
  });

  if (!user) return {};

  return user;
}

export default async function AccountPage({
  searchParams,
}: {
  searchParams: string;
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) redirect("/login");

  const { profile, userName, lastName, firstName, image, email } =
    (await getUserProfile(currentUser as User)) as UserProfile;

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

  const profileSettings = [
    {
      type: "Prefer Role",
      data: profile?.preferRole,
      icon: <PreferRoleIcon />,
      name: "preferRole",
    },
    {
      type: "Bio",
      data: profile?.description,
      icon: <DescriptionIcon />,
      name: "description",
    },
    {
      type: "Location",
      data: profile?.location,
      icon: <LocationIcon />,
      name: "location",
    },
    {
      type: "Company",
      data: profile?.company,
      icon: <CompanyIcon />,
      name: "company",
    },
    {
      type: "GitHub",
      data: profile?.gitHub,
      icon: <LinkIcon />,
      name: "gitHub",
    },
  ];
  const [searchValue] = Object.values(searchParams);
  const userFriends = (await getUserFriends(currentUser, searchValue)).slice(
    0,
    9
  );

  return (
    <div className="relative">
      <Suspense
        fallback={
          <Skeleton
            className="w-full h-56 rounded-none bg-[#0000002c]
           sm:h-72 lg:h-80 md:rounded-lg"
          />
        }
      >
        <ProfileBackground image={profile?.bgImage as string} />
      </Suspense>
      <UserAvatar
        username={userName}
        image={image as string}
        lastName={lastName}
        firstName={firstName}
      />
      <div className="lg:mt-32 md:rounded xl:flex xl:gap-x-10">
        <Settings
          accountSettings={accountSettings as settings}
          profileSettings={profileSettings as settings}
        />
        <MultiUploader />
        <ImageUpload />

        <div className="p-5 mt-5  bg-basicWhite md:rounded lg:order-1 lg:p-4 xl:w-5/12 xl:p-2">
          <FriendHeader />
          <FriendsContainer>
            {userFriends.map(({ id, userName, firstName, lastName, image }) => (
              <FriendCard
                key={id}
                id={id}
                userName={userName}
                firstName={firstName}
                lastName={lastName}
                image={image}
              />
            ))}
          </FriendsContainer>
        </div>
      </div>
    </div>
  );
}
