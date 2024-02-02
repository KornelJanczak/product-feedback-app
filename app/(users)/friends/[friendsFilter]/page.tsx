import getCurrentUser from "@/lib/get-current-user";
import { Suspense } from "react";
import FriendsContainer from "../../_components/friends-container";
import NoResult from "@/components/no-result";
import invitedUsers from "@/lib/invited-users";

async function getUsers(userName: string, param: string) {
  try {
    const currentUser = await getCurrentUser();

    let users;

    const userExist = await prisma?.user.findUnique({
      where: {
        id: currentUser.id,
      },
    });

    if (!currentUser || !userExist) return [];

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

    const checkedUsers = await invitedUsers(
      users as Friend[],
      currentUser as User
    );

    switch (param) {
      case "sugesstions":
        return checkedUsers;
      case "sended-invitations":
        const userWitInv = checkedUsers.filter(
          (user) => user.friendRequestExist === true
        );
        return userWitInv;
    }

    return checkedUsers;
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
  const param: string | undefined | unknown = Object.values(params)[0];
  const searchValues: string[] = Object.values(searchParams);
  const users = await getUsers(searchValues[0], param as string);

  if (users?.length === 0)
    return (
      <NoResult
        title="There is no users."
        description="The user with this name has not been found. Please provide the correct username and try again."
      />
    );

  if (users?.length > 0)
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <FriendsContainer users={users as Friend[]} />
      </Suspense>
    );
}
