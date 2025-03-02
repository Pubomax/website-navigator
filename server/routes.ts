import type { Express } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { storage } from "./storage";
import { insertContactMessageSchema, insertNewsletterSubscriptionSchema, insertBlogPostSchema, insertBlogCategorySchema } from "@shared/schema";
import session from 'express-session';
import MemoryStore from 'memorystore';

// Store connected clients
const clients = new Set<WebSocket>();

// Basic auth middleware for admin routes
const adminAuthMiddleware = async (req: any, res: any, next: any) => {
  if (!req.session.isAuthenticated) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Create HTTP server first
  const httpServer = createServer(app);

  const SessionStore = MemoryStore(session);
  app.use(session({
    store: new SessionStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // set to true if using HTTPS
  }));

  // Initialize WebSocket server with a unique path
  const wss = new WebSocketServer({ server: httpServer, path: '/ws/chat' });

  wss.on('connection', (ws) => {
    console.log('New client connected');
    clients.add(ws);

    ws.send(JSON.stringify({
      type: 'system',
      message: 'Welcome to live chat support! How can we help you today?',
      timestamp: new Date().toISOString(),
    }));

    ws.on('message', (data) => {
      try {
        const message = JSON.parse(data.toString());
        console.log('Received message:', message);

        const response = {
          type: message.type || 'user',
          message: message.message,
          timestamp: new Date().toISOString(),
        };

        clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(response));
          }
        });
      } catch (error) {
        console.error('Error processing message:', error);
      }
    });

    ws.on('close', () => {
      console.log('Client disconnected');
      clients.delete(ws);
    });
  });

  // Admin Routes
  app.post("/api/admin/login", async (req, res) => {
    const { username, password } = req.body;

    // For development, use hardcoded credentials
    if (username === "admin" && password === "adminpass123") {
      req.session.isAuthenticated = true;
      res.json({ success: true });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });

  app.get("/api/admin/blog-posts", adminAuthMiddleware, async (_req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blog posts" });
    }
  });

  app.post("/api/admin/blog-posts", adminAuthMiddleware, async (req, res) => {
    try {
      const data = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(data);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ message: "Invalid blog post data" });
    }
  });

  app.get("/api/admin/blog-categories", adminAuthMiddleware, async (_req, res) => {
    try {
      const categories = await storage.getBlogCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blog categories" });
    }
  });

  app.post("/api/admin/blog-categories", adminAuthMiddleware, async (req, res) => {
    try {
      const data = insertBlogCategorySchema.parse(req.body);
      const category = await storage.createBlogCategory(data);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ message: "Invalid category data" });
    }
  });

  // Public Routes
  app.get("/api/blog-categories", async (_req, res) => {
    const categories = await storage.getBlogCategories();
    res.json(categories);
  });

  app.get("/api/blog-categories/:id", async (req, res) => {
    const category = await storage.getBlogCategoryById(Number(req.params.id));
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.json(category);
  });

  app.get("/api/blog-posts", async (req, res) => {
    const categoryId = req.query.categoryId ? Number(req.query.categoryId) : undefined;
    const posts = categoryId
      ? await storage.getBlogPostsByCategory(categoryId)
      : await storage.getBlogPosts();
    res.json(posts);
  });

  app.get("/api/blog-posts/:id", async (req, res) => {
    const post = await storage.getBlogPostById(Number(req.params.id));
    if (!post) {
      res.status(404).json({ message: "Blog post not found" });
      return;
    }
    res.json(post);
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

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(data);
      res.status(201).json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact form data" });
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
      res.status(400).json({ message: "Invalid subscription data" });
    }
  });

  return httpServer;
}