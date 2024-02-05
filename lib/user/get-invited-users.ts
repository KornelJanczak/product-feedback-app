import prisma from "@/lib/db";
export default async function getInvitedUsers(
  currentUser: User,
  userName: string
) {
  try {
    const requests = await prisma.user.findMany({
      where: {
        friendRequest: {
          some: {
            friendRequestOfId: currentUser.id,
          },
        },
        userName: userName || undefined,
      },
    });

    const invitedUsers = requests.map((user) => {
      return {
        ...user,
        friendRequestExist: true,
      };
    });

    return invitedUsers;
  } catch {
    throw new Error("Something went wrong!");
  }
}
