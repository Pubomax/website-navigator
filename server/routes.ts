import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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

  app.get("/api/blog-posts", async (_req, res) => {
    const posts = await storage.getBlogPosts();
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

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(data);
      res.status(201).json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
