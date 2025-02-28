import {
  type BlogCategory,
  type BlogPost,
  type CaseStudy,
  type ContactMessage,
  type NewsletterSubscription,
  type AdminUser,
  type InsertBlogCategory,
  type InsertBlogPost,
  type InsertCaseStudy,
  type InsertContactMessage,
  type InsertNewsletterSubscription,
  type InsertAdminUser,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import {
  blogCategories,
  blogPosts,
  caseStudies,
  contactMessages,
  newsletterSubscriptions,
  adminUsers,
} from "@shared/schema";

export interface IStorage {
  // Blog Categories
  getBlogCategories(): Promise<BlogCategory[]>;
  getBlogCategoryById(id: number): Promise<BlogCategory | undefined>;
  getBlogCategoryBySlug(slug: string): Promise<BlogCategory | undefined>;
  createBlogCategory(category: InsertBlogCategory): Promise<BlogCategory>;

  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  getBlogPostsByCategory(categoryId: number): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;

  // Case Studies
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudyById(id: number): Promise<CaseStudy | undefined>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;

  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;

  // Newsletter Subscriptions
  getNewsletterSubscription(email: string): Promise<NewsletterSubscription | undefined>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  updateNewsletterSubscriptionStatus(email: string, status: string): Promise<NewsletterSubscription>;

  // Admin User Methods
  getAdminUserByUsername(username: string): Promise<AdminUser | undefined>;
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  updateAdminUserLastLogin(username: string): Promise<AdminUser>;
}

export class DatabaseStorage implements IStorage {
  // Blog Category Methods
  async getBlogCategories(): Promise<BlogCategory[]> {
    return await db.select().from(blogCategories);
  }

  async getBlogCategoryById(id: number): Promise<BlogCategory | undefined> {
    const [category] = await db
      .select()
      .from(blogCategories)
      .where(eq(blogCategories.id, id));
    return category;
  }

  async getBlogCategoryBySlug(slug: string): Promise<BlogCategory | undefined> {
    const [category] = await db
      .select()
      .from(blogCategories)
      .where(eq(blogCategories.slug, slug));
    return category;
  }

  async createBlogCategory(category: InsertBlogCategory): Promise<BlogCategory> {
    const [newCategory] = await db
      .insert(blogCategories)
      .values(category)
      .returning();
    return newCategory;
  }

  // Blog Post Methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts);
  }

  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, id));
    return post;
  }

  async getBlogPostsByCategory(categoryId: number): Promise<BlogPost[]> {
    return await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.categoryId, categoryId));
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db
      .insert(blogPosts)
      .values(post)
      .returning();
    return newPost;
  }

  // Case Studies Methods
  async getCaseStudies(): Promise<CaseStudy[]> {
    return await db.select().from(caseStudies);
  }

  async getCaseStudyById(id: number): Promise<CaseStudy | undefined> {
    const [study] = await db
      .select()
      .from(caseStudies)
      .where(eq(caseStudies.id, id));
    return study;
  }

  async createCaseStudy(study: InsertCaseStudy): Promise<CaseStudy> {
    const [newStudy] = await db
      .insert(caseStudies)
      .values(study)
      .returning();
    return newStudy;
  }

  // Contact Message Methods
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db
      .insert(contactMessages)
      .values(message)
      .returning();
    return newMessage;
  }

  // Newsletter Subscription Methods
  async getNewsletterSubscription(email: string): Promise<NewsletterSubscription | undefined> {
    const [subscription] = await db
      .select()
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, email));
    return subscription;
  }

  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const [newSubscription] = await db
      .insert(newsletterSubscriptions)
      .values({
        ...subscription,
        subscribedAt: new Date(),
        isVerified: false,
        status: 'pending'
      })
      .returning();
    return newSubscription;
  }

  async updateNewsletterSubscriptionStatus(email: string, status: string): Promise<NewsletterSubscription> {
    const [updatedSubscription] = await db
      .update(newsletterSubscriptions)
      .set({ status })
      .where(eq(newsletterSubscriptions.email, email))
      .returning();
    return updatedSubscription;
  }

  // Admin User Methods
  async getAdminUserByUsername(username: string): Promise<AdminUser | undefined> {
    const [user] = await db
      .select()
      .from(adminUsers)
      .where(eq(adminUsers.username, username));
    return user;
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const [user] = await db
      .select()
      .from(adminUsers)
      .where(eq(adminUsers.email, email));
    return user;
  }

  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const [newUser] = await db
      .insert(adminUsers)
      .values({
        username: user.username,
        email: user.email,
        passwordHash: user.password, // In real app, this would be hashed
        role: user.role || 'editor',
        createdAt: new Date(),
        lastLoginAt: null,
      })
      .returning();
    return newUser;
  }

  async updateAdminUserLastLogin(username: string): Promise<AdminUser> {
    const [updatedUser] = await db
      .update(adminUsers)
      .set({ lastLoginAt: new Date() })
      .where(eq(adminUsers.username, username))
      .returning();
    return updatedUser;
  }
}

export const storage = new DatabaseStorage();