import prisma from "../db";

export default async function currentUserIsMember(
  sectionId: string,
  currentUserId: string
) {
  let currentUserIsMember;
  try {
    currentUserIsMember = await prisma.feedbackSection.findUnique({
      where: {
        id: sectionId,
        OR: [
          { members: { some: { userId: currentUserId } } },
          { admins: { some: { userId: currentUserId } } },
        ],
      },
    });
    return currentUserIsMember;
  } catch {
    throw new Error("Failed to find section");
  }
}
