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
import FriendsContainer from "./_components/profile-friends-container";
import FindBar from "@/components/find-bar";
import { Suspense } from "react";
import getUserFriends from "@/lib/user/get-user-friends";
import SkeletonCard from "../friends/[friendsFilter]/_components/skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import FriendCard from "./_components/profile-friend-card";
import Link from "next/link";

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
          <Skeleton className="w-full h-56 rounded-none bg-[#0000002c]" />
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
      <div className="xl:flex xl:pt-40">
        <Settings
          accountSettings={accountSettings as settings}
          profileSettings={profileSettings as settings}
        />

        <div className="p-4 mt-14 xl:pt-0 bg-basicWhite">
          <div className="flex items-center justify-between pb-6 pt-4">
            <h2 className="text-3xl font-medium text-dark">Your friends</h2>
            <Link
              href={"/friends/your-friends"}
              className="text-lg text-pink text-semibold"
            >
              Show more friends
            </Link>
          </div>
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
