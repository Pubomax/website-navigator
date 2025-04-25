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
      title: "Automatisation Marketing",
      description: "Transformez vos prospects en clients fidèles automatiquement grâce à nos solutions d'automatisation marketing intelligentes.",
      icon: MessageSquare,
      link: "/services/marketing-automation"
    },
    {
      title: "Automatisation des Ventes",
      description: "Augmentez vos revenus avec des processus de vente automatisés qui réduisent l'effort manuel et accélèrent les conversions.",
      icon: DollarSign,
      link: "/services/sales-automation"
    },
    {
      title: "Développement & Implémentation",
      description: "Solutions techniques sur mesure comprenant le développement CRM, l'implémentation Kommo et les chatbots intelligents.",
      icon: Code,
      link: "/services/development-implementation"
    }
  ] : [
    {
      title: "Marketing Automation",
      description: "Transform your prospects into loyal customers automatically with our intelligent marketing automation solutions.",
      icon: MessageSquare,
      link: "/services/marketing-automation"
    },
    {
      title: "Sales Automation",
      description: "Increase your revenue with automated sales processes that reduce manual effort and accelerate conversions.",
      icon: DollarSign,
      link: "/services/sales-automation"
    },
    {
      title: "Development & Implementation",
      description: "Custom technical solutions including CRM development, Kommo implementation, and intelligent chatbots.",
      icon: Code,
      link: "/services/development-implementation"
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
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={pillar.link}>
                      {isPathFrench ? "En Savoir Plus" : "Learn More"}
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