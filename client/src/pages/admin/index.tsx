import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { insertBlogCategorySchema } from "@/schemas/blog-category";
import type { InsertBlogPost, InsertBlogCategory } from "@shared/schema";
import { LeadScoreDemo } from "@/components/lead-score-demo"; // Added import

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
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="posts">Blog Posts</TabsTrigger>
          <TabsTrigger value="scoring">Lead Scoring</TabsTrigger> {/* Added Lead Scoring tab */}
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
      </Tabs>
    </main>
  );
}