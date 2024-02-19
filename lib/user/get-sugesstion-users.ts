import prisma from "@/lib/db";
export default async function getSuggestionUsers(
  currentUser: User,
  userName: string
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
      include: {
        friends: true,
        friendRequest: true,
        friendRequestOf: true,
      },
    });

    const friendIds = user!.friends!.map((friend) => friend.friendOfId);
    const userWithInvIds = user!.friendRequest.map(
      (user) => user.friendRequestOfId
    );

    const users = await prisma.user.findMany({
      where: {
        NOT: {
          id: {
            in: [currentUser.id, ...friendIds, ...userWithInvIds],
          },
        },
        userName: userName || undefined,
      },
    });

    const requestsSet = Array.from(
      new Set(user?.friendRequestOf.map((request) => request.friendRequestId))
    );

    const suggestionUsers = users.map((user) => {
      const friendRequestExist = requestsSet.includes(user.id);
      return { ...user, friendRequestExist };
    });

    return suggestionUsers;
  } catch {
    throw new Error(
      "Failed to retrieve suggestion users. Please try again later!"
    );
  }
}
