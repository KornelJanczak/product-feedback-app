import getCurrentUser from "@/lib/get-current-user";
import FindBar from "./_components/find-bar";
import { any } from "zod";

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

    return users;
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
  
  return (
    <>
      <FindBar />
    </>
  );
}
