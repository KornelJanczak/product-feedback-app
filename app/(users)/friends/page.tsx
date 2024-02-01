import getCurrentUser from "@/lib/get-current-user";
import { Suspense } from "react";
import FriendCard from "@/app/_components/friend-card";

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

    const requests = await prisma?.friendRequest.findMany({
      where: {
        friendRequestOfId: currentUser.id,
      },
    });

    const checkedUsers = users?.map((user) => {
      const isExist = requests?.find(
        (request) => request.friendRequestId === user.id
      );
      if (isExist)
        return {
          ...user,
          friendRequestExist: true,
        };

      return { ...user, friendRequestExist: false };
    });

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

  console.log(users);

  if (!users?.length) <section className="container pt-2"></section>;
  if (users?.length)
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <section className="container pt-2">
          <ul className="flex flex-col items-center justify-center gap-2 p-2">
            {users!.map(({ id, userName, friendRequestExist }) => (
              <FriendCard
                userName={userName}
                id={id}
                friendRequestExist={friendRequestExist}
              />
            ))}
          </ul>
        </section>
      </Suspense>
    );
}
