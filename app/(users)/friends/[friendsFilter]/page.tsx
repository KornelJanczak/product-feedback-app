import getCurrentUser from "@/lib/get-current-user";
import { Suspense } from "react";
import FriendsContainer from "../../_components/friends-container";
import NoResult from "@/components/no-result";
import invitedUsers from "@/lib/invited-users";

async function getUsers(userName: string, param: string) {
  try {
    const currentUser = await getCurrentUser();

    let users;

    users = await prisma?.user.findMany({
      where: {
        NOT: {
          id: currentUser.id,
        },
        userName: userName || undefined,
      },
      include: {
        friendRequest: {
          where: {
            friendRequestId: currentUser.id,
          },
        },
      },
    });

    // Checking if users have been invited to friends by current user
    const checkedUsers = await invitedUsers(
      users as Friend[],
      currentUser as User
    );

    // Param handler choose function for each param type
    const paramHandlers: {
      [key: string]: () => any;
    } = {
      // Return all users from db with the exception of current user
      suggestions: () => checkedUsers,

      // Filter sended invitations
      "sended-invitations": () =>
        checkedUsers.filter((user) => user.friendRequestExist === true),

      // Return Recived invitations based on param function send prisma query
      "recived-invitations": async () => {
        const friendInvitationsSenders = await prisma?.user.findMany({
          where: {
            friendRequestOf: {
              some: {
                friendRequestId: currentUser.id,
              },
            },
            userName: userName || undefined,
          },
        });

        return friendInvitationsSenders;
      },
    };

    // Execute paramHandlers based on param value
    if (paramHandlers[param]) return paramHandlers[param]();

    return checkedUsers;
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
