import getCurrentUser from "@/lib/user/get-current-user";
import { Suspense } from "react";
import FriendsContainer from "../../_components/friends-container";
import NoResult from "@/components/no-result";
import getInvitedUsers from "@/lib/user/get-invited-users";
import getUserFriends from "@/lib/user/get-user-friends";
import getRecivedInvitations from "@/lib/user/get-recived-invitations";
import getSuggestionUsers from "@/lib/user/get-sugesstion-users";
import SkeletonCard from "./_components/skeleton";
import { redirect } from "next/navigation";

async function getUsers(currentUser: User, userName: string, param: string) {
  try {
    // Param handler choose function for each param type
    const paramHandlers: {
      [key: string]: (currentUser: User, userName: string) => any;
    } = {
      // Return all users from db with the exception of current user
      sugesstions: async (currentUser, userName) =>
        await getSuggestionUsers(currentUser, userName),

      // Filter sended invitations
      "sended-invitations": async (currentUser, userName) =>
        await getInvitedUsers(currentUser, userName),

      // Show only user friends
      "your-friends": async (currentUser, userName) =>
        await getUserFriends(currentUser, userName),

      // Return Recived invitations based on param function send prisma query
      "recived-invitations": async (currentUser, userName) =>
        await getRecivedInvitations(currentUser, userName),
    };

    // Execute paramHandlers based on param value
    if (paramHandlers[param])
      return paramHandlers[param](currentUser, userName);

    return [];
  } catch {
    return [];
  }
}

export default async function FriendsPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: string;
}) {
  const [param] = Object.values(params);
  const [searchValue] = Object.values(searchParams);

  const currentUser = await getCurrentUser();

  if (!currentUser) redirect("/login");

  const users = await getUsers(currentUser, searchValue, param as string);

  if (users.length > 0)
    return (
      <Suspense fallback={<SkeletonCard length={users.length} />}>
        <FriendsContainer users={users as Friend[]} />
      </Suspense>
    );

  if (users.length === 0)
    return (
      <NoResult
        title="There is no users."
        description="The user with this name has not been found. Please provide the correct username and try again."
      />
    );
}
