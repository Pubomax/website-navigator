#!/usr/bin/env node
import { execSync } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

/**
 * Script to deploy database migrations to Neon Database
 * Run this during the build step in Vercel
 */

console.log('🏁 Starting database deployment process...');

if (!process.env.DATABASE_URL) {
  console.error('❌ ERROR: DATABASE_URL environment variable is required');
  process.exit(1);
}

try {
  console.log('📦 Installing drizzle-kit...');
  execSync('npm install drizzle-kit --no-save', { stdio: 'inherit', cwd: rootDir });

  console.log('🔄 Running database migrations...');
  execSync('npx drizzle-kit push:pg', {
    stdio: 'inherit',
    cwd: rootDir,
    env: { ...process.env }
  });

  console.log('✅ Database migrations completed successfully!');
} catch (error) {
  console.error('❌ Error during database deployment:', error);
  process.exit(1);
}