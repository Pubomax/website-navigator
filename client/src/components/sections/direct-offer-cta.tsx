import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { 
  ArrowRight, Check, Calendar, BarChart, Users, MessageSquareText, 
  Search, Linkedin, MapPin, FileSpreadsheet, Brain, 
  MessageCircle, Mail, PhoneCall, BarChart2, Bot,
  ChevronRight
} from "lucide-react";
import { OfferPopupForm } from "./offer-popup-form";
import { useState } from "react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Solutions d'Automatisation" 
    : "Automation Solutions",
  subtitle: isPathFrench
    ? "Découvrez nos solutions spécialisées pour accélérer la croissance de votre entreprise"
    : "Discover our specialized solutions to accelerate your business growth",
  disclaimer: isPathFrench 
    ? "Pas de contrat à long terme requis. Annulez à tout moment. Commencez par un appel de consultation pour voir si nos solutions sont adaptées à vos besoins."
    : "No long-term contract required. Cancel anytime. Start with a consultation call to see if our solutions fit your needs.",
  cta: isPathFrench ? "Commencer Maintenant" : "Get Started Now",
  
  // The offers
  offers: [
    {
      id: "starter",
      title: isPathFrench ? "Automatisation de Base" : "Starter Automation",
      price: isPathFrench ? "500$/mois" : "$500/month",
      tagline: isPathFrench 
        ? "Automatisez vos tâches marketing et obtenez des analyses d'experts" 
        : "Automate your marketing tasks and get expert analysis",
      description: isPathFrench
        ? "Une solution complète pour automatiser vos publications sur les réseaux sociaux, vos rapports hebdomadaires et votre plateforme de nurturing des leads."
        : "A complete solution to automate your social media posts, weekly reports, and lead nurturing platform.",
      color: "blue",
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
    },
    {
      id: "chatbot",
      title: isPathFrench ? "Service Chatbot & Capture de Leads" : "Chatbot & Lead Capture Service",
      price: isPathFrench ? "800$/mois" : "$800/month",
      tagline: isPathFrench 
        ? "Capturez et qualifiez vos leads automatiquement 24h/24 et 7j/7" 
        : "Capture and qualify leads automatically 24/7",
      description: isPathFrench
        ? "Un chatbot intelligent pour convertir les visiteurs de votre site web en prospects qualifiés, même lorsque vous êtes fermé."
        : "An intelligent chatbot to convert website visitors into qualified prospects, even when you're closed.",
      color: "emerald",
      features: isPathFrench ? [
        {
          title: "Chatbot sur Votre Site Web 24/7",
          description: "Répondez automatiquement aux questions courantes, même lorsque vous êtes fermé",
          icon: MessageCircle
        },
        {
          title: "Capture Automatique de Leads depuis les Discussions",
          description: "Obtenez les emails et numéros de téléphone des visiteurs prêts à acheter",
          icon: Mail
        },
        {
          title: "Transfert Simple vers un Humain",
          description: "Si le chatbot ne peut pas aider, il transfère à vous ou votre équipe",
          icon: PhoneCall
        },
        {
          title: "Rapport Hebdomadaire de Performance des Discussions",
          description: "Voyez combien de discussions et de leads votre bot a créés chaque semaine",
          icon: BarChart2
        },
        {
          title: "Session Mensuelle d'Amélioration du Chat",
          description: "Une heure avec un expert en chatbot pour le rendre encore meilleur",
          icon: Bot
        },
      ] : [
        {
          title: "Chatbot on Your Website 24/7",
          description: "Answer common questions automatically — even when you're closed",
          icon: MessageCircle
        },
        {
          title: "Automatic Lead Capture from Chats",
          description: "Get emails and phone numbers from visitors ready to buy",
          icon: Mail
        },
        {
          title: "Simple Human Handoff",
          description: "If the chatbot can't help, transfer to you or your team",
          icon: PhoneCall
        },
        {
          title: "Weekly Chat Performance Report",
          description: "See how many chats and leads your bot created each week",
          icon: BarChart2
        },
        {
          title: "Monthly Chat Improvement Session",
          description: "One hour with a chatbot expert to make it even better",
          icon: Bot
        },
      ],
    },
    {
      id: "qualified",
      title: isPathFrench ? "Service de Génération de Leads" : "Lead Generation Service",
      price: isPathFrench ? "1500$/mois" : "$1,500/month",
      tagline: isPathFrench 
        ? "Nous trouvons et vous livrons des leads qualifiés chaque semaine" 
        : "We find and deliver qualified leads to you every week",
      description: isPathFrench
        ? "Notre équipe recherche activement des prospects qualifiés pour votre entreprise à travers les réseaux sociaux, LinkedIn et les annuaires locaux."
        : "Our team actively researches qualified prospects for your business through social media, LinkedIn, and local directories.",
      color: "purple",
      features: isPathFrench ? [
        {
          title: "Recherche de Leads sur les Réseaux Sociaux",
          description: "Nous analysons Facebook, Instagram et d'autres plateformes pour trouver des personnes qui recherchent des services comme les vôtres",
          icon: Search
        },
        {
          title: "Collecte de Prospects LinkedIn",
          description: "Nous extrayons automatiquement les coordonnées des profils LinkedIn qui correspondent à votre client idéal",
          icon: Linkedin
        },
        {
          title: "Automatisation de la Recherche d'Entreprises Locales",
          description: "Nous recherchons sur Google Maps et les annuaires d'entreprises pour trouver des sociétés près de chez vous qui ont besoin de vos services",
          icon: MapPin
        },
        {
          title: "Liste Hebdomadaire de Leads",
          description: "Vous recevez un fichier Excel/CSV simple chaque semaine avec des leads prêts à être contactés",
          icon: FileSpreadsheet
        },
        {
          title: "Session Mensuelle de Stratégie de Leads",
          description: "Une heure avec un expert en génération de leads pour améliorer vos résultats",
          icon: Brain
        },
      ] : [
        {
          title: "Social Media Lead Finder",
          description: "We scan Facebook, Instagram, and other platforms to find people asking for services like yours",
          icon: Search
        },
        {
          title: "LinkedIn Prospect Collection",
          description: "We automatically pull contact details from LinkedIn profiles that fit your ideal customer",
          icon: Linkedin
        },
        {
          title: "Local Business Search Automation",
          description: "We search Google Maps and Business Listings to find companies near you that need your services",
          icon: MapPin
        },
        {
          title: "Weekly Leads List",
          description: "You get a simple Excel/CSV file every week with ready-to-contact leads",
          icon: FileSpreadsheet
        },
        {
          title: "Monthly Leads Strategy Session",
          description: "One hour with a lead generation expert to improve your results",
          icon: Brain
        },
      ],
    }
  ]
});

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type Offer = {
  id: string;
  title: string;
  price: string;
  tagline: string;
  description: string;
  color: string;
  features: Feature[];
};

type OfferCardProps = {
  offer: Offer;
  ctaText: string;
  expanded: boolean;
  onToggle: () => void;
};

const OfferCard = ({ offer, ctaText, expanded, onToggle }: OfferCardProps) => {
  const colorMap = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-600 dark:text-blue-400",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      icon: "text-blue-500",
      topBg: "bg-gradient-to-r from-blue-500 to-blue-400",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-purple-200 dark:border-purple-800",
      text: "text-purple-600 dark:text-purple-400",
      button: "bg-purple-600 hover:bg-purple-700 text-white",
      icon: "text-purple-500",
      topBg: "bg-gradient-to-r from-purple-500 to-purple-400",
    },
    emerald: {
      bg: "bg-emerald-50 dark:bg-emerald-950/30",
      border: "border-emerald-200 dark:border-emerald-800",
      text: "text-emerald-600 dark:text-emerald-400",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white",
      icon: "text-emerald-500",
      topBg: "bg-gradient-to-r from-emerald-500 to-emerald-400",
    }
  };
  
  const colors = colorMap[offer.color as keyof typeof colorMap];
  
  return (
    <Card className={`${colors.bg} ${colors.border} shadow-lg overflow-hidden h-full transition-all duration-300`}>
      <div className={`${colors.topBg} h-1 w-full`}></div>
      <CardHeader className="pb-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <span className={`${colors.text} text-2xl font-bold block mb-2`}>{offer.price}</span>
              <CardTitle className="text-xl font-medium">{offer.title}</CardTitle>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`${expanded ? 'rotate-90' : ''} transition-transform`}
              onClick={onToggle}
              aria-label={expanded ? "Collapse details" : "Expand details"}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-muted-foreground text-sm mt-2">{offer.tagline}</p>
          {expanded && (
            <p className="mt-4 text-sm text-muted-foreground">{offer.description}</p>
          )}
        </div>
      </CardHeader>
      
      {expanded && (
        <CardContent className="pt-0 pb-4">
          <h4 className="font-medium text-sm mb-3">What you get:</h4>
          <ul className="space-y-3">
            {offer.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <feature.icon className={`h-4 w-4 ${colors.icon}`} />
                    <span className="font-medium text-sm">{feature.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
      
      <CardFooter className={`${expanded ? 'pt-4' : 'pt-0'} pb-6 px-6`}>
        <OfferPopupForm offerType={`${offer.title} - ${offer.price}`}>
          <Button 
            size="lg" 
            className={`w-full ${colors.button}`}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </OfferPopupForm>
      </CardFooter>
    </Card>
  );
};

export function DirectOfferCTA() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);
  
  // Track expanded state for each offer
  const [expandedOffer, setExpandedOffer] = useState<string | null>(null);
  
  const toggleOfferExpansion = (offerId: string) => {
    setExpandedOffer(expandedOffer === offerId ? null : offerId);
  };

  return (
    <section className="py-16 sm:py-24 bg-background">
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
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {content.offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <OfferCard 
                offer={offer}
                ctaText={content.cta}
                expanded={expandedOffer === offer.id}
                onToggle={() => toggleOfferExpansion(offer.id)}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {content.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}