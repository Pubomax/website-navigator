import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PageTitle } from "@/components/page-title";
import { ArrowLeft, Calendar, Tag, Clock, ExternalLink, Share2 } from "lucide-react";
import type { BlogPost, BlogCategory } from "@shared/schema";

export default function BlogPostDetail() {
  const params = useParams<{ id: string }>();
  const [location] = useLocation();
  const { toast } = useToast();
  const isPathFrench = location.startsWith("/fr");
  const blogPostId = parseInt(params.id);
  
  const { data: post, isLoading: postLoading, error } = useQuery<BlogPost>({
    queryKey: [`/api/blog-posts/${blogPostId}`],
    enabled: !isNaN(blogPostId)
  });
  
  const { data: categories } = useQuery<BlogCategory[]>({
    queryKey: ["/api/blog-categories"],
  });
  
  const { data: relatedPosts } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
    select: (posts) => {
      if (!post) return [];
      return posts
        .filter(p => p.id !== post.id && p.categoryId === post.categoryId)
        .slice(0, 3);
    },
    enabled: !!post
  });
  
  useEffect(() => {
    if (error) {
      toast({
        title: isPathFrench ? "Erreur" : "Error",
        description: isPathFrench 
          ? "Nous n'avons pas pu charger cet article. Veuillez réessayer plus tard." 
          : "We couldn't load this blog post. Please try again later.",
        variant: "destructive",
      });
    }
  }, [error, toast, isPathFrench]);
  
  if (postLoading || !post) {
    return (
      <div className="container py-24">
        <div className="mx-auto max-w-4xl animate-pulse">
          <div className="h-14 bg-muted rounded mb-8"></div>
          <div className="h-80 bg-muted rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  
  const category = categories?.find(c => c.id === post.categoryId);
  const categoryName = category 
    ? (isPathFrench ? category.frenchName || category.name : category.name) 
    : "";
  
  const title = isPathFrench ? post.frenchTitle || post.title : post.title;
  const content = isPathFrench ? post.frenchContent || post.content : post.content;
  
  // Function to share the article
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href,
      }).catch(error => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: isPathFrench ? "Lien copié!" : "Link copied!",
        description: isPathFrench 
          ? "L'URL de cet article a été copiée dans votre presse-papiers." 
          : "The URL for this article has been copied to your clipboard.",
      });
    }
  };
  
  return (
    <main className="py-16 md:py-24">
      <PageTitle 
        pageKey="blog" 
        customTitle={title} 
        customDescription={isPathFrench ? post.frenchSummary || post.summary : post.summary}
      />
      
      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={isPathFrench ? "/fr/blog" : "/blog"}>
              <Button variant="ghost" className="mb-6 pl-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {isPathFrench ? "Retour aux articles" : "Back to all posts"}
              </Button>
            </Link>
            
            <div className="flex flex-wrap gap-4 items-center mb-6">
              {category && (
                <Badge variant="secondary" className="text-sm">
                  <Tag className="mr-1 h-3 w-3" />
                  {categoryName}
                </Badge>
              )}
              <span className="text-sm text-muted-foreground flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {format(new Date(post.publishedAt), "MMMM d, yyyy", {
                  locale: isPathFrench ? fr : undefined
                })}
              </span>
              <span className="text-sm text-muted-foreground flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {isPathFrench ? "5 min de lecture" : "5 min read"}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {title}
            </h1>
            
            <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
              <img
                src={post.imageUrl}
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Social sharing buttons */}
            <div className="flex justify-end mb-8">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                {isPathFrench ? "Partager" : "Share"}
              </Button>
            </div>
            
            {/* Article content with strategic backlinks */}
            <div 
              className="prose prose-lg max-w-none dark:prose-invert mb-12" 
              dangerouslySetInnerHTML={{ 
                __html: processContent(content) 
              }} 
            />
            
            <Separator className="my-12" />
            
            {/* Related articles section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {isPathFrench ? "Articles connexes" : "Related articles"}
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts?.map((relatedPost) => (
                  <Card key={relatedPost.id} className="h-full">
                    <CardHeader className="relative h-40 overflow-hidden p-0">
                      <img
                        src={relatedPost.imageUrl}
                        alt={isPathFrench ? relatedPost.frenchTitle || relatedPost.title : relatedPost.title}
                        loading="lazy"
                        className="object-cover w-full h-full"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg mb-2">
                        {isPathFrench ? relatedPost.frenchTitle || relatedPost.title : relatedPost.title}
                      </CardTitle>
                      <Link href={`/blog/${relatedPost.id}`}>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          {isPathFrench ? "Lire l'article" : "Read article"}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

// Helper function to process content and add backlinks
function processContent(content: string): string {
  // Strategic backlinks to authoritative AI and automation websites
  const backlinks = [
    {
      keyword: 'artificial intelligence',
      url: 'https://ai.google/',
      title: 'Google AI research'
    },
    {
      keyword: 'machine learning',
      url: 'https://www.microsoft.com/en-us/ai',
      title: 'Microsoft AI platform'
    },
    {
      keyword: 'automation',
      url: 'https://zapier.com/',
      title: 'Zapier automation platform'
    },
    {
      keyword: 'AI tools',
      url: 'https://openai.com/',
      title: 'OpenAI'
    },
    {
      keyword: 'business automation',
      url: 'https://www.salesforce.com/products/automation/',
      title: 'Salesforce automation solutions'
    },
    {
      keyword: 'workflow automation',
      url: 'https://www.n8n.io/',
      title: 'n8n workflow automation'
    },
    {
      keyword: 'AI for business',
      url: 'https://www.ibm.com/watson',
      title: 'IBM Watson'
    },
    {
      keyword: 'chatbots',
      url: 'https://www.zendesk.com/service/answer-bot/',
      title: 'Zendesk Answer Bot'
    },
    {
      keyword: 'generative AI',
      url: 'https://stability.ai/',
      title: 'Stability AI'
    },
    {
      keyword: 'natural language processing',
      url: 'https://huggingface.co/',
      title: 'Hugging Face'
    }
  ];
  
  let processedContent = content;
  
  // Only add a maximum of 3 backlinks per article to avoid overoptimization
  const maxBacklinks = 3;
  let backlinksAdded = 0;
  
  for (const backlink of backlinks) {
    if (backlinksAdded >= maxBacklinks) break;
    
    // Check if content contains the keyword (case insensitive)
    const keywordRegex = new RegExp(`\\b${backlink.keyword}\\b`, 'i');
    
    if (keywordRegex.test(processedContent) && !processedContent.includes(`href="${backlink.url}"`)) {
      // Replace only the first occurrence to avoid excessive linking
      processedContent = processedContent.replace(
        keywordRegex,
        `<a href="${backlink.url}" title="${backlink.title}" target="_blank" rel="noopener noreferrer">${backlink.keyword}<span class="inline-block ml-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span></a>`
      );
      backlinksAdded++;
    }
  }
  
  return processedContent;
}