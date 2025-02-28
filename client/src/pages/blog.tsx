import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { BlogPost, BlogCategory } from "@shared/schema";

export default function Blog() {
  const { data: categories, isLoading: categoriesLoading } = useQuery<BlogCategory[]>({
    queryKey: ["/api/blog-categories"],
  });

  const { data: posts, isLoading: postsLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  if (categoriesLoading || postsLoading) {
    return (
      <div className="container py-24">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="h-48 bg-muted" />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <main className="py-24">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Latest Insights
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Expert perspectives on digital transformation and technology trends
          </p>
        </motion.div>

        <div className="mt-16">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Posts</TabsTrigger>
              {categories?.map((category) => (
                <TabsTrigger key={category.id} value={category.slug}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts?.map((post, index) => (
                  <BlogPostCard key={post.id} post={post} index={index} category={categories?.find(c => c.id === post.categoryId)} />
                ))}
              </div>
            </TabsContent>

            {categories?.map((category) => (
              <TabsContent key={category.id} value={category.slug}>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {posts
                    ?.filter((post) => post.categoryId === category.id)
                    .map((post, index) => (
                      <BlogPostCard key={post.id} post={post} index={index} category={category} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  );
}

function BlogPostCard({ 
  post, 
  index, 
  category 
}: { 
  post: BlogPost; 
  index: number;
  category?: BlogCategory;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader className="relative h-48 overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </CardHeader>
        <CardContent className="p-6">
          {category && (
            <Badge variant="secondary" className="mb-4">
              {category.name}
            </Badge>
          )}
          <div className="mb-4 text-sm text-muted-foreground">
            {format(new Date(post.publishedAt), "MMMM d, yyyy")}
          </div>
          <CardTitle className="mb-2">{post.title}</CardTitle>
          <CardDescription>{post.summary}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}