import * as z from "zod";

export const createFeedbackSectionSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must contain at least 2 character's" }),
  membersIds: z
    .array(z.string())
    .refine(
      (object) => Object.keys(object).length <= 1,
      "The object can contain"
    ),
});
