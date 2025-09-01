import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  image: z.string().min(1, { message: "Image URL is required" }),
  sourceUrl: z.url({ message: "Invalid URL" }).optional().or(z.literal("")),
  liveUrl: z.url({ message: "Invalid URL" }).optional().or(z.literal("")),
  tags: z
    .array(z.string().min(1, { message: "Tag cannot be empty" }))
    .min(1, { message: "At least one tag is required" }),
});
