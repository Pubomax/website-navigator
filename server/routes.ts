import type { Express } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { storage } from "./storage";
import { insertContactMessageSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";

// Store connected clients
const clients = new Set<WebSocket>();

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog Categories Routes
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

  // Blog Posts Routes
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

  // Case Studies Routes
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

  // Contact Route
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(data);
      res.status(201).json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact form data" });
    }
  });

  // Newsletter Subscription Route
  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = insertNewsletterSubscriptionSchema.parse(req.body);

      // Check if email already exists
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

  const httpServer = createServer(app);

  // Initialize WebSocket server
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });

  wss.on('connection', (ws) => {
    console.log('New client connected');
    // Add new client to the set
    clients.add(ws);

    // Send welcome message
    ws.send(JSON.stringify({
      type: 'system',
      message: 'Welcome to live chat support! How can we help you today?',
      timestamp: new Date().toISOString(),
    }));

    ws.on('message', (data) => {
      try {
        const message = JSON.parse(data.toString());
        console.log('Received message:', message);

        // Broadcast message to all connected clients
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

  return httpServer;
}