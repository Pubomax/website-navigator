import { z } from "zod";

export const insertBlogCategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  frenchName: z.string().optional(),
  slug: z.string().min(1, "Slug is required")
    .regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
  description: z.string().optional().nullable(),
  frenchDescription: z.string().optional().nullable(),
});