import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertNewsletterSubscriptionSchema, insertBlogPostSchema, insertBlogCategorySchema } from "@shared/schema";
import session from 'express-session';
import MemoryStore from 'memorystore';
import { ZodError } from 'zod';
import { setupSitemap } from './sitemap';
import { sendConfirmationEmail } from './email';

import axios from 'axios';

// Helper function to check if an error is a ZodError
function isZodError(error: unknown): error is ZodError {
  return error instanceof Error && error.name === 'ZodError';
}

// Extend express-session to include our custom properties
declare module 'express-session' {
  interface SessionData {
    isAuthenticated: boolean;
  }
}

// Add this near the top of the file, after imports
const logError = (error: unknown, context: string) => {
  console.error(`Error in ${context}:`, error);
  if (error instanceof Error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
  }
};

// Removed WebSocket chat functionality

// Basic auth middleware for admin routes
// API key for automated integrations (n8n)
const API_KEY = "minecore-n8n-integration-key";

const adminAuthMiddleware = async (req: any, res: any, next: any) => {
  // Allow API key authentication for external integrations like n8n
  const apiKey = req.headers['x-api-key'];
  if (apiKey === API_KEY) {
    return next();
  }
  
  // Otherwise, use session-based authentication
  if (!req.session?.isAuthenticated) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Only serve these special files from our API in production to avoid conflicts with Vite
  if (process.env.NODE_ENV === 'production') {
    // Serve robots.txt
    app.get('/robots.txt', (req, res) => {
      res.sendFile('robots.txt', { root: './client/public' });
    });
    
    // Serve ads.txt with correct content-type
    app.get('/ads.txt', (req, res) => {
      res.set('Content-Type', 'text/plain; charset=utf-8');
      res.sendFile('ads.txt', { root: './client/public' });
    });
  }
  
  // Create HTTP server first - in Vercel this is passed in, not created here
  const httpServer = process.env.NODE_ENV === 'production' ?
    createServer(app) :
    createServer(app);

  const SessionStore = MemoryStore(session);
  app.use(session({
    store: new SessionStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: false, // set to true if using HTTPS
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }));

  // Add sitemap route
  app.use(setupSitemap());

  // Admin Routes
  app.post("/api/admin/login", async (req, res) => {
    const { username, password } = req.body;

    // For development, use hardcoded credentials
    if (username === "admin" && password === "adminpass123") {
      req.session.isAuthenticated = true;
      await req.session.save();
      res.json({ success: true });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });

  app.post("/api/admin/logout", (req, res) => {
    req.session.destroy(() => {
      res.json({ success: true });
    });
  });
  
  // Endpoint to check if a user is authenticated
  app.get("/api/admin/check-auth", (req, res) => {
    if (req.session?.isAuthenticated) {
      res.status(200).json({ authenticated: true });
    } else {
      res.status(401).json({ authenticated: false });
    }
  });

  app.get("/api/admin/blog-categories", adminAuthMiddleware, async (_req, res) => {
    try {
      const categories = await storage.getBlogCategories();
      res.json(categories);
    } catch (error) {
      logError(error, 'fetching categories');
      res.status(500).json({ message: "Error fetching blog categories" });
    }
  });

  // Update the blog categories POST endpoint
  app.post("/api/admin/blog-categories", adminAuthMiddleware, async (req, res) => {
    try {
      console.log('Received category data:', req.body);
      const data = insertBlogCategorySchema.parse(req.body);
      console.log('Validated category data:', data);

      const category = await storage.createBlogCategory(data);
      console.log('Created category:', category);

      res.status(201).json(category);
    } catch (error) {
      logError(error, 'creating blog category');

      if (isZodError(error)) {
        return res.status(400).json({ 
          message: "Invalid category data",
          errors: error.errors 
        });
      }

      res.status(500).json({ 
        message: "Failed to create category",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Blog Posts endpoints
  app.get("/api/admin/blog-posts", adminAuthMiddleware, async (_req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      logError(error, 'fetching posts');
      res.status(500).json({ message: "Error fetching blog posts" });
    }
  });

  app.post("/api/admin/blog-posts", adminAuthMiddleware, async (req, res) => {
    try {
      const data = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(data);
      res.status(201).json(post);
    } catch (error) {
      logError(error, 'creating post');
      res.status(400).json({ 
        message: "Invalid blog post data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Public Routes
  app.get("/api/blog-categories", async (_req, res) => {
    const categories = await storage.getBlogCategories();
    res.json(categories);
  });
  
  app.get("/api/blog-posts", async (_req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      logError(error, 'fetching public blog posts');
      res.status(500).json({ message: "Error fetching blog posts" });
    }
  });
  
  app.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      if (isNaN(postId)) {
        return res.status(400).json({ message: "Invalid post ID" });
      }
      
      const post = await storage.getBlogPostById(postId);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      logError(error, 'fetching specific blog post');
      res.status(500).json({ message: "Error fetching blog post" });
    }
  });

  app.get("/api/blog-categories/:id", async (req, res) => {
    const category = await storage.getBlogCategoryById(Number(req.params.id));
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.json(category);
  });



  app.get("/api/case-studies", async (_req, res) => {
    const caseStudies = await storage.getCaseStudies();
    res.json(caseStudies);
  });

  app.get("/api/case-studies/:id", async (req, res) => {
    const caseStudy = await storage.getCaseStudyById(Number(req.params.id));
    if (!caseStudy) {
      res.status(404).json({ message: "Case study not found" });
      return;
    }
    res.json(caseStudy);
  });

  // Blog API endpoints
  app.get("/api/blog-categories", async (_req, res) => {
    const categories = await storage.getBlogCategories();
    res.json(categories);
  });

  app.get("/api/blog-categories/:id", async (req, res) => {
    const category = await storage.getBlogCategoryById(Number(req.params.id));
    if (!category) {
      res.status(404).json({ message: "Blog category not found" });
      return;
    }
    res.json(category);
  });

  app.get("/api/blog-posts", async (req, res) => {
    const categoryId = req.query.categoryId ? Number(req.query.categoryId) : undefined;
    try {
      const posts = categoryId
        ? await storage.getBlogPostsByCategory(categoryId)
        : await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Error fetching blog posts" });
    }
  });

  app.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const post = await storage.getBlogPostById(Number(req.params.id));
      if (!post) {
        res.status(404).json({ message: "Blog post not found" });
        return;
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Error fetching blog post" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Received contact form data:", req.body);
      // Ensure we have valid data - handle potential undefined values
      const sanitizedData = {
        ...req.body,
        companyName: req.body.companyName || "",
        industry: req.body.industry || "Not specified",
        companySize: req.body.companySize || "",
        annualRevenue: req.body.annualRevenue || "",
        businessChallenges: Array.isArray(req.body.businessChallenges) ? req.body.businessChallenges : [],
        desiredOutcomes: req.body.desiredOutcomes || "Increase revenue and reduce workload",
        contactName: req.body.contactName || "",
        contactEmail: req.body.contactEmail || "",
        contactPhone: req.body.contactPhone || "",
        preferredContactMethod: req.body.preferredContactMethod || "email",
      };
      
      const data = insertContactMessageSchema.parse(sanitizedData);
      const message = await storage.createContactMessage(data);
      console.log("Created contact message:", message);
      
      // Send confirmation email
      let emailSent = false;
      try {
        emailSent = await sendConfirmationEmail(message);
        console.log("Email confirmation result:", emailSent ? "Email sent successfully" : "Email failed to send");
      } catch (emailError) {
        console.error("Error sending confirmation email:", emailError);
        // Don't fail the request if email sending fails, just log the error
      }
      
      res.status(201).json({
        ...message,
        emailSent: emailSent,
        message: emailSent 
          ? "Thank you for your message. We'll be in touch shortly!" 
          : "Thank you for your message. Your request has been recorded, but we couldn't send a confirmation email. We'll be in touch shortly!"
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      logError(error, 'creating contact message');
      
      if (isZodError(error)) {
        return res.status(400).json({ 
          message: "Invalid contact form data",
          errors: error.errors
        });
      }
      
      res.status(400).json({ 
        message: "Invalid contact form data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = insertNewsletterSubscriptionSchema.parse(req.body);
      const existing = await storage.getNewsletterSubscription(data.email);
      if (existing) {
        res.status(400).json({ message: "Email already subscribed" });
        return;
      }
      const subscription = await storage.createNewsletterSubscription(data);
      res.status(201).json(subscription);
    } catch (error) {
      logError(error, 'creating newsletter subscription');
      res.status(400).json({ message: "Invalid subscription data" });
    }
  });

  // Enhanced API endpoints for n8n integration
  // Get API information
  app.get("/api/integration/info", async (_req, res) => {
    res.json({
      name: "Minecore Group API",
      version: "1.0.0",
      endpoints: [
        { path: "/api/integration/blog", method: "POST", description: "Create new blog post" },
        { path: "/api/integration/blog", method: "GET", description: "List all blog posts" },
        { path: "/api/integration/blog/categories", method: "GET", description: "List all blog categories" },
        { path: "/api/integration/blog/preview", method: "POST", description: "Preview blog post without saving" }
      ],
      authentication: "API Key required in X-API-Key header"
    });
  });

  // List blog categories - n8n friendly format
  app.get("/api/integration/blog/categories", adminAuthMiddleware, async (_req, res) => {
    try {
      const categories = await storage.getBlogCategories();
      res.json({
        success: true,
        data: categories.map(cat => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          description: cat.description
        }))
      });
    } catch (error) {
      logError(error, 'fetching categories for integration');
      res.status(500).json({ 
        success: false, 
        error: "Error fetching blog categories",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Create blog post with enhanced error handling and extended fields
  app.post("/api/integration/blog", adminAuthMiddleware, async (req, res) => {
    try {
      // Extended schema for integration
      const data = insertBlogPostSchema.parse({
        ...req.body,
        published: req.body.published === undefined ? true : req.body.published,
        publishedDate: req.body.publishedDate || new Date().toISOString()
      });
      
      const post = await storage.createBlogPost(data);
      
      res.status(201).json({
        success: true,
        data: post,
        message: "Blog post created successfully"
      });
    } catch (error) {
      logError(error, 'creating post via integration API');
      
      if (isZodError(error)) {
        return res.status(400).json({ 
          success: false,
          message: "Invalid blog post data",
          validationErrors: error.errors,
          requiredFormat: {
            title: "string (required)",
            content: "string (required)",
            excerpt: "string (required)",
            categoryId: "number (required)",
            featuredImage: "string (optional)",
            published: "boolean (optional, default: true)",
            publishedDate: "ISO date string (optional, default: current time)"
          }
        });
      }
      
      res.status(500).json({ 
        success: false,
        message: "Failed to create blog post",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // List posts with optional filtering - n8n friendly format
  app.get("/api/integration/blog", adminAuthMiddleware, async (req, res) => {
    try {
      const categoryId = req.query.categoryId ? Number(req.query.categoryId) : undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      
      let posts = categoryId
        ? await storage.getBlogPostsByCategory(categoryId)
        : await storage.getBlogPosts();
      
      // Apply limit if specified
      if (limit && limit > 0 && limit < posts.length) {
        posts = posts.slice(0, limit);
      }
      
      res.json({
        success: true,
        count: posts.length,
        data: posts
      });
    } catch (error) {
      logError(error, 'fetching posts for integration');
      res.status(500).json({ 
        success: false, 
        error: "Error fetching blog posts",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Preview endpoint to validate post content without saving
  app.post("/api/integration/blog/preview", adminAuthMiddleware, async (req, res) => {
    try {
      // Validate the data without saving to database
      const data = insertBlogPostSchema.parse(req.body);
      
      res.json({
        success: true,
        message: "Blog post validation successful",
        data: {
          ...data,
          previewOnly: true,
          validatedAt: new Date().toISOString()
        }
      });
    } catch (error) {
      if (isZodError(error)) {
        return res.status(400).json({ 
          success: false,
          message: "Invalid blog post data",
          validationErrors: error.errors
        });
      }
      
      res.status(500).json({ 
        success: false,
        message: "Validation error",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Add API 404 handler - this will only be reached if no other routes matched
  app.use('/api/*', (req, res) => {
    res.status(404).json({
      status: 404,
      message: "API endpoint not found",
      path: req.originalUrl
    });
  });
  
  return httpServer;
}