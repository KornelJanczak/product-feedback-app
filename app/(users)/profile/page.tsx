import NoResult from "@/components/no-result";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import Link from "next/link";
import _ from "lodash";
import { redirect } from "next/navigation";
import ProfileBackground from "../_components/background";
import UserAvatar from "../_components/user-avatar";
import ActionButton from "../_components/action-button";
import Information from "./_components/information";

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

  if (!_.isEmpty(userProfile) && searchParams.id) {
    const {
      id,
      userName,
      image,
      lastName,
      firstName,
      friendRequestExist,
      existingInvitation,
      userFriend,
      profile,
      createDate,
    } = userProfile;

    return (
      <div className="relative">
        <ProfileBackground image={profile?.bgImage} viewType="profileView" />
        <div className="">
          <UserAvatar
            username={userName}
            image={image}
            lastName={lastName}
            firstName={firstName}
            viewType="profileView"
          >
            <ActionButton
              userId={id}
              friendRequestExist={friendRequestExist}
              existingInvitation={existingInvitation}
              userFriend={userFriend}
              className="w-2/5 mt-2 sm:w-2/7"
              existingInvitationBtnClassName="flex-row justify-center"
              userName={userName}
            />
          </UserAvatar>
          <Information userName={userName} createDate={createDate} />
        </div>
      </div>
    );
  }
}
