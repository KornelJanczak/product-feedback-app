import getCurrentUser from "@/lib/user/get-current-user";
import { Suspense } from "react";
import FriendsContainer from "../../_components/friends-container";
import NoResult from "@/components/no-result";
import getInvitedUsers from "@/lib/user/get-invited-users";
import getUserFriends from "@/lib/user/get-user-friends";
import getRecivedInvitations from "@/lib/user/get-recived-invitations";
import getSuggestionUsers from "@/lib/user/get-sugesstion-users";

async function getUsers(userName: string, param: string) {
  try {
    const currentUser = await getCurrentUser();

    // Param handler choose function for each param type
    const paramHandlers: {
      [key: string]: () => any;
    } = {
      // Return all users from db with the exception of current user
      sugesstions: async () => await getSuggestionUsers(currentUser, userName),

      // Filter sended invitations
      "sended-invitations": async () =>
        await getInvitedUsers(currentUser, userName),

      // Show only user friends
      "your-friends": async () => await getUserFriends(currentUser, userName),

      // Return Recived invitations based on param function send prisma query
      "recived-invitations": async () =>
        await getRecivedInvitations(currentUser, userName),
    };

    // Execute paramHandlers based on param value
    if (paramHandlers[param]) return paramHandlers[param]();

    return [];
  } catch {
    throw new Error("Failed to get users. Please try again later.");
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
  const users = await getUsers(searchValue, param as string);

  if (users.length === 0)
    return (
      <NoResult
        title="There is no users."
        description="The user with this name has not been found. Please provide the correct username and try again."
      />
    );

  if (users.length > 0)
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <FriendsContainer users={users as Friend[]} />
      </Suspense>
    );
}
