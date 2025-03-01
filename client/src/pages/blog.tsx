import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
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
import { useLocation } from "wouter";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Derniers Articles" : "Latest Insights",
  subtitle: isPathFrench
    ? "Perspectives d'experts sur la transformation numérique et les tendances technologiques"
    : "Expert perspectives on digital transformation and technology trends",
  tabs: {
    all: isPathFrench ? "Tous les Articles" : "All Posts"
  }
});

export default function Blog() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

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
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="mt-16">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">{content.tabs.all}</TabsTrigger>
              {categories?.map((category) => (
                <TabsTrigger key={category.id} value={category.slug}>
                  {isPathFrench ? category.frenchName || category.name : category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts?.map((post, index) => (
                  <BlogPostCard 
                    key={post.id} 
                    post={post} 
                    index={index} 
                    category={categories?.find(c => c.id === post.categoryId)}
                    isPathFrench={isPathFrench}
                  />
                ))}
              </div>
            </TabsContent>

            {categories?.map((category) => (
              <TabsContent key={category.id} value={category.slug}>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {posts
                    ?.filter((post) => post.categoryId === category.id)
                    .map((post, index) => (
                      <BlogPostCard 
                        key={post.id} 
                        post={post} 
                        index={index} 
                        category={category}
                        isPathFrench={isPathFrench}
                      />
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
  category,
  isPathFrench 
}: { 
  post: BlogPost; 
  index: number;
  category?: BlogCategory;
  isPathFrench: boolean;
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
            alt={isPathFrench ? post.frenchTitle || post.title : post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </CardHeader>
        <CardContent className="p-6">
          {category && (
            <Badge variant="secondary" className="mb-4">
              {isPathFrench ? category.frenchName || category.name : category.name}
            </Badge>
          )}
          <div className="mb-4 text-sm text-muted-foreground">
            {format(new Date(post.publishedAt), "MMMM d, yyyy", {
              locale: isPathFrench ? fr : undefined
            })}
          </div>
          <CardTitle className="mb-2">
            {isPathFrench ? post.frenchTitle || post.title : post.title}
          </CardTitle>
          <CardDescription>
            {isPathFrench ? post.frenchSummary || post.summary : post.summary}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}