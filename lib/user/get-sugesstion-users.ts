export default async function getSuggestionUsers(
  currentUser: User,
  userName: string
) {
  try {
    const friends = await prisma?.friend.findMany({
      where: {
        friendOfId: currentUser.id,
      },
      select: {
        friendId: true,
      },
    });

    const friendIds = friends!.map((friend) => friend.friendId);

    const users = await prisma?.user.findMany({
      where: {
        NOT: {
          id: {
            in: [currentUser.id, ...friendIds],
          },
        },
        userName: userName || undefined,
      },
    });

    const requests = await prisma?.friendRequest.findMany({
      where: {
        friendRequestOfId: currentUser.id,
      },
    });

    const requestsSet = new Set(
      requests?.map((request) => request.friendRequestId)
    );

    const invitedUsers = users?.map((user) => {
      const friendRequestExist = requestsSet.has(user.id);
      return { ...user, friendRequestExist };
    });

    return invitedUsers;
  } catch {
    throw new Error("Something went wrong!");
  }
}
