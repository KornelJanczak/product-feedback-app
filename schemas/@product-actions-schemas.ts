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
