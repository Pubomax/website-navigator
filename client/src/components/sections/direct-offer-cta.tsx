import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, Check, Calendar, BarChart, Users, MessageSquareText } from "lucide-react";
import { OfferPopupForm } from "./offer-popup-form";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Commencez à Automatiser Aujourd'hui" 
    : "Start Automating Today",
  subtitle: isPathFrench
    ? "Notre pack d'automatisation tout-en-un, conçu pour maximiser vos résultats avec un minimum d'effort"
    : "Our all-in-one automation package, designed to maximize your results with minimal effort",
  price: isPathFrench ? "500$/mois" : "$500/month",
  priceSubtitle: isPathFrench 
    ? "Tout ce dont vous avez besoin pour commencer à automatiser" 
    : "Everything you need to start automating",
  features: isPathFrench ? [
    {
      title: "Publications sur Réseaux Sociaux Automatisées",
      description: "Publiez automatiquement sur toutes vos plateformes de médias sociaux",
      icon: MessageSquareText
    },
    {
      title: "Rapports Hebdomadaires Automatisés",
      description: "Obtenez des rapports automatisés sur vos performances chaque semaine",
      icon: BarChart
    },
    {
      title: "Gestion de Plateforme de Nurturing",
      description: "Nous gérons votre plateforme de nurturing de leads pour vous",
      icon: Users
    },
    {
      title: "Réunion Individuelle Mensuelle",
      description: "Session de stratégie mensuelle d'une heure avec un expert",
      icon: Calendar
    },
  ] : [
    {
      title: "Automated Social Media Posting",
      description: "Automatically post to all your social media platforms",
      icon: MessageSquareText
    },
    {
      title: "Weekly Automated Reporting",
      description: "Get automated reports on your performance each week",
      icon: BarChart
    },
    {
      title: "Lead Nurturing Platform Management",
      description: "We manage your lead nurturing platform for you",
      icon: Users
    },
    {
      title: "Monthly One-on-One Meeting",
      description: "One hour monthly strategy session with an expert",
      icon: Calendar
    },
  ],
  cta: isPathFrench ? "Commencer Maintenant" : "Get Started Now"
});

export function DirectOfferCTA() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-background/80 to-primary/5">
      {/* Background decoration - professional subtle */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container-pro">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary/80 text-sm font-medium border border-primary/10">
            <span className="mr-1.5 relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Limited time offer
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6 gradient-text">
            {content.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground/90 leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-primary/10 shadow-xl overflow-hidden rounded-2xl bg-card/95 backdrop-blur-sm">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary to-primary/60"></div>
            <CardHeader className="text-center py-8 px-8 pb-6">
              <div className="mx-auto mb-3 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl font-medium tracking-tight gradient-text">{content.price}</span>
              </div>
              <CardTitle className="text-xl font-medium text-foreground/90">{content.priceSubtitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 border-t border-b border-border/30 px-8 py-8">
              {content.features.map((feature, index) => (
                <div key={feature.title} className="flex items-start group">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground/90 mb-1 group-hover:text-primary/90 transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground/80 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="px-8 py-8 flex justify-center">
              <OfferPopupForm offerType="Standard Package $500/month">
                <Button size="xl" variant="gradient" className="w-full font-medium shadow-lg">
                  {content.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </OfferPopupForm>
            </CardFooter>
          </Card>
        </motion.div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground/90 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            {isPathFrench 
              ? "Pas de contrat à long terme requis. Annulez à tout moment."
              : "No long-term contract required. Cancel anytime."}
          </p>
        </div>
      </div>
    </section>
  );
}