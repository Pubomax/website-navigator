import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Separator } from "@/components/ui/separator";
import { Workflow, FileJson, KeyRound, ArrowRight, MessageSquare, Settings2, Database } from "lucide-react";

export default function N8nGuide() {
  return (
    <main className="container py-8">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href="/integrations">Integrations</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrentPage>N8N Integration Guide</Breadcrumb.Item>
      </Breadcrumb>

      <div className="my-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">N8N Integration Guide</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Create powerful automation workflows with N8N to manage your blog content, handle leads, and more.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl">
            <Workflow className="h-16 w-16 text-blue-600" />
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="api-key">API Authentication</TabsTrigger>
          <TabsTrigger value="blog-automation">Blog Automation</TabsTrigger>
          <TabsTrigger value="examples">Example Workflows</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What is N8N?</CardTitle>
              <CardDescription>
                N8N is a workflow automation tool that allows you to connect various services and automate repetitive tasks without coding.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                N8N enables you to integrate the Minecore Group website with other services and tools by creating 
                visual workflows. You can automate tasks such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automatically publishing blog posts from various sources</li>
                <li>Sending lead data to your CRM system</li>
                <li>Syncing newsletter subscribers with email marketing platforms</li>
                <li>Creating social media posts from your blog content</li>
                <li>Notifying team members of new contact form submissions</li>
              </ul>
              
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 flex items-start space-x-3 mt-6">
                <div className="flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-amber-800">Getting Started with N8N</h4>
                  <p className="text-sm text-amber-700 mt-1">
                    If you're new to N8N, we recommend visiting the <a href="https://docs.n8n.io/getting-started/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">official N8N documentation</a> to learn how to set up and create your first workflow.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-md flex items-center justify-center mb-2 bg-violet-100">
                  <Settings2 className="h-6 w-6 text-violet-600" />
                </div>
                <CardTitle>Easy Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect to our API endpoints with a simple API key authentication and start creating workflows in minutes.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-md flex items-center justify-center mb-2 bg-emerald-100">
                  <Database className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automate blog post creation, updates, and distribution across multiple platforms from a single workflow.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-md flex items-center justify-center mb-2 bg-orange-100">
                  <FileJson className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Data Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work with structured JSON data for reliable and consistent automation across all your business systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="api-key" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <KeyRound className="mr-2 h-5 w-5" /> API Authentication
              </CardTitle>
              <CardDescription>
                To use our API with N8N, you'll need to generate an API key for authentication.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-md bg-muted p-4">
                <h3 className="text-lg font-medium mb-2">Step 1: Generate an API Key</h3>
                <p className="mb-4">API keys can be generated from the Admin Dashboard. Log in to your admin account and navigate to the API Keys section.</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Go to <Link href="/admin" className="text-primary hover:underline">Admin Dashboard</Link></li>
                  <li>Navigate to the "API Keys" section</li>
                  <li>Click on "Generate New API Key"</li>
                  <li>Provide a descriptive name for your key (e.g., "N8N Blog Automation")</li>
                  <li>Copy the generated API key (it will only be shown once)</li>
                </ol>
              </div>

              <div className="rounded-md bg-muted p-4">
                <h3 className="text-lg font-medium mb-2">Step 2: Using the API Key in N8N</h3>
                <p className="mb-4">When configuring an HTTP Request node in N8N, you need to add your API key as a header:</p>
                <CodeBlock 
                  language="json" 
                  code={`{
  "Authorization": "ApiKey YOUR_API_KEY_HERE"
}`} 
                  fileName="HTTP Request Headers" 
                />
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 flex items-start space-x-3 mt-4">
                <div className="flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-800">Security Best Practices</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Store your API key securely. Never share your key or commit it to public repositories. For production use, 
                    we recommend using the N8N credentials feature to securely store your API key.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="blog-automation" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Blog Post Management API</CardTitle>
              <CardDescription>
                Automate your blog content creation and management using these API endpoints.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">GET /api/blog-posts</h3>
                  <p className="mb-2">Retrieve all blog posts.</p>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="text-sm font-medium mb-1">Example Response:</h4>
                    <CodeBlock 
                      language="json" 
                      code={`[
  {
    "id": 1,
    "title": "Getting Started with AI Automation",
    "slug": "getting-started-with-ai-automation",
    "content": "Lorem ipsum dolor sit amet...",
    "image": "https://example.com/images/blog-1.jpg",
    "categoryId": 1,
    "published": true,
    "publishedAt": "2023-10-15T08:00:00Z",
    "authorName": "John Doe",
    "excerpt": "A beginner's guide to implementing AI automation..."
  },
  {
    "id": 2,
    "title": "5 Ways to Improve Sales with Automation",
    "slug": "5-ways-to-improve-sales-with-automation",
    "content": "Lorem ipsum dolor sit amet...",
    "image": "https://example.com/images/blog-2.jpg",
    "categoryId": 2,
    "published": true,
    "publishedAt": "2023-10-20T10:30:00Z",
    "authorName": "Jane Smith",
    "excerpt": "Discover proven strategies to boost your sales..."
  }
]`} 
                      fileName="GET /api/blog-posts" 
                    />
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-2">POST /api/blog-posts</h3>
                  <p className="mb-2">Create a new blog post.</p>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="text-sm font-medium mb-1">Example Request:</h4>
                    <CodeBlock 
                      language="json" 
                      code={`{
  "title": "How to Integrate N8N with Your Website",
  "slug": "how-to-integrate-n8n-with-your-website",
  "content": "In this tutorial, we'll show you step by step...",
  "image": "https://example.com/images/n8n-tutorial.jpg",
  "categoryId": 3,
  "published": true,
  "authorName": "Alex Johnson",
  "excerpt": "Learn to create powerful automation workflows..."
}`} 
                      fileName="POST /api/blog-posts" 
                    />
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-2">GET /api/blog-categories</h3>
                  <p className="mb-2">Retrieve all blog categories.</p>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="text-sm font-medium mb-1">Example Response:</h4>
                    <CodeBlock 
                      language="json" 
                      code={`[
  {
    "id": 1,
    "name": "AI & Automation",
    "slug": "ai-automation",
    "description": "Articles about artificial intelligence and automation"
  },
  {
    "id": 2,
    "name": "Sales Strategies",
    "slug": "sales-strategies",
    "description": "Tips and guides for improving sales"
  },
  {
    "id": 3,
    "name": "Tutorials",
    "slug": "tutorials",
    "description": "Step-by-step guides and tutorials"
  }
]`} 
                      fileName="GET /api/blog-categories" 
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="examples" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Automated Blog Publishing</CardTitle>
                <CardDescription>
                  Create a workflow that publishes blog posts from Google Docs to your website.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ol className="list-decimal pl-6 space-y-3">
                  <li className="text-sm">
                    <span className="font-medium">Trigger:</span> Google Drive - New File in Folder
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Process:</span> Google Docs - Read Document
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Transform:</span> Use Code node to format content and extract metadata
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Optional:</span> HTTP Request to download and process images
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Create:</span> HTTP Request to POST to /api/blog-posts
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Notify:</span> Send Slack notification when published
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-700">
                    This workflow automatically converts Google Docs into properly formatted blog posts, 
                    complete with images, and publishes them to your website.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Social Media Distribution</CardTitle>
                <CardDescription>
                  Automatically share new blog posts across your social media channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ol className="list-decimal pl-6 space-y-3">
                  <li className="text-sm">
                    <span className="font-medium">Trigger:</span> Schedule - Every hour
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Fetch:</span> HTTP Request to GET latest posts from /api/blog-posts
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Filter:</span> Use IF node to check for new posts (not shared yet)
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Format:</span> Create social media message with image and link
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Share:</span> Post to Twitter/X, LinkedIn, Facebook using respective nodes
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Update:</span> Mark post as shared in your tracking system
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-700">
                    This workflow ensures all your new content is distributed across your social media profiles
                    with customized messaging appropriate for each platform.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Want to learn more?</CardTitle>
              <CardDescription>
                Discover additional workflow templates and integration ideas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <p className="md:flex-1 text-muted-foreground">
                  We offer custom N8N workflow development and integration services to help you automate your business processes.
                  Get in touch with our team to discuss your specific needs.
                </p>
                <Button asChild className="whitespace-nowrap">
                  <Link href="/contact">
                    Contact for Custom Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}