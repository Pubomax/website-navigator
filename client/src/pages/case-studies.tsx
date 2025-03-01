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
import { useLocation } from "wouter";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Études de Cas" : "Case Studies",
  subtitle: isPathFrench
    ? "Découvrez comment nous avons aidé les entreprises à atteindre leurs objectifs de transformation numérique"
    : "Explore how we've helped businesses achieve their digital transformation goals",
  results: isPathFrench ? "Résultats" : "Results"
});

export default function CaseStudies() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

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
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content.subtitle}
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
                    alt={isPathFrench ? study.frenchTitle || study.title : study.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <Badge className="mb-4">
                    {isPathFrench ? study.frenchIndustry || study.industry : study.industry}
                  </Badge>
                  <CardTitle className="mb-2">
                    {isPathFrench ? study.frenchTitle || study.title : study.title}
                  </CardTitle>
                  <CardDescription>
                    {isPathFrench ? study.frenchDescription || study.description : study.description}
                  </CardDescription>
                  <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-2">{content.results}:</h4>
                    <p className="text-sm text-muted-foreground">
                      {isPathFrench ? study.frenchResults || study.results : study.results}
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