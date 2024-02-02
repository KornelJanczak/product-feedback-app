import getCurrentUser from "@/lib/get-current-user";
import { Suspense } from "react";
import FriendsContainer from "../../_components/friends-container";
import NoResult from "@/components/no-result";
import invitedUsers from "@/lib/invited-users";

async function getUsers(userName: string) {
  try {
    const currentUser = await getCurrentUser();

    const userExist = await prisma?.user.findUnique({
      where: {
        id: currentUser.id,
      },
    });

    if (!currentUser || !userExist) return [];

    let users;

    if (!userName)
      users = await prisma?.user.findMany({
        where: {
          NOT: {
            id: currentUser.id,
          },
        },
      });
    else
      users = await prisma?.user.findMany({
        where: {
          userName,
        },
      });

    const checkedUsers = invitedUsers(users as Friend[], currentUser);

    return checkedUsers;
  } catch {
    return [];
  }
}

export default async function FriendsPage({
  searchParams,
}: {
  searchParams: string;
}) {
  const searchValues: string[] = Object.values(searchParams);
  const users = await getUsers(searchValues[0]);

  if (users!.length === 0)
    return (
      <NoResult
        title="There is no users."
        description="The user with this name has not been found. Please provide the correct username and try again."
      />
    );

  if (users!.length > 0)
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <FriendsContainer users={users as Friend[]} />
      </Suspense>
    );
}
