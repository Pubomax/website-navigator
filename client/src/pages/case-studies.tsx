import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@shared/schema";

export default function CaseStudies() {
  const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"],
  });

  if (isLoading) {
    return (
      <div className="container py-24">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
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
            Case Studies
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore how we've helped businesses achieve their digital transformation goals
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies?.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="relative h-48 overflow-hidden">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <Badge className="mb-4">{study.industry}</Badge>
                  <CardTitle className="mb-2">{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                  <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-2">Results:</h4>
                    <p className="text-sm text-muted-foreground">
                      {study.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
