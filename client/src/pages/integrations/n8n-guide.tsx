import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Check, ChevronRight, Code, FileJson, Server, Workflow } from "lucide-react";

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
        <h1 className="text-4xl font-bold mb-4">N8N Integration Guide</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Automate your content creation and management with our N8N integration.
          Create, schedule, and publish blog posts automatically.
        </p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="endpoints">API Endpoints</TabsTrigger>
          <TabsTrigger value="examples">Example Workflows</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  What is N8N?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  N8N is a workflow automation tool that allows you to connect different systems and automate tasks without coding. It's an excellent tool for creating automated content pipelines, data synchronization, and API integrations.
                </p>
                <p className="mt-4">
                  With our N8N integration, you can automate blog post creation, schedule content publication, and integrate with other tools like CRMs, analytics platforms, and more.
                </p>
                <a 
                  href="https://n8n.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-primary hover:underline"
                >
                  Learn more about N8N <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Workflow className="h-5 w-5" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Automate blog post creation from external sources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Schedule content publication with precise timing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Transform and enrich content from multiple data sources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Sync content with external platforms (social media, newsletters)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Validate content before publishing with our preview API</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="authentication" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                API Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our API uses API Key authentication for N8N integration. You'll need to include the API key in the request headers.
              </p>

              <div className="bg-muted p-4 rounded-md mb-6">
                <p className="font-semibold mb-2">API Key Setup:</p>
                <code className="block bg-background p-2 rounded">
                  X-API-Key: minecore-n8n-integration-key
                </code>
              </div>

              <p className="text-sm text-muted-foreground">
                For security reasons, please keep your API key confidential and don't expose it in client-side code.
              </p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">How to Configure in N8N</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Create a new workflow in your N8N instance</li>
                  <li>Add an "HTTP Request" node</li>
                  <li>Configure the node with the appropriate method and endpoint URL</li>
                  <li>In the "Headers" section, add <code>X-API-Key</code> with the value above</li>
                  <li>Set the "Response Format" to "JSON"</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileJson className="h-5 w-5" />
                  Available Endpoints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-4">Endpoint</th>
                        <th className="text-left py-2 px-4">Method</th>
                        <th className="text-left py-2 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-mono text-sm">/api/integration/info</td>
                        <td className="py-2 px-4">GET</td>
                        <td className="py-2 px-4">Get API information and available endpoints</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-mono text-sm">/api/integration/blog</td>
                        <td className="py-2 px-4">GET</td>
                        <td className="py-2 px-4">List all blog posts with optional filtering</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-mono text-sm">/api/integration/blog</td>
                        <td className="py-2 px-4">POST</td>
                        <td className="py-2 px-4">Create a new blog post</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-mono text-sm">/api/integration/blog/categories</td>
                        <td className="py-2 px-4">GET</td>
                        <td className="py-2 px-4">List all blog categories</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-mono text-sm">/api/integration/blog/preview</td>
                        <td className="py-2 px-4">POST</td>
                        <td className="py-2 px-4">Validate a blog post without saving it</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Request & Response Formats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Creating a Blog Post</h3>
                    <p className="mb-2">POST to <code>/api/integration/blog</code> with:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
{`{
  "title": "Your Blog Post Title",
  "content": "Full HTML content of the blog post",
  "excerpt": "Short summary of the blog post",
  "categoryId": 1,
  "featuredImage": "https://example.com/image.jpg",
  "published": true,
  "publishedDate": "2025-04-25T12:00:00Z"
}`}
                    </pre>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Only <code>title</code>, <code>content</code>, <code>excerpt</code>, and <code>categoryId</code> are required.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Example Response</h3>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
{`{
  "success": true,
  "data": {
    "id": 123,
    "title": "Your Blog Post Title",
    "content": "Full HTML content of the blog post",
    "excerpt": "Short summary of the blog post",
    "categoryId": 1,
    "featuredImage": "https://example.com/image.jpg",
    "published": true,
    "publishedDate": "2025-04-25T12:00:00Z",
    "createdAt": "2025-04-25T10:30:45Z"
  },
  "message": "Blog post created successfully"
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>RSS to Blog Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This workflow fetches articles from an RSS feed and creates blog posts automatically.
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Add an "RSS Feed" trigger node configured with your source RSS URL</li>
                  <li>Add a "Function" node to transform the RSS item into our blog post format</li>
                  <li>Add an "HTTP Request" node with:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Method: POST</li>
                      <li>URL: https://yoursite.com/api/integration/blog</li>
                      <li>Headers: X-API-Key</li>
                      <li>Body: The transformed data from the Function node</li>
                    </ul>
                  </li>
                </ol>
                <p className="mt-4 text-sm text-muted-foreground">
                  You can schedule this workflow to run at specific intervals to regularly check for new content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scheduled Content Publishing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Create blog posts in advance and schedule them for future publication.
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Add a "Schedule" trigger node with your desired publication schedule</li>
                  <li>Add a "Google Sheets" node to fetch content from a planning spreadsheet</li>
                  <li>Add a "Function" node to check which content is due for publication</li>
                  <li>Add an "HTTP Request" node to create the blog post with:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Method: POST</li>
                      <li>URL: https://yoursite.com/api/integration/blog</li>
                      <li>Headers: X-API-Key</li>
                      <li>Body: The scheduled content data</li>
                    </ul>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI-Generated Content Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Use OpenAI to generate blog content based on prompts and publish it to your blog.
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Add a "Schedule" trigger node for your desired content generation frequency</li>
                  <li>Add an "HTTP Request" node to call OpenAI's API with your content brief</li>
                  <li>Add a "Function" node to format the AI response into a blog post</li>
                  <li>Add an "HTTP Request" node to validate the content:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Method: POST</li>
                      <li>URL: https://yoursite.com/api/integration/blog/preview</li>
                    </ul>
                  </li>
                  <li>Add an "If" node to check if the validation was successful</li>
                  <li>Add a final "HTTP Request" node to publish the validated content</li>
                </ol>
                <div className="mt-4 p-3 bg-amber-50 text-amber-800 border border-amber-200 rounded-md">
                  <p className="text-sm">
                    <strong>Note:</strong> When using AI-generated content, always review and adapt it to ensure quality and accuracy before publication.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}