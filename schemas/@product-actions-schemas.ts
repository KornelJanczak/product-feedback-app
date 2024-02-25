import * as z from "zod";

export const createFeedbackSectionSchema = z.object({
  title: z.string().min(1, { message: "Title must contain character's" }),
  membersIds: z.string().array(),
});
