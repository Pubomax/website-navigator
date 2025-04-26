import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, MessageSquare, DollarSign, Code } from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Ce Que Nous Faisons" : "What We Do",
  subtitle: isPathFrench 
    ? "Minecore Group se spécialise dans les solutions d'automatisation IA conçues pour rationaliser les opérations commerciales et stimuler la croissance. Notre expertise principale réside dans trois domaines clés:"
    : "Minecore Group specializes in AI Automation solutions designed to streamline business operations and drive growth. Our core expertise lies in three key areas:",
  pillars: isPathFrench ? [
    {
      title: "Fondation Numérique",
      description: "Établissez une présence numérique solide avec nos solutions qui créent une base d'automatisation efficace pour votre entreprise.",
      icon: MessageSquare,
      link: "/services/digital-foundation"
    },
    {
      title: "Automatisation IA",
      description: "Augmentez vos revenus et réduisez votre charge de travail grâce à nos solutions d'automatisation IA intelligentes.",
      icon: DollarSign,
      link: "/services/ai-automation-starter"
    },
    {
      title: "Développement Sur Mesure",
      description: "Solutions logicielles personnalisées conçues pour vos besoins uniques, du développement CRM aux chatbots intelligents.",
      icon: Code,
      link: "/services/custom-software"
    }
  ] : [
    {
      title: "Digital Foundation",
      description: "Establish a strong digital presence with our solutions that create an effective automation foundation for your business.",
      icon: MessageSquare,
      link: "/services/digital-foundation"
    },
    {
      title: "AI Automation",
      description: "Increase your revenue and reduce your workload with our intelligent AI automation solutions.",
      icon: DollarSign,
      link: "/services/ai-automation-starter"
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions designed for your unique needs, from custom CRM development to intelligent chatbots.",
      icon: Code,
      link: "/services/custom-software"
    }
  ]
});

export function WhatWeDo() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {content.title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col shadow-lg border-primary/10 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="inline-block p-3 rounded-lg bg-primary/10 mb-4">
                    <pillar.icon className={`h-6 w-6 ${
                      pillar.title.includes("Digital") || pillar.title.includes("Fondation") 
                      ? "text-blue-500" 
                      : pillar.title.includes("AI") || pillar.title.includes("IA") 
                        ? "text-emerald-500" 
                        : "text-purple-500"
                    }`} />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={pillar.link}>
                      {isPathFrench ? "En Savoir Plus" : "Learn More"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="default" className="w-full" asChild>
                    <Link href={isPathFrench ? "/fr/consultation" : "/consultation"}>
                      {isPathFrench ? "Commencer" : "Get Started"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}