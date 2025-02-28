import {
  type CaseStudy,
  type BlogPost,
  type ContactMessage,
  type InsertCaseStudy,
  type InsertBlogPost,
  type InsertContactMessage,
} from "@shared/schema";

export interface IStorage {
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudyById(id: number): Promise<CaseStudy | undefined>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private caseStudies: Map<number, CaseStudy>;
  private blogPosts: Map<number, BlogPost>;
  private contactMessages: Map<number, ContactMessage>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.caseStudies = new Map();
    this.blogPosts = new Map();
    this.contactMessages = new Map();
    this.currentIds = { caseStudies: 1, blogPosts: 1, contactMessages: 1 };
    
    // Add some initial case studies
    this.initializeCaseStudies();
    this.initializeBlogPosts();
  }

  private initializeCaseStudies() {
    const initialCaseStudies: InsertCaseStudy[] = [
      {
        title: "Digital Transformation for Major Retailer",
        description: "Implemented AI-driven inventory management system",
        industry: "Retail",
        results: "30% reduction in inventory costs",
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      },
      {
        title: "Manufacturing Process Automation",
        description: "Automated quality control using computer vision",
        industry: "Manufacturing",
        results: "50% improvement in defect detection",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      }
    ];

    initialCaseStudies.forEach(study => this.createCaseStudy(study));
  }

  private initializeBlogPosts() {
    const initialPosts: InsertBlogPost[] = [
      {
        title: "The Future of AI in Business",
        content: "Detailed analysis of AI trends...",
        summary: "Exploring how AI is reshaping business landscape",
        publishedAt: new Date(),
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      },
      {
        title: "Digital Transformation Strategy Guide",
        content: "Step by step guide to digital transformation...",
        summary: "Essential steps for successful digital transformation",
        publishedAt: new Date(),
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      }
    ];

    initialPosts.forEach(post => this.createBlogPost(post));
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values());
  }

  async getCaseStudyById(id: number): Promise<CaseStudy | undefined> {
    return this.caseStudies.get(id);
  }

  async createCaseStudy(study: InsertCaseStudy): Promise<CaseStudy> {
    const id = this.currentIds.caseStudies++;
    const caseStudy = { ...study, id };
    this.caseStudies.set(id, caseStudy);
    return caseStudy;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentIds.blogPosts++;
    const blogPost = { ...post, id };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentIds.contactMessages++;
    const contactMessage = { ...message, id };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
}

export const storage = new MemStorage();
