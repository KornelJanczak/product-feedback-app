import * as z from "zod";

export const inputSchema = z.object({
  inputValue: z.string().min(1),
});
