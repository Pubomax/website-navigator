import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import { log } from "./vite";
import { createServer } from "http";
import { mockStorage } from "./mockdb";
import session from 'express-session';
import MemoryStore from 'memorystore';
import path from 'path';

// This is a modified version of the server for local development
// without database dependency

const app = express();
// Will try ports sequentially starting from 5000

// Enable compression for all HTTP responses
app.use(compression());

// Handle special files
app.use((req, res, next) => {
  if (req.path === '/ads.txt') {
    res.set('Content-Type', 'text/plain; charset=utf-8');
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Security headers (simplified for local development)
app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

// Basic request logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
  });
  next();
});

// Create HTTP server
const httpServer = createServer(app);

// Set up session support
const SessionStore = MemoryStore(session);
app.use(session({
  store: new SessionStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  secret: 'local-development-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Mock API endpoints
app.get('/api/blog-categories', (req, res) => {
  res.json([
    { id: 1, name: 'Technology', slug: 'technology', description: 'Tech posts' },
    { id: 2, name: 'Business', slug: 'business', description: 'Business posts' }
  ]);
});

app.get('/api/blog-posts', (req, res) => {
  res.json([
    { id: 1, title: 'Sample Blog Post', content: 'Content here...', summary: 'Summary...', publishedAt: new Date(), imageUrl: '/placeholder.jpg', categoryId: 1 }
  ]);
});

app.get('/api/case-studies', (req, res) => {
  res.json([
    { id: 1, title: 'Sample Case Study', description: 'Description...', industry: 'Technology', results: 'Great results!', imageUrl: '/placeholder.jpg' }
  ]);
});

app.post('/api/contact', (req, res) => {
  res.status(201).json({
    ...req.body,
    id: 1,
    createdAt: new Date(),
    emailSent: true,
    message: "Thank you for your message. This is a local development mode."
  });
});

app.post('/api/newsletter', (req, res) => {
  res.status(201).json({
    email: req.body.email,
    id: 1,
    subscribedAt: new Date(),
    isVerified: false,
    status: 'pending'
  });
});

// Admin auth endpoints
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "adminpass123") {
    req.session.isAuthenticated = true;
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

app.get("/api/admin/check-auth", (req, res) => {
  if (req.session?.isAuthenticated) {
    res.status(200).json({ authenticated: true });
  } else {
    res.status(401).json({ authenticated: false });
  }
});

// Setup Vite in development mode
import { setupVite } from "./vite";

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  log(`Error: ${message}`);
  res.status(status).json({ message });
});

// Start the server
(async () => {
  // In development mode, use Vite middleware
  await setupVite(app, httpServer);

  // Try ports sequentially
  const tryPort = async (port: number): Promise<void> => {
    try {
      await new Promise<void>((resolve, reject) => {
        httpServer.listen({
          port,
          host: "0.0.0.0",
        }, () => {
          log(`🚀 Local development server running at http://localhost:${port}`);
          log(`⚠️ Using mock database - no real data will be stored`);
          resolve();
        }).on('error', (e: NodeJS.ErrnoException) => {
          if (e.code === 'EADDRINUSE') {
            log(`Port ${port} is in use, trying port ${port + 1}...`);
            reject(e);
          } else {
            console.error(e);
            process.exit(1);
          }
        });
      });
    } catch (e) {
      const err = e as NodeJS.ErrnoException;
      if (err.code === 'EADDRINUSE') {
        await tryPort(port + 1);
      } else {
        throw err;
      }
    }
  };

  await tryPort(5000);
})();