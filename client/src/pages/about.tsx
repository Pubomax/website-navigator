import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Lightbulb, Users } from "lucide-react";
import { useLocation } from "wouter";
import { PageTitle } from "@/components/page-title";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "À Propos de Minecore Group" : "About Minecore Group",
  subtitle: isPathFrench 
    ? "Un leader canadien de la transformation numérique, aidant les entreprises à embrasser l'avenir grâce à des solutions technologiques innovantes."
    : "A Canadian leader in digital transformation, helping businesses embrace the future through innovative technology solutions.",
  sections: {
    values: {
      title: isPathFrench ? "Nos Valeurs" : "Our Values",
      items: isPathFrench ? [
        {
          name: "Innovation",
          description: "Repousser les limites de la transformation numérique et des solutions d'IA",
          icon: Lightbulb,
        },
        {
          name: "Intégrité",
          description: "Bâtir la confiance grâce à des pratiques transparentes et éthiques",
          icon: Shield,
        },
        {
          name: "Excellence",
          description: "Fournir des résultats exceptionnels qui dépassent les attentes",
          icon: Target,
        },
        {
          name: "Collaboration",
          description: "Travailler ensemble pour obtenir des résultats transformateurs",
          icon: Users,
        },
      ] : [
        {
          name: "Innovation",
          description: "Pushing boundaries in digital transformation and AI solutions",
          icon: Lightbulb,
        },
        {
          name: "Integrity",
          description: "Building trust through transparent and ethical practices",
          icon: Shield,
        },
        {
          name: "Excellence",
          description: "Delivering exceptional results that exceed expectations",
          icon: Target,
        },
        {
          name: "Collaboration",
          description: "Working together to achieve transformative outcomes",
          icon: Users,
        },
      ]
    }
  }
});

export default function About() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="py-24">
      <PageTitle pageKey="about" />
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

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-16">{content.sections.values.title}</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {content.sections.values.items.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <value.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{value.name}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}