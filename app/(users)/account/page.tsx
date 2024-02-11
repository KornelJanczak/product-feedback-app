import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import UserAvatar from "./_components/user-avatar";
import prisma from "@/lib/db";
import ProfileBackground from "./_components/profile-background";

async function getUserProfile(currentUser: User) {
  const userProfile = await prisma.user.findUnique({
    where: {
      id: currentUser.id,
    },
    include: {
      profile: true,
    },
  });

  if (!userProfile) return {};

  return userProfile;
}

export default async function AccountPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) redirect("/login");

  const { profile, userName, lastName, firstName, image } =
    (await getUserProfile(currentUser as User)) as UserProfile;

    console.log(profile);
    

  return (
    <div className="relative">
      <ProfileBackground image={profile.bgImage as string} />
      <UserAvatar
        username={userName}
        image={image as string}
        lastName={lastName}
        firstName={firstName}
      />
    </div>
  );
}
