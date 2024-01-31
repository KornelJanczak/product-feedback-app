import getCurrentUser from "@/lib/get-current-user";

export default async function sendFriendRequest(userId: string) {
  try {
    const currentUser = await getCurrentUser();

    console.log(currentUser);
    

    if (!currentUser) throw new Error("Unauthorized!");

    const friendRequest = await prisma?.friendRequest.create({
      data: {
        friendRequestOfId: currentUser.id,
        friendRequestId: userId,
      },
    });

    return friendRequest;
  } catch {
    throw new Error("Something went wrong!");
  }
}
