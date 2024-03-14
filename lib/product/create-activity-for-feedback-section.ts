import prisma from "../db";

export default async function createActivityForFeedbackSection(
  sectionId: string,
  authorId: string,
  description: string
) {
  try {
    const activity = await prisma.activityToFeedbackSection.create({
      data: {
        description,
        authorId,
        feedbackSectionId: sectionId,
      },
    });

    return activity;
  } catch {
    throw new Error("Creating activity for feedback section failed");
  }
}
