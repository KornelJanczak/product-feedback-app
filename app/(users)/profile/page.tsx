import NoResult from "@/components/no-result";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import Link from "next/link";
import _ from "lodash";
import { redirect } from "next/navigation";
import ProfileBackground, {
  ProfileBackgroundSkeleton,
} from "../_components/background";
import ProfileAvatar from "../_components/profile-avatar";
import ActionButton from "../_components/action-button";
import setProfileInformation from "../_components/set-profile-information";
import MainInformation from "./_components/main-information";
import { Suspense } from "react";

async function getUserProfile(profileUserId: string, currentUserId: string) {
  try {
    if (!profileUserId || !currentUserId) return null;

    const userWithProfile = await prisma.user.findFirst({
      where: {
        id: profileUserId,
      },
      select: {
        id: true,
        userName: true,
        firstName: true,
        lastName: true,
        createDate: true,
        image: true,
        email: true,
        profile: true,
        friends: {
          select: {
            friendOfId: true,
          },
        },
        friendRequest: {
          select: {
            friendRequestOfId: true,
          },
        },
        friendRequestOf: {
          select: {
            friendRequestId: true,
          },
        },
      },
    });

    if (!userWithProfile) return null;

    const sendedFriendRequest = userWithProfile.friendRequest.some(
      (request) => request.friendRequestOfId === currentUserId
    );

    const recivedFriendRequest = userWithProfile.friendRequestOf.some(
      (request) => request.friendRequestId === currentUserId
    );

    const isFriend = userWithProfile.friends.some(
      (request) => request.friendOfId === currentUserId
    );

    const userProfile: IUserProfileView = {
      id: userWithProfile.id,
      email: userWithProfile.email,
      userName: userWithProfile.userName,
      firstName: userWithProfile.firstName,
      lastName: userWithProfile.lastName,
      createDate: userWithProfile.createDate,
      image: userWithProfile.image,
      profile: userWithProfile.profile,
      friendRequestExist: sendedFriendRequest,
      existingInvitation: recivedFriendRequest,
      userFriend: isFriend,
    };

    return userProfile;
  } catch {
    return null;
  }
}

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const userProfile: IUserProfileView | null = await getUserProfile(
    searchParams.id,
    currentUser.id
  );

  if (!searchParams.id || _.isEmpty(userProfile))
    return (
      <div className="container relative h-screen w-full">
        <NoResult
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full"
          title="We don't find this profile!"
          description="The user profile could not be found. If you want to check other user profiles, please click below."
          button={
            <Link href={"/friends/your-friends"}>
              <Button className="bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300 mt-2">
                Show friends profile!
              </Button>
            </Link>
          }
        />
      </div>
    );

  if (!_.isEmpty(userProfile) && searchParams.id) {
    const {
      id,
      userName,
      email,
      image,
      lastName,
      firstName,
      friendRequestExist,
      existingInvitation,
      userFriend,
      profile,
      createDate,
    } = userProfile;

    const profileValue = {
      preferRole: profile?.preferRole,
      description: profile?.description,
      location: profile?.location,
      company: profile?.company,
      gitHub: profile?.gitHub,
    };

    const profileInformation: ProfileInformation[] =
      setProfileInformation(profileValue);

    const [preferRole, bio, location, company, gitHub] = profileInformation;

    return (
      <div className="relative">
        <Suspense fallback={<ProfileBackgroundSkeleton />}>
          <ProfileBackground image={profile?.bgImage} viewType="profileView" />
        </Suspense>
        <ProfileAvatar
          username={userName}
          image={image}
          lastName={lastName}
          firstName={firstName}
          viewType="profileView"
        >
          <ActionButton
            userId={id}
            currentUserId={currentUser.id}
            friendRequestExist={friendRequestExist}
            existingInvitation={existingInvitation}
            userFriend={userFriend}
            className="mt-2 max-w-44"
            existingInvitationBtnClassName="flex-row justify-center max-w-96"
            userName={userName}
          />
          <MainInformation
            bio={bio.data}
            location={location}
            gitHub={gitHub.data}
            email={email}
            userName={userName}
            createDate={createDate}
            preferRole={preferRole}
            company={company}
          />
        </ProfileAvatar>
      </div>
    );
  }
}
