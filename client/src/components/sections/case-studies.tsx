import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CaseStudy } from "@shared/schema";

export function CaseStudies() {
  const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"],
  });

  if (isLoading) {
    return (
      <div className="container py-16 sm:py-24 px-4 sm:px-6">
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
    <section className="py-16 sm:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
            Success Stories
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
            See how we've helped businesses achieve their digital transformation goals
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies?.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="relative h-48 overflow-hidden p-0">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-xl">{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                  <div className="mt-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {study.industry}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}