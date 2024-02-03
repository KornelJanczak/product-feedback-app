export default async function getRecivedInvitations(
  currentUser: User,
  userName: string
) {
  const friendInvitationsSenders = await prisma?.user.findMany({
    where: {
      friendRequestOf: {
        some: {
          friendRequestId: currentUser.id,
        },
      },
      userName: userName || undefined,
    },
  });

  const invitationsSenders = friendInvitationsSenders?.map((friend) => {
    return { ...friend, existingInvitation: true };
  });

  return invitationsSenders;
}
