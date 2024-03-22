import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import ProfileAvatar, {
  ProfileAvatarSkeleton,
} from "../_components/profile-avatar";
import prisma from "@/lib/db";
import Settings from "./_components/settings";
import { Suspense } from "react";
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
      select: {
        id: true,
        userName: true,
        firstName: true,
        lastName: true,
        image: true,
        email: true,
        createDate: true,
        profile: {
          select: {
            preferRole: true,
            description: true,
            location: true,
            company: true,
            gitHub: true,
            bgImage: true,
          },
        },
      },
    });

    if (!user) return null;

    return user;
  } catch {
    return null;
  }
}

export default async function AccountPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const userProfile = await getUserProfile(currentUser);

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

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatedDate = createDate.toLocaleDateString("en-US", dateOptions);

  await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <div className="relative">
      <Suspense fallback={<ImageBackgroundSkeleton />}>
        <Background image={profile?.bgImage} />
      </Suspense>
      <Suspense fallback={<ProfileAvatarSkeleton />}>
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
      </Suspense>
      <div className="lg:mt-32 md:rounded xl:flex xl:gap-x-10 xl:pt-4">
        <Suspense fallback={<p>Loading...</p>}>
          <Settings profileValue={profileValue} accountValue={accountValue} />
        </Suspense>
        <Friends currentUser={currentUser} />
      </div>
    </div>
  );
}
