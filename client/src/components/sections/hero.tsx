import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Propulser la Transformation Numérique" 
    : "Empowering Digital Transformation",
  subtitle: isPathFrench
    ? "Nous aidons les entreprises de toutes tailles à embrasser l'avenir numérique grâce à des solutions innovantes d'IA, d'automatisation et de conseil stratégique."
    : "We help businesses of all sizes embrace the digital future through innovative AI solutions, automation, and strategic consulting.",
  cta: {
    primary: isPathFrench ? "Explorer Nos Services" : "Explore Our Services",
    secondary: isPathFrench ? "Planifier une Consultation" : "Schedule a Consultation"
  }
});

export function Hero() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <div className="relative overflow-hidden bg-background mt-16 md:mt-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href={isPathFrench ? "/fr/services/digital-foundation" : "/services/digital-foundation"}>
                  {content.cta.primary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                  {content.cta.secondary}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
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