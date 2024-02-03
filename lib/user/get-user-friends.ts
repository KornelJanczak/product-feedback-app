export default async function getUserFriends(
  currentUser: User,
  userName: string
) {
  const userFriends = await prisma?.user.findMany({
    where: {
      friends: {
        some: {
          friendOfId: currentUser.id,
        },
      },
      userName: userName || undefined,
    },
  });

  // Change Arr structure
  const friendsArr = userFriends?.map((friend) => {
    return {
      id: friend.id,
      userName: friend.userName,
      email: friend.email,
      userFriend: true,
    };
  });

  return friendsArr;
}
