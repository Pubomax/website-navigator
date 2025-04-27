import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { 
  ArrowRight, Check, Calendar, BarChart, Users, MessageSquareText, 
  Search, Linkedin, MapPin, FileSpreadsheet, Brain, 
  MessageCircle, Mail, PhoneCall, BarChart2, Bot,
  ChevronRight
} from "lucide-react";
import { OfferPopupForm } from "./offer-popup-form";

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
  readMore: isPathFrench ? "Voir les détails" : "View details",
  
  // The offers
  offers: [
    {
      id: "starter",
      title: isPathFrench ? "Automatisation de Base" : "Starter Automation",
      price: isPathFrench ? "500$/mois" : "$500/month",
      testimonyTitle: isPathFrench 
        ? "La solution tout-en-un pour l'automatisation de vos tâches marketing." 
        : "The all-in-one solution for automating your marketing tasks.",
      tagline: isPathFrench 
        ? "Automatisez vos tâches marketing et obtenez des analyses d'experts" 
        : "Automate your marketing tasks and get expert analysis",
      testimony: isPathFrench
        ? "L'automatisation nous permet de publier régulièrement du contenu sur nos réseaux sociaux sans y passer des heures. Les rapports hebdomadaires nous aident à suivre nos progrès et à prendre de meilleures décisions."
        : "Automation allows us to post content regularly on our social media without spending hours on it. The weekly reports help us track our progress and make better decisions.",
      person: isPathFrench ? "Marie Dubois, Marketing Manager" : "John Smith, Marketing Manager",
      color: "indigo",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2070&auto=format&fit=crop",
      features: isPathFrench ? [
        {
          title: "Publications sur Réseaux Sociaux Automatisées",
          description: "Publiez automatiquement sur toutes vos plateformes",
          icon: MessageSquareText
        },
        {
          title: "Rapports Hebdomadaires Automatisés",
          description: "Obtenez des rapports sur vos performances",
          icon: BarChart
        },
        {
          title: "Gestion de Plateforme de Nurturing",
          description: "Nous gérons votre plateforme de nurturing",
          icon: Users
        },
        {
          title: "Réunion Individuelle Mensuelle",
          description: "Session de stratégie avec un expert",
          icon: Calendar
        },
      ] : [
        {
          title: "Automated Social Media Posting",
          description: "Automatically post to all your platforms",
          icon: MessageSquareText
        },
        {
          title: "Weekly Automated Reporting",
          description: "Get reports on your performance each week",
          icon: BarChart
        },
        {
          title: "Lead Nurturing Platform Management",
          description: "We manage your lead nurturing platform",
          icon: Users
        },
        {
          title: "Monthly One-on-One Meeting",
          description: "Strategy session with an expert",
          icon: Calendar
        },
      ],
    },
    {
      id: "chatbot",
      title: isPathFrench ? "Service Chatbot & Capture de Leads" : "Chatbot & Lead Capture Service",
      price: isPathFrench ? "800$/mois" : "$800/month",
      testimonyTitle: isPathFrench 
        ? "Répondez automatiquement aux questions et capturez des leads 24h/24." 
        : "Automatically answer questions and capture leads 24/7.",
      tagline: isPathFrench 
        ? "Capturez et qualifiez vos leads automatiquement 24h/24 et 7j/7" 
        : "Capture and qualify leads automatically 24/7",
      testimony: isPathFrench
        ? "Notre chatbot a transformé notre capacité à capturer des leads. Il répond aux questions de base même quand notre équipe n'est pas disponible, et nous envoie les informations des visiteurs intéressés directement dans notre CRM."
        : "Our chatbot has transformed our ability to capture leads. It answers basic questions even when our team isn't available, and sends information from interested visitors directly to our CRM.",
      person: isPathFrench ? "Thomas Martin, PDG" : "Sarah Johnson, CEO",
      color: "emerald",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974&auto=format&fit=crop",
      features: isPathFrench ? [
        {
          title: "Chatbot sur Votre Site Web 24/7",
          description: "Répondez aux questions automatiquement",
          icon: MessageCircle
        },
        {
          title: "Capture Automatique de Leads",
          description: "Obtenez les emails et numéros de téléphone",
          icon: Mail
        },
        {
          title: "Transfert Simple vers un Humain",
          description: "Transfert à vous ou votre équipe",
          icon: PhoneCall
        },
        {
          title: "Rapport de Performance",
          description: "Voyez combien de leads créés",
          icon: BarChart2
        },
        {
          title: "Session d'Amélioration du Chat",
          description: "Une heure avec un expert en chatbot",
          icon: Bot
        },
      ] : [
        {
          title: "Chatbot on Your Website 24/7",
          description: "Answer questions automatically",
          icon: MessageCircle
        },
        {
          title: "Automatic Lead Capture",
          description: "Get emails and phone numbers",
          icon: Mail
        },
        {
          title: "Simple Human Handoff",
          description: "Transfer to you or your team",
          icon: PhoneCall
        },
        {
          title: "Chat Performance Report",
          description: "See how many leads created",
          icon: BarChart2
        },
        {
          title: "Chat Improvement Session",
          description: "One hour with a chatbot expert",
          icon: Bot
        },
      ],
    },
    {
      id: "qualified",
      title: isPathFrench ? "Service de Génération de Leads" : "Lead Generation Service",
      price: isPathFrench ? "1500$/mois" : "$1,500/month",
      testimonyTitle: isPathFrench 
        ? "Nous recherchons et vous livrons des prospects qualifiés chaque semaine." 
        : "We research and deliver qualified prospects to you every week.",
      tagline: isPathFrench 
        ? "Nous trouvons et vous livrons des leads qualifiés chaque semaine" 
        : "We find and deliver qualified leads to you every week",
      testimony: isPathFrench
        ? "Le service nous fournit une source constante de leads qualifiés que nous n'aurions jamais pu trouver par nous-mêmes. Les réseaux sociaux, LinkedIn et les annuaires locaux sont tous explorés pour nous trouver les meilleurs prospects."
        : "The service provides us with a constant source of qualified leads we would never have found on our own. Social media, LinkedIn, and local directories are all explored to find us the best prospects.",
      person: isPathFrench ? "Philippe Leclerc, Directeur des Ventes" : "Michael Brown, Sales Director",
      color: "purple",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      features: isPathFrench ? [
        {
          title: "Recherche sur Réseaux Sociaux",
          description: "Trouvez des personnes recherchant vos services",
          icon: Search
        },
        {
          title: "Collecte de Prospects LinkedIn",
          description: "Extraction des profils correspondants",
          icon: Linkedin
        },
        {
          title: "Recherche d'Entreprises Locales",
          description: "Trouvez des sociétés près de chez vous",
          icon: MapPin
        },
        {
          title: "Liste Hebdomadaire de Leads",
          description: "Fichier Excel/CSV avec contacts",
          icon: FileSpreadsheet
        },
        {
          title: "Session de Stratégie de Leads",
          description: "Une heure avec un expert en leads",
          icon: Brain
        },
      ] : [
        {
          title: "Social Media Lead Finder",
          description: "Find people asking for your services",
          icon: Search
        },
        {
          title: "LinkedIn Prospect Collection",
          description: "Pull details from matching profiles",
          icon: Linkedin
        },
        {
          title: "Local Business Search",
          description: "Find companies near you",
          icon: MapPin
        },
        {
          title: "Weekly Leads List",
          description: "Excel/CSV file with ready contacts",
          icon: FileSpreadsheet
        },
        {
          title: "Leads Strategy Session",
          description: "One hour with a lead expert",
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
  testimonyTitle: string;
  testimony: string;
  person: string;
  color: string;
  image: string;
  features: Feature[];
};

type OfferCardProps = {
  offer: Offer;
  ctaText: string;
  readMoreText: string;
  index: number;
};

const OfferCard = ({ offer, ctaText, readMoreText, index }: OfferCardProps) => {
  const colorMap = {
    indigo: {
      bg: "bg-indigo-900",
      button: "bg-indigo-600 hover:bg-indigo-700 text-white",
      secondaryButton: "bg-white/10 hover:bg-white/20 text-white"
    },
    purple: {
      bg: "bg-purple-900",
      button: "bg-purple-600 hover:bg-purple-700 text-white",
      secondaryButton: "bg-white/10 hover:bg-white/20 text-white"
    },
    emerald: {
      bg: "bg-emerald-900",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white",
      secondaryButton: "bg-white/10 hover:bg-white/20 text-white"
    }
  };
  
  const colors = colorMap[offer.color as keyof typeof colorMap];
  
  return (
    <div 
      className={`${colors.bg} rounded-lg overflow-hidden shadow-xl h-full relative`}
      style={{
        backgroundImage: `linear-gradient(to right, ${offer.color === 'indigo' ? 'rgba(49, 46, 129, 0.95)' : offer.color === 'purple' ? 'rgba(88, 28, 135, 0.95)' : 'rgba(4, 120, 87, 0.95)'}, ${offer.color === 'indigo' ? 'rgba(49, 46, 129, 0.8)' : offer.color === 'purple' ? 'rgba(88, 28, 135, 0.8)' : 'rgba(4, 120, 87, 0.8)'}), url(${offer.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="p-8 sm:p-10 flex flex-col h-full relative z-10">
        <div className="flex-1">
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/90 font-bold">
            {offer.price}
          </div>
          
          <div className="mt-6 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {offer.testimonyTitle}
            </h3>
            <p className="text-white/90 text-base leading-relaxed mb-6">
              {offer.testimony}
            </p>
            <p className="text-white/80 text-sm font-medium">
              {offer.person}
            </p>
          </div>
          
          <div className="mt-8">
            <div className="flex gap-4 flex-wrap">
              {offer.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center text-white/90 gap-1.5 text-sm">
                  <feature.icon className="h-4 w-4 text-white/70" />
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4">
          <OfferPopupForm offerType={`${offer.title} - ${offer.price}`}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-gray-900 hover:bg-white/90 font-medium shadow-sm"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OfferPopupForm>
          
          <Button
            variant="ghost"
            size="lg"
            className="text-white border border-white/30 hover:bg-white/10 font-medium"
            onClick={() => {
              const el = document.getElementById(`offer-details-${index}`);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {readMoreText}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const OfferDetails = ({ offer, index }: { offer: Offer, index: number }) => {
  const colorMap = {
    indigo: {
      bg: "bg-indigo-50 dark:bg-indigo-950/20",
      border: "border-indigo-200 dark:border-indigo-800",
      text: "text-indigo-600 dark:text-indigo-400",
      shadow: "shadow-indigo-100 dark:shadow-none",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-950/20",
      border: "border-purple-200 dark:border-purple-800",
      text: "text-purple-600 dark:text-purple-400",
      shadow: "shadow-purple-100 dark:shadow-none",
    },
    emerald: {
      bg: "bg-emerald-50 dark:bg-emerald-950/20",
      border: "border-emerald-200 dark:border-emerald-800", 
      text: "text-emerald-600 dark:text-emerald-400",
      shadow: "shadow-emerald-100 dark:shadow-none",
    }
  };
  
  const colors = colorMap[offer.color as keyof typeof colorMap];
  
  return (
    <div id={`offer-details-${index}`} className="mt-16 pt-8 border-t border-muted">
      <h3 className={`text-2xl font-bold mb-2 ${colors.text}`}>{offer.title}</h3>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">Everything included in this service:</p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {offer.features.map((feature, idx) => (
          <div key={idx} className={`p-6 border rounded-xl ${colors.border} ${colors.bg} ${colors.shadow} transition-all duration-200 hover:shadow-md`}>
            <div className="flex flex-col gap-4">
              <div className={`p-2 rounded-full ${colors.bg} border ${colors.border} w-10 h-10 flex items-center justify-center`}>
                <feature.icon className={`h-5 w-5 ${colors.text}`} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export function DirectOfferCTA() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

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
                readMoreText={content.readMore}
                index={index}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Detailed features for each offering below */}
        {content.offers.map((offer, index) => (
          <motion.div
            key={`details-${offer.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={index > 0 ? "mt-20" : ""}
          >
            <OfferDetails offer={offer} index={index} />
            {index < content.offers.length - 1 && (
              <div className="mt-16 border-b border-muted"></div>
            )}
          </motion.div>
        ))}

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {content.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}