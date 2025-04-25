import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { DollarSign, Clock, ChartBar, Zap } from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Développez Vos Revenus en 30 Jours" : "Grow Your Revenue in 30 Days",
  subtitle: isPathFrench 
    ? "Un programme accéléré pour transformer vos prospects en clients payants rapidement et automatiquement."
    : "A fast-track program to turn your prospects into paying customers quickly and automatically.",
  overview: {
    title: isPathFrench ? "Pourquoi Ça Marche" : "Why It Works",
    content: isPathFrench
      ? "Notre programme de 30 jours combine l'automatisation intelligente et le nurturing personnalisé pour générer des revenus rapidement. Pas de longues consultations, juste des résultats rapides."
      : "Our 30-day program combines smart automation and personalized nurturing to generate revenue fast. No lengthy consultations, just quick results."
  },
  benefits: {
    title: isPathFrench ? "Résultats Garantis" : "Guaranteed Results",
    items: isPathFrench ? [
      {
        icon: DollarSign,
        title: "Plus de Revenus",
        description: "Augmentez vos revenus de 30% en moyenne dès le premier mois"
      },
      {
        icon: Clock,
        title: "Gagnez du Temps",
        description: "Automatisez 80% de votre processus de nurturing des leads"
      },
      {
        icon: ChartBar,
        title: "Conversions Améliorées",
        description: "Doublez vos taux de conversion avec le scoring AI"
      },
      {
        icon: Zap,
        title: "Mise en Place Rapide",
        description: "Système opérationnel en 48 heures"
      }
    ] : [
      {
        icon: DollarSign,
        title: "More Revenue",
        description: "Increase your revenue by 30% on average in the first month"
      },
      {
        icon: Clock,
        title: "Save Time",
        description: "Automate 80% of your lead nurturing process"
      },
      {
        icon: ChartBar,
        title: "Better Conversions",
        description: "Double your conversion rates with AI scoring"
      },
      {
        icon: Zap,
        title: "Quick Setup",
        description: "Get up and running in 48 hours"
      }
    ]
  },
  process: {
    title: isPathFrench ? "En 3 Étapes Simples" : "3 Simple Steps",
    steps: isPathFrench ? [
      "Connectez vos sources de leads en 1 clic",
      "Activez nos séquences de nurturing éprouvées",
      "Regardez vos revenus augmenter automatiquement"
    ] : [
      "Connect your lead sources with 1 click",
      "Activate our proven nurturing sequences",
      "Watch your revenue grow automatically"
    ]
  },
  cta: {
    primary: isPathFrench ? "Commencer à Gagner Plus" : "Start Making Money",
    secondary: isPathFrench ? "Voir les Résultats" : "See Results"
  }
});

export default function RevenueAccelerator() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {content.subtitle}
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-semibold mb-6">{content.overview.title}</h2>
              <p className="text-lg text-muted-foreground">{content.overview.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-8">{content.benefits.title}</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {content.benefits.items.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">{content.process.title}</h2>
              <div className="space-y-4">
                {content.process.steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                  {content.cta.primary}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={isPathFrench ? "/fr/case-studies" : "/case-studies"}>
                  {content.cta.secondary}
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}