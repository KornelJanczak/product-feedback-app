import * as z from "zod";

const basicProductSchema = {
  userId: z.string(),
  sectionId: z.string(),
};

const basicFeedbackSchema = {
  userId: z.string(),
  category: z.string(),
  detail: z.string(),
  status: z.string(),
  title: z
    .string()
    .min(2, { message: "Title must contain at least 2 character's" }),
};

const basicCommentSchema = {
  sectionId: z.string(),
  feedbackId: z.string(),
};

const basicReplySchema = {
  ...basicCommentSchema,
  commentId: z.string(),
};

const idsFeedbackSchema = {
  feedbackId: z.string(),
  sectionId: z.string(),
  currentUserId: z.string(),
};

export const createFeedbackSectionSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must contain at least 2 character's" }),
  currentUserId: z.string().min(2),
  membersIds: z.array(z.string()),
});

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

export const createFeedbackSchema = z.object({
  ...basicFeedbackSchema,
  sectionId: z.string(),
});

export const updateFeedbackSchema = z.object({
  ...basicFeedbackSchema,
  feedbackId: z.string(),
  sectionId: z.string(),
});

export const deleteFeedbackSchema = z.object({
  ...idsFeedbackSchema,
});

export const likeFeedbackSchema = z.object({ ...idsFeedbackSchema });

export const createCommentSchema = z.object({
  ...basicCommentSchema,
  content: z.string(),
});

export const createReplySchema = z.object({
  ...basicReplySchema,
  content: z.string(),
});

export const deleteCommentOrReplySchema = z.object({
  ...basicCommentSchema,
  actionType: z.enum(["comment", "reply"]),
  commentId: z.string().optional(),
  replyId: z.string().optional(),
});
