import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const caseStudies = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  industry: varchar("industry", { length: 100 }).notNull(),
  results: text("results").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  summary: text("summary").notNull(),
  publishedAt: timestamp("published_at").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  message: text("message").notNull(),
});

export const insertCaseStudySchema = createInsertSchema(caseStudies).omit({ id: true });
export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({ id: true });
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true });

export type CaseStudy = typeof caseStudies.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
