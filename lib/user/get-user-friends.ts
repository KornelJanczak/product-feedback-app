import prisma from "@/lib/db";

export default async function getUserFriends(
  currentUser: User,
  userName?: string
) {
  const userFriends = await prisma.user.findMany({
    where: {
      friends: {
        some: {
          friendOfId: currentUser.id,
        },
      },
      userName: { contains: userName ? userName : undefined },
    },
  });

  // Change Arr structure
  const friends: IFriend[] = userFriends.map((friend) => {
    return {
      id: friend.id,
      userName: friend.userName,
      image: friend.image,
      firstName: friend.firstName,
      lastName: friend.lastName,
      email: friend.email,
      userFriend: true,
    };
  });

  return friends;
}
