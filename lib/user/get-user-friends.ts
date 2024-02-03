export default async function getUserFriends(currentUser: User) {
  const userFriends = await prisma?.friend.findMany({
    where: {
      friendOfId: currentUser.id,
    },
    select: {
      friends: {
        select: {
          id: true,
          userName: true,
          email: true,
        },
      },
    },
  });

  // Change Arr structure
  const friendsArr = userFriends?.map(({ friends }) => {
    return {
      id: friends.id,
      userName: friends.userName,
      email: friends.email,
      userFriend: true,
    };
  });

  return friendsArr;
}
