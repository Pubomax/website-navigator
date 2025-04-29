import { motion } from "framer-motion";
import { ArrowRight, Brain, Bot, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";
import { WorkLessCalculator } from "@/components/work-less-calculator";

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
    <div className="relative overflow-hidden bg-background mt-16 md:mt-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/30 font-medium">
                <Brain className="mr-1 h-3.5 w-3.5 text-primary" />
                {content.aiCaption}
              </Badge>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                {content.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground"
              >
                {content.subtitle}
              </motion.p>
              
              {/* Feature badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2"
              >
                {content.features.map((feature, index) => (
                  <Badge key={feature} variant="secondary" className="text-sm px-3 py-1">
                    {index === 0 && <Bot className="mr-1 h-3.5 w-3.5 text-purple-500" />}
                    {index === 1 && <Zap className="mr-1 h-3.5 w-3.5 text-amber-500" />}
                    {index === 2 && <ArrowRight className="mr-1 h-3.5 w-3.5 text-emerald-500" />}
                    {feature}
                  </Badge>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-x-6"
              >
                <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-md">
                  <Link href={isPathFrench ? "/fr/consultation" : "/consultation"}>
                    {content.cta.primary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-primary/40 text-primary hover:bg-primary/5 hover:text-primary/90">
                  <Link href={isPathFrench ? "/fr/case-studies" : "/case-studies"}>
                    {content.cta.secondary}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Work Less Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md mx-auto lg:mx-0 lg:ml-auto"
            >
              <WorkLessCalculator />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Abstract background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
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