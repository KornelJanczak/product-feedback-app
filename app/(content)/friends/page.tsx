import getCurrentUser from "@/lib/get-current-user";

async function getUsers() {
  try {
    const currentUser = await getCurrentUser();

    const userExist = await prisma?.user.findUnique({
      where: {
        id: currentUser.id,
      },
    });

    if (!currentUser || !userExist) return [];

    const users = await prisma?.user.findMany({
      where: {
        NOT: {
          id: currentUser.id,
        },
      },
    });

    return users;
  } catch {
    return [];
  }
}

export default async function FriendsPage() {
  const users = await getUsers();

  return <div></div>;
}
