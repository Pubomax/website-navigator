# WebsiteNavigator Deployment Guide

This guide provides step-by-step instructions for deploying the WebsiteNavigator application using Vercel and Neon Database. Follow these instructions carefully to ensure a successful deployment.

## Table of Contents

1. [Setting up Neon Database](#setting-up-neon-database)
2. [Deploying to Vercel](#deploying-to-vercel)
3. [Post-Deployment Tasks](#post-deployment-tasks)

## Setting up Neon Database

Neon Database is a serverless PostgreSQL service that offers a scalable and easy-to-manage database solution.

### 1. Create a Neon Database Account

1. Visit [https://neon.tech/](https://neon.tech/) and click on "Sign Up" or "Get Started"
2. You can sign up using GitHub, Google, or an email address
3. Complete the registration process by following the on-screen instructions
4. Verify your email if required

### 2. Create a New PostgreSQL Database

1. After logging in, you'll be taken to the Neon dashboard
2. Click on "Create a Project" button
3. Enter a name for your project (e.g., "WebsiteNavigator")
4. Select the region closest to your target audience for optimal performance
5. Click "Create Project"
6. Neon will create a project with a default database named "neondb"

### 3. Obtain the Connection String

1. In your project dashboard, click on the "Connection Details" tab
2. You'll see connection information including hostname, port, and database name
3. Find the "Connection String" section
4. Toggle to "Pooled connection" as the WebsiteNavigator application uses connection pooling
5. Copy the provided connection string which will be in this format:
   ```
   postgresql://[user]:[password]@[endpoint]/[database]
   ```
6. Keep this connection string secure as it will be used in your Vercel environment variables

### 4. Set Up the Initial Database Schema

The WebsiteNavigator project uses Drizzle ORM for database schema management. The application has a script (`deploy-db.js`) that will automatically set up your database schema during the Vercel deployment process.

There's no need to manually set up the schema, as the deployment script will handle this automatically. The schema definitions are located in the `shared/schema.ts` file.

## Deploying to Vercel

Vercel is a cloud platform for static sites and serverless functions that enables developers to deploy websites globally with ease.

### 1. Create a Vercel Account

1. Visit [https://vercel.com/](https://vercel.com/) and click "Sign Up"
2. You can sign up using GitHub, GitLab, Bitbucket, or an email address
3. Complete the registration process by following the on-screen instructions

### 2. Connect Your GitHub Repository

1. After logging in, you'll be taken to the Vercel dashboard
2. Click "Add New" and select "Project"
3. Connect your GitHub account if you haven't already
4. Select the repository that contains your WebsiteNavigator project
5. Vercel will scan the repository and detect the project configuration

### 3. Configure Environment Variables

Before deploying, you need to set up the necessary environment variables:

1. In the deployment configuration page, scroll down to the "Environment Variables" section
2. Add the following environment variables:

   | Name | Value | Description |
   |------|-------|-------------|
   | `DATABASE_URL` | Your Neon Connection String | The PostgreSQL connection string you obtained from Neon |
   | `NODE_ENV` | `production` | Sets the application to production mode |
   | `SESSION_SECRET` | Generate a random string | Secret key for session encryption |
   | `EMAIL_HOST` | Your SMTP server | (Optional) SMTP server for sending emails |
   | `EMAIL_PORT` | SMTP port (e.g., 587) | (Optional) Port for SMTP server |
   | `EMAIL_USER` | SMTP username | (Optional) Username for SMTP authentication |
   | `EMAIL_PASS` | SMTP password | (Optional) Password for SMTP authentication |
   | `EMAIL_FROM` | noreply@yourdomain.com | (Optional) From address for emails |

   To generate a random session secret, you can use:
   ```
   openssl rand -base64 32
   ```

### 4. Deploy the Application

1. The project already includes a `vercel.json` file for configuration
2. Click "Deploy" to start the deployment process
3. Vercel will build and deploy your application
4. The deployment process will automatically run the `deploy-db.js` script to set up your database schema

### 5. Verify the Deployment

1. Once the deployment is complete, Vercel will provide a URL (e.g., `https://your-project.vercel.app`)
2. Visit the URL to ensure the application is running correctly
3. Test the main functionality of the application:
   - Navigate through different pages
   - Test the chat widget functionality
   - Ensure data is being stored in the database

If you encounter any issues:
- Check the Vercel deployment logs for errors
- Verify that your environment variables are correctly set
- Make sure your Neon Database is accessible from Vercel

## Post-Deployment Tasks

### 1. Setting Up a Custom Domain (Optional)

If you want to use a custom domain instead of the default Vercel domain:

1. In your Vercel project dashboard, click on "Settings"
2. Select "Domains" from the left menu
3. Click "Add" and enter your domain name
4. Follow Vercel's instructions to verify your domain ownership
5. Vercel will provide you with DNS records that you need to add to your domain registrar

### 2. Configuring DNS Settings

To point your domain to Vercel:

1. Log in to your domain registrar's website
2. Navigate to the DNS settings page
3. Add the DNS records provided by Vercel:
   - For an apex domain (example.com), use an A record pointing to Vercel's IP addresses
   - For a subdomain (www.example.com), use a CNAME record pointing to your Vercel project URL
4. Wait for DNS propagation (can take up to 48 hours, though often much faster)

### 3. Monitoring Considerations

For monitoring your application:

1. **Vercel Analytics**: Enable Vercel Analytics in your project settings to get insights about your application's performance and usage
2. **Neon Database Monitoring**: Use Neon's dashboard to monitor database performance and usage
3. **Error Tracking**: Consider setting up an error tracking service like Sentry or LogRocket
4. **Uptime Monitoring**: Use services like UptimeRobot or Pingdom to monitor your application's uptime

### 4. Best Practices for Maintaining the Application

To keep your application running smoothly:

1. **Regular Updates**:
   - Keep dependencies updated for security and performance improvements
   - Schedule regular maintenance windows for updates

2. **Database Management**:
   - Regularly review database performance in the Neon dashboard
   - Set up database backups (Neon provides automatic backups)
   - Monitor database usage to ensure you stay within your plan limits

3. **Security**:
   - Regularly rotate sensitive credentials (especially SESSION_SECRET and database passwords)
   - Enable two-factor authentication for your Vercel and Neon accounts
   - Regularly review application logs for suspicious activity

4. **Scaling**:
   - Monitor application performance as user traffic grows
   - Scale your Neon Database plan as needed
   - Consider using Vercel's Edge Functions for improved global performance

5. **CI/CD Pipeline**:
   - Set up automated testing before deployment
   - Consider implementing a staging environment for testing before production deployment
   - Use Vercel's preview deployments for testing changes before merging to main branch

## Conclusion

By following this guide, you should have successfully deployed the WebsiteNavigator application using Vercel and Neon Database. The combination of these services provides a scalable, reliable infrastructure for your application.

If you encounter any issues during deployment or have questions about maintaining your application, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Neon Database Documentation](https://neon.tech/docs)
- The README file in your WebsiteNavigator repository

Happy deploying!