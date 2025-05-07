# WebsiteNavigator Deployment Guide
## Vercel + Neon Database

This guide provides instructions for deploying the WebsiteNavigator application to Vercel with a Neon Database backend.

## Prerequisites

- A [Vercel](https://vercel.com) account
- A [Neon Database](https://neon.tech) account
- Git repository containing your project

## Setup Steps

### 1. Neon Database Setup

1. Log in to your Neon account and create a new project
2. After creation, go to the "Connection Details" section
3. Copy the PostgreSQL connection string (it should look like `postgresql://user:password@endpoint/database`)
4. Note: For serverless environments, use the "Pooled connection string" format

### 2. Vercel Project Setup

1. Log in to your Vercel account
2. Click "Add New" → "Project"
3. Import your Git repository
4. In the project configuration page:
   - Build Command: The default value should work (npm run vercel-build)
   - Output Directory: Leave as default
   - Environment Variables: Add the following:
     - `DATABASE_URL`: Paste the Neon connection string you copied earlier
   - Install Command: npm install
   - Development Command: npm run dev

5. Click "Deploy"

## Vercel Environment Variables

Ensure the following environment variables are set in your Vercel project settings:

- `DATABASE_URL`: Your Neon Database connection string
- `NODE_ENV`: Set to "production" (usually set by Vercel automatically)

## Database Migrations

Database migrations will run automatically during the build process using the `scripts/deploy-db.js` script. This ensures your database schema is up-to-date with each deployment.

You can also manually trigger migrations with:

```
npm run deploy:db
```

## Troubleshooting

### Connection Issues

If you experience connection issues with Neon:

1. Verify that the connection string is correctly formatted
2. Ensure the IP of your Vercel deployment is allowed in Neon's IP restrictions (if you've set any)
3. Check Vercel logs for any database connection errors

### Build Failures

If the build fails:

1. Check Vercel deployment logs
2. Ensure all environment variables are set correctly
3. Verify that the scripts in package.json are correct

## Local Development

For local development after this setup:

1. Create a `.env` file with your `DATABASE_URL` (add this file to .gitignore)
2. Run `npm run dev` for development

## Monitoring

- Monitor your Neon database usage in the Neon dashboard
- Monitor your application performance in the Vercel dashboard