import {
  type BlogCategory,
  type BlogPost,
  type CaseStudy,
  type ContactMessage,
  type InsertBlogCategory,
  type InsertBlogPost,
  type InsertCaseStudy,
  type InsertContactMessage,
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

  // Other existing methods
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudyById(id: number): Promise<CaseStudy | undefined>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private blogCategories: Map<number, BlogCategory>;
  private blogPosts: Map<number, BlogPost>;
  private caseStudies: Map<number, CaseStudy>;
  private contactMessages: Map<number, ContactMessage>;
  private currentIds: { [key: string]: number };

  constructor() {
    console.log('Initializing MemStorage...');
    this.blogCategories = new Map();
    this.blogPosts = new Map();
    this.caseStudies = new Map();
    this.contactMessages = new Map();
    this.currentIds = { 
      blogCategories: 1, 
      blogPosts: 1, 
      caseStudies: 1, 
      contactMessages: 1 
    };

    try {
      console.log('Starting blog categories initialization...');
      this.initializeBlogCategories();
      console.log('Blog categories initialized successfully');

      console.log('Starting blog posts initialization...');
      this.initializeBlogPosts();
      console.log('Blog posts initialized successfully');

      console.log('Starting case studies initialization...');
      this.initializeCaseStudies();
      console.log('Case studies initialized successfully');
    } catch (error) {
      console.error('Error during storage initialization:', error);
    }
  }

  private initializeBlogCategories() {
    const categories: InsertBlogCategory[] = [
      {
        name: "Digital Transformation",
        slug: "digital-transformation",
        description: "Latest trends and insights in digital transformation",
      },
      {
        name: "Artificial Intelligence",
        slug: "artificial-intelligence",
        description: "AI applications and innovations in business",
      },
      {
        name: "Automation",
        slug: "automation",
        description: "Process automation and efficiency improvements",
      },
    ];

    console.log(`Initializing ${categories.length} blog categories...`);
    categories.forEach(category => {
      const categoryWithNullDesc = {
        ...category,
        description: category.description || null,
      };
      this.createBlogCategory(categoryWithNullDesc);
    });
  }

  private validateCategoryExists(categoryId: number): boolean {
    const exists = this.blogCategories.has(categoryId);
    if (!exists) {
      console.error(`Attempted to create post with non-existent category ID: ${categoryId}`);
    }
    return exists;
  }

  private initializeBlogPosts() {
    const initialPosts: InsertBlogPost[] = [
      {
        title: "The Future of AI in Business",
        content: "Detailed analysis of AI trends...",
        summary: "Exploring how AI is reshaping business landscape",
        publishedAt: new Date(),
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        categoryId: 2, // AI category
      },
      {
        title: "Digital Transformation Strategy Guide",
        content: "Step by step guide to digital transformation...",
        summary: "Essential steps for successful digital transformation",
        publishedAt: new Date(),
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        categoryId: 1, // Digital Transformation category
      },
      {
        title: "Automation Success Stories",
        content: "Real-world examples of successful automation...",
        summary: "Learn from successful automation implementations",
        publishedAt: new Date(),
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        categoryId: 3, // Automation category
      },
    ];

    console.log(`Initializing ${initialPosts.length} blog posts...`);
    initialPosts.forEach(post => {
      if (this.validateCategoryExists(post.categoryId)) {
        this.createBlogPost(post);
      }
    });
  }

  private initializeCaseStudies() {
    const initialCaseStudies: InsertCaseStudy[] = [
      {
        title: "Digital Transformation for Major Retailer",
        description: "Implemented AI-driven inventory management system and predictive analytics for a national retail chain, revolutionizing their stock management and customer service.",
        industry: "Retail",
        results: "30% reduction in inventory costs, 25% increase in customer satisfaction",
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      },
      {
        title: "Manufacturing Process Automation",
        description: "Automated quality control processes using computer vision and machine learning, significantly improving production efficiency and reducing defects.",
        industry: "Manufacturing",
        results: "50% improvement in defect detection, 40% faster production time",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      },
      {
        title: "Healthcare Data Integration",
        description: "Developed and implemented a comprehensive healthcare data platform that unified patient records and enabled real-time analytics for better patient care.",
        industry: "Healthcare",
        results: "60% faster patient data access, 45% reduction in administrative time",
        imageUrl: "https://images.unsplash.com/photo-1504813184591-01572f98c85f",
      },
      {
        title: "Financial Services Digital Platform",
        description: "Created a modern digital banking platform with advanced security features and intuitive user interface for a leading financial institution.",
        industry: "Finance",
        results: "200% increase in mobile banking adoption, 40% reduction in transaction time",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      },
      {
        title: "Smart City Infrastructure",
        description: "Implemented IoT sensors and real-time monitoring systems for a major city's infrastructure management, improving urban services and efficiency.",
        industry: "Government",
        results: "35% energy savings, 45% improvement in maintenance efficiency",
        imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
      },
      {
        title: "E-commerce Platform Modernization",
        description: "Revamped legacy e-commerce system with modern microservices architecture and AI-powered recommendation engine.",
        industry: "E-commerce",
        results: "150% increase in sales conversion, 60% better customer engagement",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      }
    ];

    console.log(`Initializing ${initialCaseStudies.length} case studies...`);
    initialCaseStudies.forEach(study => this.createCaseStudy(study));
  }

  // Blog Category Methods
  async getBlogCategories(): Promise<BlogCategory[]> {
    return Array.from(this.blogCategories.values());
  }

  async getBlogCategoryById(id: number): Promise<BlogCategory | undefined> {
    return this.blogCategories.get(id);
  }

  async getBlogCategoryBySlug(slug: string): Promise<BlogCategory | undefined> {
    return Array.from(this.blogCategories.values()).find(
      category => category.slug === slug
    );
  }

  async createBlogCategory(category: InsertBlogCategory): Promise<BlogCategory> {
    const id = this.currentIds.blogCategories++;
    const newCategory = { 
      ...category, 
      id,
      description: category.description || null 
    };
    this.blogCategories.set(id, newCategory);
    return newCategory;
  }

  // Blog Post Methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostsByCategory(categoryId: number): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).filter(
      post => post.categoryId === categoryId
    );
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    if (!this.validateCategoryExists(post.categoryId)) {
      throw new Error(`Cannot create blog post: Category ID ${post.categoryId} does not exist`);
    }

    const id = this.currentIds.blogPosts++;
    const blogPost = { ...post, id };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  // Case Studies Methods
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

  // Contact Message Methods
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentIds.contactMessages++;
    const contactMessage = { ...message, id };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
}

export const storage = new MemStorage();