import { pgTable, text, serial, timestamp, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const blogCategories = pgTable("blog_categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  summary: text("summary").notNull(),
  publishedAt: timestamp("published_at").notNull(),
  imageUrl: text("image_url").notNull(),
  categoryId: integer("category_id").notNull().references(() => blogCategories.id),
});

export const caseStudies = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  industry: varchar("industry", { length: 100 }).notNull(),
  results: text("results").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  message: text("message").notNull(),
});

export const insertBlogCategorySchema = createInsertSchema(blogCategories).omit({ id: true });
export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({ id: true });
export const insertCaseStudySchema = createInsertSchema(caseStudies).omit({ id: true });
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true });

export type BlogCategory = typeof blogCategories.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type CaseStudy = typeof caseStudies.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type InsertBlogCategory = z.infer<typeof insertBlogCategorySchema>;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;