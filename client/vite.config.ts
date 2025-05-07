import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    // Improve chunk size and loading performance
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          wouter: ["wouter"],
        },
      },
    },
    // Minify for production
    minify: "terser",
    // Ensure clean builds
    emptyOutDir: true,
  },
  // Optimize server for development
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  // Ensure we're properly handling TypeScript
  optimizeDeps: {
    include: ["react", "react-dom", "wouter"],
  },
});