import prisma from "../db";

export default async function checkMembershipInSection(
  sectionId: string,
  currentUserId: string
) {
  let section;
  try {
    section = await prisma.feedbackSection.findUnique({
      where: {
        id: sectionId,
        OR: [
          { members: { some: { userId: currentUserId } } },
          { admins: { some: { userId: currentUserId } } },
        ],
      },
    });
  } catch {
    throw new Error("Failed to find section");
  }

  if (!section) return null;

  return section;
}
