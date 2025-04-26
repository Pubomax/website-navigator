import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, ChevronRight, MessageSquare, DollarSign, Code, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section className="section bg-gradient-to-b from-background to-background/95">
      <div className="container-pro">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
            <Globe className="mr-2 h-4 w-4 text-primary/80" />
            {isPathFrench ? "Notre expertise" : "Our expertise"}
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6">
            {content.title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground/90">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {content.pillars.map((pillar, index) => {
            // Generate unique gradient for each pillar
            const gradientColors = [
              "from-blue-500/10 to-indigo-500/10", 
              "from-green-500/10 to-emerald-500/10",
              "from-purple-500/10 to-pink-500/10"
            ];
            
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="group"
              >
                <Card className="h-full flex flex-col bg-card/95 border-border/20 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300">
                  <div className={cn("h-2 w-full bg-gradient-to-r", gradientColors[index])}></div>
                  <CardHeader className="pt-8 px-6">
                    <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300 ring-1 ring-primary/10 group-hover:ring-primary/20">
                      <pillar.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl font-medium tracking-tight">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow px-6">
                    <p className="text-muted-foreground/90 leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3 p-6 pt-4 border-t border-border/10">
                    <Button variant="outline" className="w-full justify-start font-normal text-sm px-3 h-9" asChild>
                      <Link href={pillar.link}>
                        {isPathFrench ? "Explorer les services" : "Explore services"}
                        <ChevronRight className="ml-1 h-4 w-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                    <Button variant="gradient" className="w-full shadow-sm" asChild>
                      <Link href={isPathFrench ? "/fr/consultation" : "/consultation"}>
                        {isPathFrench ? "Commencer" : "Get Started"}
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}