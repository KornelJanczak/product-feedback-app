export default async function getInvitedUsers(
  users: Friend[],
  currentUser: User
) {
  try {
    const requests = await prisma?.friendRequest.findMany({
      where: {
        friendRequestOfId: currentUser.id,
      },
    });

    const invitedUsers = users?.map((user) => {
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

    return invitedUsers;
  } catch {
    throw new Error("Something went wrong!");
  }
}
