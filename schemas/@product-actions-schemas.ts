import * as z from "zod";

export const createFeedbackSectionSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must contain at least 2 character's" }),
  currentUserId: z.string().min(2),
  membersIds: z.array(z.string()),
});

const basicProductSchema = {
  userId: z.string(),
  sectionId: z.string(),
};

const basicFeedbackSchema = {
  userId: z.string(),
  category: z.string(),
  detail: z.string(),
  status: z.union([
    z.literal("inprogress"),
    z.literal("planned"),
    z.literal("live"),
  ]),
  title: z
    .string()
    .min(2, { message: "Title must contain at least 2 character's" }),
};

export const deleteFeedbackSectionSchema = z.object({
  ...basicProductSchema,
});

export const leaveFromSectionSchema = z.object({
  ...basicProductSchema,
});

export const deleteFeedbackSectionBgImgSchema = z.object({
  sectionId: z.string(),
});

export const sectionUserSchema = z.object({ ...basicProductSchema });

export const kickUserFromFeedbackSectionSchema = z.object({
  kickedUserId: z.string(),
  adminId: z.string(),
  sectionId: z.string(),
});

export const giveAdminRoleSchema = z.object({
  memberId: z.string(),
  adminId: z.string(),
  sectionId: z.string(),
});

export const addFeedbackSchema = z.object({
  ...basicFeedbackSchema,
  sectionId: z.string(),
});

export const updateFeedbackSchema = z.object({
  ...basicFeedbackSchema,
  feedbackId: z.string(),
  sectionId: z.string(),
});
