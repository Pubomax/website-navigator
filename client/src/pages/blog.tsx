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
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  if (isLoading) {
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
      <div className="container">
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post, index) => (
            <motion.div
              key={post.id}
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
                  <div className="mb-4 text-sm text-muted-foreground">
                    {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                  </div>
                  <CardTitle className="mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.summary}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
