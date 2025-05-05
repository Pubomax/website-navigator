import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Enable compression for all HTTP responses
app.use(compression({
  // Set compression level to maximum (9)
  level: 9,
  // Only compress responses with a content-type that matches this regex
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      // Don't compress responses with this request header
      return false;
    }
    // Compress all other responses
    return compression.filter(req, res);
  }
}));

// Handle special files like ads.txt to ensure correct Content-Type in all environments
app.use((req, res, next) => {
  // For ads.txt, set the correct MIME type
  if (req.path === '/ads.txt') {
    res.set('Content-Type', 'text/plain; charset=utf-8');
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Security headers
app.use((req, res, next) => {
  // HTTPS enforcement
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');
  // XSS protection
  res.setHeader('X-XSS-Protection', '1; mode=block');
  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  // Referrer policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Enhanced Content Security Policy for SEO and Analytics
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://tagmanager.google.com https://analytics.google.com; img-src 'self' data: https: https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://tagmanager.google.com https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://www.googletagmanager.com;"
  );
  // Permissions policy
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
  );
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // Create HTTP server first
  const server = await registerRoutes(app);

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    log(`Error: ${message}`);
    res.status(status).json({ message });
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // Serve static files
    serveStatic(app);
  }

  // Try ports sequentially
  const tryPort = async (port: number): Promise<void> => {
    try {
      await new Promise<void>((resolve, reject) => {
        server.listen({
          port,
          host: "0.0.0.0",
        }, () => {
          log(`Server listening on port ${port}`);
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