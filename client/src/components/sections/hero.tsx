import { motion } from "framer-motion";
import { ArrowRight, Brain, Bot, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";
import { LeadScoreWidget } from "@/components/lead-score-widget";
import { cn } from "@/lib/utils";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Gagnez Plus, Travaillez Moins" 
    : "Make More Money, Work Less",
  subtitle: isPathFrench
    ? "Transformez vos prospects en clients fidèles automatiquement. Notre solution de nurturing de leads vous fait gagner du temps et augmente vos revenus sans effort."
    : "Turn prospects into loyal customers automatically. Our lead nurturing solution saves you time and increases revenue effortlessly.",
  features: isPathFrench ? [
    "Intelligence Artificielle",
    "Scoring de Leads",
    "Conversion Automatisée"
  ] : [
    "Artificial Intelligence",
    "Lead Scoring",
    "Automated Conversion"
  ],
  aiCaption: isPathFrench
    ? "Propulsé par l'IA Avancée"
    : "Powered by Advanced AI",
  cta: {
    primary: isPathFrench ? "Commencer à Gagner Plus" : "Start Making Money",
    secondary: isPathFrench ? "Voir les Résultats" : "See Results"
  }
});

export function Hero() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 mt-16 md:mt-20">
      <div className="container-pro section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge variant="outline" className="mb-6 px-3 py-1.5 border-primary/20 text-primary/90 font-medium bg-primary/5 hover:bg-primary/10 transition-colors">
              <Brain className="mr-1.5 h-3.5 w-3.5 text-primary" />
              {content.aiCaption}
            </Badge>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="gradient-text text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight"
            >
              {content.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground/90 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {content.subtitle}
            </motion.p>
            
            {/* Feature badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {content.features.map((feature, index) => (
                <div key={feature} className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-secondary/40 text-secondary-foreground/90 ring-1 ring-inset ring-secondary/20">
                  {index === 0 && <Bot className="mr-1.5 h-3.5 w-3.5 text-primary/80" />}
                  {index === 1 && <Zap className="mr-1.5 h-3.5 w-3.5 text-primary/80" />}
                  {index === 2 && <ArrowRight className="mr-1.5 h-3.5 w-3.5 text-primary/80" />}
                  {feature}
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-x-6"
            >
              <Button asChild size="lg" variant="gradient" className="w-full sm:w-auto font-medium">
                <Link href={isPathFrench ? "/fr/consultation" : "/consultation"}>
                  {content.cta.primary}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto font-medium">
                <Link href={isPathFrench ? "/fr/case-studies" : "/case-studies"}>
                  {content.cta.secondary}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* AI Lead Scoring Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto lg:mx-0 lg:ml-auto max-w-md"
          >
            {/* Subtle glow effect behind the widget */}
            <div className="absolute inset-0 -m-4 bg-primary/5 rounded-2xl blur-xl opacity-70"></div>
            
            <div className="relative">
              <LeadScoreWidget />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern background pattern - more subtle and professional */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl shadow-primary/10 ring-1 ring-inset ring-primary/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary/5 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-primary/2">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
    </div>
  );
}