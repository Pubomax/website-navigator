import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Copy, KeyRound, Check, FileJson } from "lucide-react";
import { PageTitle } from "@/components/page-title";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { insertBlogCategorySchema } from "@/schemas/blog-category";
import type { InsertBlogPost, InsertBlogCategory } from "@shared/schema";
import { LeadScoreDemo } from "@/components/lead-score-demo"; // Added import

function APIKeyCopyButton({ apiKey }: { apiKey: string }) {
  const [copied, setCopied] = useState(false);
  
  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    toast({
      title: "API key copied",
      description: "The API key has been copied to your clipboard.",
    });
  };
  
  return (
    <Button 
      size="sm" 
      variant="outline" 
      onClick={copyApiKey}
      className="flex items-center gap-2"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span>Copy key</span>
        </>
      )}
    </Button>
  );
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("categories");

  // Blog Categories Management
  const categoryForm = useForm<InsertBlogCategory>({
    resolver: zodResolver(insertBlogCategorySchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      frenchName: "",
      frenchDescription: "",
    },
  });

  const createCategory = useMutation({
    mutationFn: async (data: InsertBlogCategory) => {
      console.log('Submitting category data:', data);
      const response = await fetch("/api/admin/blog-categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Category creation error:', error);
        throw new Error(error.message || "Failed to create category");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Category created successfully",
      });
      categoryForm.reset();
    },
    onError: (error: Error) => {
      console.error('Category creation error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create category",
        variant: "destructive",
      });
    },
  });

  // Blog Posts Management
  const blogPostForm = useForm<InsertBlogPost>({
    defaultValues: {
      title: "",
      content: "",
      summary: "",
      imageUrl: "",
      categoryId: 1,
      publishedAt: new Date(),
    },
  });

  const { data: posts, isLoading: isLoadingPosts } = useQuery({
    queryKey: ["/api/admin/blog-posts"],
    queryFn: async () => {
      const response = await fetch("/api/admin/blog-posts");
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to fetch posts");
      }
      return response.json();
    },
  });

  const createPost = useMutation({
    mutationFn: async (data: InsertBlogPost) => {
      const response = await fetch("/api/admin/blog-posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create post");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
      blogPostForm.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create blog post",
        variant: "destructive",
      });
    },
  });

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["/api/admin/blog-categories"],
    queryFn: async () => {
      const response = await fetch("/api/admin/blog-categories");
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to fetch categories");
      }
      return response.json();
    },
  });

  return (
    <main className="container py-10">
      <PageTitle pageKey="admin" />
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="posts">Blog Posts</TabsTrigger>
          <TabsTrigger value="scoring">Lead Scoring</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="categories">
          <Card>
            <CardHeader>
              <CardTitle>Create Category</CardTitle>
              <CardDescription>Add a new blog category</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...categoryForm}>
                <form onSubmit={categoryForm.handleSubmit((data) => createCategory.mutate(data))} className="space-y-4">
                  <FormField
                    control={categoryForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name (English)*</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={categoryForm.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug*</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="my-category-slug" />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Only lowercase letters, numbers, and hyphens are allowed
                        </p>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={categoryForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description (English)</FormLabel>
                        <FormControl>
                          <Textarea {...field} value={field.value || ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={categoryForm.control}
                    name="frenchName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name (French)</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={categoryForm.control}
                    name="frenchDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description (French)</FormLabel>
                        <FormControl>
                          <Textarea {...field} value={field.value || ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={createCategory.isPending}
                    className="w-full"
                  >
                    {createCategory.isPending ? "Creating..." : "Create Category"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Existing Categories</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingCategories ? (
                <p>Loading categories...</p>
              ) : (
                <div className="space-y-4">
                  {categories?.map((category: any) => (
                    <div key={category.id} className="p-4 border rounded">
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                      <p className="text-sm text-muted-foreground">Slug: {category.slug}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="posts">
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Create Blog Post</CardTitle>
                <CardDescription>Add a new blog post to your website</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...blogPostForm}>
                  <form onSubmit={blogPostForm.handleSubmit((data) => createPost.mutate(data))} className="space-y-4">
                    <FormField
                      control={blogPostForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={blogPostForm.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={blogPostForm.control}
                      name="summary"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Summary</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={blogPostForm.control}
                      name="imageUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Image URL</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={createPost.isPending}>
                      Create Post
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Existing Posts</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoadingPosts ? (
                  <p>Loading posts...</p>
                ) : (
                  <div className="space-y-4">
                    {posts?.map((post: any) => (
                      <div key={post.id} className="p-4 border rounded">
                        <h3 className="font-semibold">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">{post.summary}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="scoring"> {/* Added Lead Scoring Tab Content */}
          <Card>
            <CardHeader>
              <CardTitle>AI Lead Scoring</CardTitle>
              <CardDescription>
                See how our AI system scores and analyzes leads based on various factors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LeadScoreDemo />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <KeyRound className="w-5 h-5 mr-2" /> API Keys
                </CardTitle>
                <CardDescription>
                  Manage API keys for external integrations with tools like n8n, Zapier, and custom applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6">
                  <AlertTitle className="font-medium">Important Security Note</AlertTitle>
                  <AlertDescription>
                    API keys grant access to your data. Never share your API keys in public repositories, 
                    client-side code, or with untrusted parties.
                  </AlertDescription>
                </Alert>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">n8n Integration Key</h3>
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4 p-4 border rounded-md bg-muted/50">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <FileJson className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">n8n Automation Integration</p>
                          <p className="text-sm text-muted-foreground">Used for blog automation workflows</p>
                        </div>
                        <APIKeyCopyButton apiKey="minecore-n8n-integration-key" />
                      </div>
                      
                      <div className="rounded-md p-4 bg-muted">
                        <h4 className="text-sm font-semibold mb-2">How to use this key</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Include this API key in the HTTP request header when making API calls from n8n:
                        </p>
                        <div className="bg-black text-green-400 p-3 rounded-md text-sm font-mono overflow-x-auto">
                          X-API-Key: minecore-n8n-integration-key
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Available API Integration Endpoints</h3>
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 text-sm">Endpoint</th>
                          <th className="text-left py-2 text-sm">Method</th>
                          <th className="text-left py-2 text-sm">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 font-mono text-xs">/api/integration/blog</td>
                          <td className="py-2 text-sm">POST</td>
                          <td className="py-2 text-sm">Create a new blog post</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-mono text-xs">/api/integration/blog</td>
                          <td className="py-2 text-sm">GET</td>
                          <td className="py-2 text-sm">Get all blog posts</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-mono text-xs">/api/integration/blog/categories</td>
                          <td className="py-2 text-sm">GET</td>
                          <td className="py-2 text-sm">Get all blog categories</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6 flex justify-between">
                <Button variant="outline" asChild>
                  <a href="/integrations/n8n-guide" target="_blank" rel="noopener noreferrer">
                    View Integration Documentation
                  </a>
                </Button>
                <div className="text-sm text-muted-foreground">
                  For help with integrations, contact support
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}