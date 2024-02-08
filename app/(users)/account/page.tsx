import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import UserAvatar from "./_components/user-avatar";
import prisma from "@/lib/db";
import ProfileBackground from "./_components/background";

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

  const userProfile = (await getUserProfile(
    currentUser as User
  )) as UserProfile;

  console.log(userProfile);

  if (!currentUser) redirect("/login");

  return (
    // <section className="container flex justify-center items-center pt-8">
    <div className="relative">
      <ProfileBackground image={userProfile.bgImage} />
      <UserAvatar
        username={currentUser.name}
        email={currentUser.email}
        lastName={currentUser.lastName}
        firstName={currentUser.firstName}
      />
    </div>
    // </section>
  );
}
