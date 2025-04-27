import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { 
  ArrowRight, Check, Calendar, BarChart, Users, MessageSquareText, 
  Search, Linkedin, MapPin, FileSpreadsheet, Brain, 
  MessageCircle, Mail, PhoneCall, BarChart2, Bot 
} from "lucide-react";
import { OfferPopupForm } from "./offer-popup-form";
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Commencez à Automatiser Aujourd'hui" 
    : "Start Automating Today",
  subtitle: isPathFrench
    ? "Choisissez le plan qui correspond le mieux à vos besoins commerciaux"
    : "Choose the plan that best fits your business needs",
  // Starter Automation Plan
  starter: {
    title: isPathFrench ? "Plan d'Automatisation de Démarrage" : "Starter Automation Plan",
    price: isPathFrench ? "500$/mois" : "$500/month",
    tagline: isPathFrench 
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
  },
  
  // Qualified Leads Delivery Plan
  qualified: {
    title: isPathFrench ? "Plan de Livraison de Leads Qualifiés" : "Qualified Leads Delivery Plan",
    price: isPathFrench ? "1500$/mois" : "$1,500/month",
    tagline: isPathFrench 
      ? "Nous cherchons, trouvons et vous livrons des leads frais, chaque semaine" 
      : "We search, find, and deliver fresh leads to you — every week",
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
  },
  
  // Chatbot Leads & Support Plan
  chatbot: {
    title: isPathFrench ? "Plan de Leads & Support par Chatbot" : "Chatbot Leads & Support Plan",
    price: isPathFrench ? "800$/mois" : "$800/month",
    tagline: isPathFrench 
      ? "Parlez à vos visiteurs. Capturez plus de leads. Développez-vous pendant votre sommeil" 
      : "Talk to your visitors. Capture more leads. Grow while you sleep",
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
  
  cta: isPathFrench ? "Commencer Maintenant" : "Get Started Now"
});

type PlanFeature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type Plan = {
  title: string;
  price: string;
  tagline: string;
  features: PlanFeature[];
};

type PricingCardProps = {
  plan: Plan;
  ctaText: string;
  offerType: string;
  isPathFrench: boolean;
};

const PricingCard = ({ plan, ctaText, offerType, isPathFrench }: PricingCardProps) => {
  // Determine color based on plan type
  const colors = {
    starter: {
      gradient: "from-blue-500/10 to-blue-500/5",
      accent: "blue",
      button: "bg-blue-600 hover:bg-blue-700",
      price: "text-blue-600",
    },
    qualified: {
      gradient: "from-purple-500/10 to-purple-500/5",
      accent: "purple",
      button: "bg-purple-600 hover:bg-purple-700",
      price: "text-purple-600",
    },
    chatbot: {
      gradient: "from-emerald-500/10 to-emerald-500/5",
      accent: "emerald",
      button: "bg-emerald-600 hover:bg-emerald-700",
      price: "text-emerald-600",
    }
  };
  
  const planType = plan.title.includes("Starter") || plan.title.includes("Démarrage") 
    ? "starter" 
    : plan.title.includes("Qualified") || plan.title.includes("Qualifiés") 
      ? "qualified" 
      : "chatbot";
      
  const colorSet = colors[planType];
  
  return (
    <div className="embla__slide px-4 sm:px-4 flex-[0_0_100%] min-w-0 sm:flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_33.333%] h-full">
      <Card className={`border-primary/20 shadow-lg overflow-hidden bg-gradient-to-b ${colorSet.gradient} h-full flex flex-col`}>
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-${colorSet.accent}-500 to-${colorSet.accent}-400/80`}></div>
        <CardHeader className="text-center pb-4">
          <div className="mb-1">
            <span className={`text-2xl sm:text-3xl font-bold ${colorSet.price}`}>{plan.price}</span>
          </div>
          <CardTitle className="text-lg sm:text-xl font-medium">{plan.title}</CardTitle>
          <p className="text-muted-foreground text-sm italic mt-1">{plan.tagline}</p>
        </CardHeader>
        <CardContent className="space-y-3 border-t border-b border-muted p-4 sm:p-6 flex-grow">
          {plan.features.map((feature) => (
            <div key={feature.title} className="flex items-start">
              <div className="flex-shrink-0 mr-3 mt-1">
                <Check className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h3 className="font-medium text-sm sm:text-base">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="p-4 sm:p-6 flex justify-center">
          <OfferPopupForm offerType={offerType}>
            <Button size="lg" className={`w-full ${colorSet.button} text-white shadow-md`}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OfferPopupForm>
        </CardFooter>
      </Card>
    </div>
  );
};

export function DirectOfferCTA() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);
  
  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    // Auto scroll functionality
    const autoScroll = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 8000);
    
    // Clean up
    return () => {
      clearInterval(autoScroll);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Add CSS for Embla Carousel
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .embla {
        --slide-spacing: 1rem;
        --slide-size: 100%;
        --slide-height: 19rem;
      }
      .embla__container {
        backface-visibility: hidden;
        display: flex;
        touch-action: pan-y;
        margin-left: calc(var(--slide-spacing) * -1);
      }
      @media (min-width: 768px) {
        .embla {
          --slide-size: 50%;
        }
      }
      @media (min-width: 1024px) {
        .embla {
          --slide-size: 33.33%;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-background">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full relative"
        >
          <div className="embla overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="embla__container flex min-h-[640px]">
              <PricingCard 
                plan={content.starter} 
                ctaText={content.cta} 
                offerType="Starter Automation Plan $500/month" 
                isPathFrench={isPathFrench}
              />
              <PricingCard 
                plan={content.qualified} 
                ctaText={content.cta} 
                offerType="Qualified Leads Delivery Plan $1,500/month" 
                isPathFrench={isPathFrench}
              />
              <PricingCard 
                plan={content.chatbot} 
                ctaText={content.cta} 
                offerType="Chatbot Leads & Support Plan $800/month" 
                isPathFrench={isPathFrench}
              />
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full p-2 shadow-md z-10 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed sm:left-0"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            aria-label="Previous plan"
          >
            <ArrowRight className="h-5 w-5 transform rotate-180" />
          </button>
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full p-2 shadow-md z-10 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed sm:right-0"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            aria-label="Next plan"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
          
          {/* Dots indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx === selectedIndex 
                    ? 'w-6 bg-primary' 
                    : 'w-2 bg-primary/30'
                }`}
                onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
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