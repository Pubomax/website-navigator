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
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {content.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-primary/20 shadow-lg overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary/60"></div>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-3">
                <span className="text-3xl sm:text-4xl font-bold text-primary">{content.price}</span>
              </div>
              <CardTitle className="text-xl font-medium">{content.priceSubtitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 border-t border-b border-muted p-6">
              {content.features.map((feature) => (
                <div key={feature.title} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-0.5">
                      <feature.icon className={`h-4 w-4 ${
                        feature.title.includes("Social") || feature.title.includes("Réseaux") 
                          ? "text-blue-500" 
                          : feature.title.includes("Report") || feature.title.includes("Rapport")
                            ? "text-orange-500"
                            : feature.title.includes("Nurturing") || feature.title.includes("Lead")
                              ? "text-purple-500"
                              : "text-cyan-500"
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="p-6 flex justify-center">
              <OfferPopupForm offerType="Standard Package $500/month">
                <Button size="lg" className="w-full sm:w-auto">
                  {content.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </OfferPopupForm>
            </CardFooter>
          </Card>
        </motion.div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {isPathFrench 
              ? "Pas de contrat à long terme requis. Annulez à tout moment. Commencez par un appel de consultation pour voir si ce forfait est adapté à vos besoins."
              : "No long-term contract required. Cancel anytime. Start with a consultation call to see if this package fits your needs."}
          </p>
        </div>
      </div>
    </section>
  );
}