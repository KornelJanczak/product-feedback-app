import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import UserAvatar from "../_components/user-avatar";
import prisma from "@/lib/db";
import ProfileBackground, {
  ProfileBackgroundSkeleton,
} from "../_components/background";
import { Settings } from "./_components/settings-accordion";
import FriendsContainer from "./_components/friends-container";
import { Suspense } from "react";
import getUserFriends from "@/lib/user/get-user-friends";
import FriendCard from "./_components/friend-card";
import FriendHeader from "./_components/friend-header";
import setAccountInformation from "../_components/set-account-information";
import setProfileInformation from "../_components/set-profile-information";
import NoFriendResult from "./_components/no-friend-result";

async function getUserProfile(currentUser: User) {
  try {
    if (!currentUser || !currentUser.id) return null;

    const user = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
      include: {
        profile: true,
        friends: true,
      },
    });

    if (!user) return null;

    const sanitizedUser: IUserAccountView = {
      id: user.id,
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.image,
      email: user.email,
      profile: user.profile,
    };

    return sanitizedUser;
  } catch {
    return null;
  }
}

export default async function AccountPage({
  searchParams,
}: {
  searchParams: string;
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) redirect("/login");

  const userProfile: IUserAccountView | null = await getUserProfile(
    currentUser
  );

  if (!userProfile) throw new Error("User profile load error!");

  const { profile, userName, lastName, firstName, image, email, id } =
    userProfile;

  const accountValue = {
    userName,
    lastName,
    firstName,
    email,
  };

  const profileValue = {
    preferRole: profile?.preferRole,
    description: profile?.description,
    location: profile?.location,
    company: profile?.company,
    gitHub: profile?.gitHub,
  };

  const accountSettings = setAccountInformation(accountValue);
  const profileSettings: ProfileInformation[] =
    setProfileInformation(profileValue);

  const [searchValue] = Object.values(searchParams);
  const userFriends = await getUserFriends(currentUser, searchValue);
  const slicedFriends = userFriends.slice(0, 9);

  const userHasFriends = userFriends.length > 0;

  return (
    <div className="relative">
      <Suspense fallback={<ProfileBackgroundSkeleton />}>
        <ProfileBackground image={profile?.bgImage} viewType="accountView" />
      </Suspense>
      <UserAvatar
        username={userName}
        image={image}
        lastName={lastName}
        firstName={firstName}
        userId={id}
        viewType="accountView"
      />
      <div className="lg:mt-32 md:rounded xl:flex xl:gap-x-10">
        <Settings
          accountSettings={accountSettings}
          profileSettings={profileSettings}
        />
        <div
          className={`p-5 mt-5 md:rounded lg:order-1 lg:p-4 ${
            userFriends ? "xl:w-7/12" : "xl:w-5/12"
          }  xl:p-2`}
        >
          <FriendHeader numberOfFriends={userFriends.length} />
          {userHasFriends && (
            <FriendsContainer>
              {slicedFriends.map(
                ({ id, userName, firstName, lastName, image }) => (
                  <FriendCard
                    key={id}
                    id={id}
                    userName={userName}
                    firstName={firstName}
                    lastName={lastName}
                    image={image}
                  />
                )
              )}
            </FriendsContainer>
          )}
          {!userHasFriends && <NoFriendResult />}
        </div>
      </div>
    </div>
  );
}
