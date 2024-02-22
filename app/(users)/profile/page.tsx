import NoResult from "@/components/no-result";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import Link from "next/link";
import _ from "lodash";
import { redirect } from "next/navigation";
import ProfileBackground from "../_components/background";
import UserAvatar from "../_components/profile-avatar";
import ActionButton from "../_components/action-button";

async function getUserProfile(profileUserId: string, currentUserId: string) {
  try {
    if (!profileUserId || !currentUserId) return null;

    const userWithProfile = await prisma.user.findFirst({
      where: {
        id: profileUserId,
      },
      include: {
        profile: true,
        friends: true,
        friendRequest: true,
        friendRequestOf: true,
      },
    });

    if (!userWithProfile) return null;

    const sendedFriendRequest = userWithProfile.friendRequest.reduce(
      (exist, request) => exist || request.friendRequestOfId === currentUserId,
      false
    );

    const recivedFriendRequest = userWithProfile.friendRequestOf.reduce(
      (exist, request) => exist || request.friendRequestId === currentUserId,
      false
    );

    const isFriend = userWithProfile.friends.reduce(
      (exist, request) => exist || request.friendOfId === currentUserId,
      false
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

  if (!currentUser) redirect("/login");

  const userProfile: IUserProfileView | null = await getUserProfile(
    searchParams.id,
    currentUser.id
  );

  console.log(userProfile);

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

  if (!_.isEmpty(userProfile) && searchParams.id)
    return (
      <div className="relative">
        <ProfileBackground
          image={userProfile.profile?.bgImage}
          viewType="profileView"
        />
        <div>
          <UserAvatar
            username={userProfile.userName}
            image={userProfile.image}
            lastName={userProfile.lastName}
            firstName={userProfile.firstName}
            viewType="profileView"
          />
          <ActionButton
            userId={searchParams.id}
            friendRequestExist={userProfile.friendRequestExist}
            existingInvitation={userProfile.existingInvitation}
            userFriend={userProfile.userFriend}
          />
        </div>
      </div>
    );
}
