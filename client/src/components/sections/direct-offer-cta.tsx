import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { 
  ArrowRight, Calendar, BarChart, Users, MessageSquareText, 
  Search, Linkedin, MapPin, FileSpreadsheet, Brain, 
  MessageCircle, Mail, PhoneCall, BarChart2, Bot
} from "lucide-react";
import { OfferPopupForm } from "./offer-popup-form";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Nos Plans de Service Marketing" 
    : "Our Marketing Service Plans",
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
      testimony: isPathFrench
        ? "L'automatisation nous permet de publier régulièrement du contenu sur nos réseaux sociaux sans y passer des heures. Les rapports hebdomadaires nous aident à suivre nos progrès et à prendre de meilleures décisions."
        : "Automation allows us to post content regularly on our social media without spending hours on it. The weekly reports help us track our progress and make better decisions.",
      person: isPathFrench ? "Marie Dubois, Marketing Manager" : "John Smith, Marketing Manager",
      color: "indigo",
      gradient: "bg-gradient-to-br from-indigo-600 to-indigo-900",
      features: isPathFrench ? [
        {
          title: "Publications sur Réseaux Sociaux Automatisées",
          icon: MessageSquareText
        },
        {
          title: "Rapports Hebdomadaires Automatisés",
          icon: BarChart
        },
        {
          title: "Gestion de Plateforme de Nurturing",
          icon: Users
        }
      ] : [
        {
          title: "Automated Social Media Posting",
          icon: MessageSquareText
        },
        {
          title: "Weekly Automated Reporting",
          icon: BarChart
        },
        {
          title: "Lead Nurturing Platform Management",
          icon: Users
        }
      ],
    },
    {
      id: "chatbot",
      title: isPathFrench ? "Service Chatbot & Capture de Leads" : "Chatbot & Lead Capture Service",
      price: isPathFrench ? "800$/mois" : "$800/month",
      testimonyTitle: isPathFrench 
        ? "Répondez automatiquement aux questions et capturez des leads 24h/24." 
        : "Automatically answer questions and capture leads 24/7.",
      testimony: isPathFrench
        ? "Notre chatbot a transformé notre capacité à capturer des leads. Il répond aux questions de base même quand notre équipe n'est pas disponible, et nous envoie les informations des visiteurs intéressés directement dans notre CRM."
        : "Our chatbot has transformed our ability to capture leads. It answers basic questions even when our team isn't available, and sends information from interested visitors directly to our CRM.",
      person: isPathFrench ? "Thomas Martin, PDG" : "Sarah Johnson, CEO",
      color: "emerald",
      gradient: "bg-gradient-to-br from-emerald-600 to-emerald-900",
      features: isPathFrench ? [
        {
          title: "Chatbot sur Votre Site Web 24/7",
          icon: MessageCircle
        },
        {
          title: "Capture Automatique de Leads",
          icon: Mail
        },
        {
          title: "Transfert Simple vers un Humain",
          icon: PhoneCall
        }
      ] : [
        {
          title: "Chatbot on Your Website 24/7",
          icon: MessageCircle
        },
        {
          title: "Automatic Lead Capture",
          icon: Mail
        },
        {
          title: "Simple Human Handoff",
          icon: PhoneCall
        }
      ],
    },
    {
      id: "qualified",
      title: isPathFrench ? "Service de Génération de Leads" : "Lead Generation Service",
      price: isPathFrench ? "1500$/mois" : "$1,500/month",
      testimonyTitle: isPathFrench 
        ? "Nous recherchons et vous livrons des prospects qualifiés chaque semaine." 
        : "We research and deliver qualified prospects to you every week.",
      testimony: isPathFrench
        ? "Le service nous fournit une source constante de leads qualifiés que nous n'aurions jamais pu trouver par nous-mêmes. Les réseaux sociaux, LinkedIn et les annuaires locaux sont tous explorés pour nous trouver les meilleurs prospects."
        : "The service provides us with a constant source of qualified leads we would never have found on our own. Social media, LinkedIn, and local directories are all explored to find us the best prospects.",
      person: isPathFrench ? "Philippe Leclerc, Directeur des Ventes" : "Michael Brown, Sales Director",
      color: "purple",
      gradient: "bg-gradient-to-br from-purple-600 to-purple-900",
      features: isPathFrench ? [
        {
          title: "Recherche sur Réseaux Sociaux",
          icon: Search
        },
        {
          title: "Collecte de Prospects LinkedIn",
          icon: Linkedin
        },
        {
          title: "Recherche d'Entreprises Locales",
          icon: MapPin
        }
      ] : [
        {
          title: "Social Media Lead Finder",
          icon: Search
        },
        {
          title: "LinkedIn Prospect Collection",
          icon: Linkedin
        },
        {
          title: "Local Business Search",
          icon: MapPin
        }
      ],
    }
  ]
});

type Feature = {
  title: string;
  icon: React.ElementType;
};

type Offer = {
  id: string;
  title: string;
  price: string;
  testimonyTitle: string;
  testimony: string;
  person: string;
  color: string;
  gradient: string;
  features: Feature[];
};

type OfferCardProps = {
  offer: Offer;
  ctaText: string;
  readMoreText: string;
  index: number;
};

const OfferCard = ({ offer, ctaText, readMoreText, index }: OfferCardProps) => {
  // Map colors to tailwind classes
  const colorMap = {
    indigo: {
      text: "text-indigo-700",
      hover: "hover:bg-indigo-50"
    },
    emerald: {
      text: "text-emerald-700",
      hover: "hover:bg-emerald-50"
    },
    purple: {
      text: "text-purple-700",
      hover: "hover:bg-purple-50"
    }
  };
  
  const colors = colorMap[offer.color as keyof typeof colorMap];
  
  return (
    <div className={`${offer.gradient} rounded-2xl shadow-lg text-white relative transition-transform h-full`}>
      <div className="p-7 pt-8 flex flex-col h-full">
        <div className="text-right text-lg font-semibold">
          {offer.price}<span className="text-base font-normal">/month</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mt-2 mb-2 leading-snug drop-shadow">
          {offer.testimonyTitle}
        </h3>
        
        <p className="mb-4 text-sm opacity-90">
          {offer.testimony}
        </p>
        
        <div className="mb-4 text-xs opacity-80">
          {offer.person}
        </div>
        
        <ul className="mb-6 space-y-2 text-sm">
          {offer.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <feature.icon className="h-4 w-4" />
              <span>{feature.title}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex gap-2 mt-auto">
          <OfferPopupForm offerType={`${offer.title} - ${offer.price}`}>
            <a className={`inline-flex items-center justify-center px-4 py-2.5 bg-white text-[15px] font-medium ${colors.text} rounded-lg shadow ${colors.hover} transition`}>
              <span className="mr-2">{ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </OfferPopupForm>
          
          <a 
            className="inline-flex items-center justify-center px-4 py-2.5 bg-none text-[15px] font-medium text-white/90 rounded-lg hover:text-white border border-white border-opacity-10 transition"
            onClick={() => {
              const el = document.getElementById(`offer-details-${index}`);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {readMoreText}
          </a>
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
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {content.title}
          </h2>
        </motion.div>

        {/* Grid of cards instead of carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            className={index > 0 ? "mt-20" : "mt-16"}
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