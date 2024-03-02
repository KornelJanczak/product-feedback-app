import * as z from "zod";

export const createFeedbackSectionSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must contain at least 2 character's" }),
  currentUserId: z.string().min(2),
  membersIds: z.array(z.string()),
});

export const deleteFeedbackSectionSchema = z.object({
  userId: z.string(),
  sectionId: z.string(),
});
