import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import ProfileAvatar from "../_components/profile-avatar";
import prisma from "@/lib/db";
import { Settings } from "./_components/settings-accordion";
import { Suspense } from "react";
import setAccountInformation from "../_components/set-account-information";
import setProfileInformation from "../_components/set-profile-information";
import Background from "./_components/background";
import { ImageBackgroundSkeleton } from "@/components/image-uploading/image-background-skeleton";
import Friends from "./_components/friends";

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
      createDate: user.createDate,
      profile: user.profile,
    };

    return sanitizedUser;
  } catch {
    return null;
  }
}

export default async function AccountPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) redirect("/login");

  const userProfile: IUserAccountView | null = await getUserProfile(
    currentUser
  );

  if (!userProfile) throw new Error("User profile load error!");

  const {
    profile,
    userName,
    lastName,
    firstName,
    image,
    email,
    id,
    createDate,
  } = userProfile;

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

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatedDate = createDate.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="relative">
      <Suspense fallback={<ImageBackgroundSkeleton />}>
        <Background image={profile?.bgImage} />
      </Suspense>
      <ProfileAvatar
        username={userName}
        image={image}
        lastName={lastName}
        firstName={firstName}
        userId={id}
        viewType="accountView"
      >
        <span className="text-secondDark font-semibold text-base pt-4  text-center">
          You are with us since {formatedDate}!
        </span>
      </ProfileAvatar>
      <div className="lg:mt-32 md:rounded xl:flex xl:gap-x-10 xl:pt-4">
        <Settings
          accountSettings={accountSettings}
          profileSettings={profileSettings}
        />

        <Friends currentUser={currentUser} />
      </div>
    </div>
  );
}
