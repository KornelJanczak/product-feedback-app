export default async function invitedUsers(users: Friend[], currentUser: User) {
  try {
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
    throw new Error("Something went wrong!");
  }
}
