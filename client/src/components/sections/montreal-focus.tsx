import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Building2, Clock, Coffee, MapPin, TrendingUp } from "lucide-react";

export function MontrealFocus() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const content = {
    title: isPathFrench 
      ? "Solutions Adaptées aux Entreprises de Montréal" 
      : "Solutions Tailored for Montreal Businesses",
    subtitle: isPathFrench
      ? "Conçu spécifiquement pour relever les défis uniques auxquels sont confrontées les petites entreprises de Montréal"
      : "Specifically designed to address the unique challenges faced by Montreal small businesses",
    challenges: isPathFrench ? [
      {
        icon: Building2,
        title: "Concurrence Locale Intense",
        description: "Montréal abrite plus de 60 000 petites entreprises concurrentes pour l'attention des clients"
      },
      {
        icon: Clock,
        title: "Manque de Temps",
        description: "Les entrepreneurs montréalais travaillent en moyenne 12 heures de plus par semaine que la moyenne nationale"
      },
      {
        icon: MapPin,
        title: "Présence Bilingue",
        description: "Besoin d'attirer des clients dans les communautés anglophones et francophones"
      },
      {
        icon: TrendingUp,
        title: "Saisonnalité",
        description: "Surmonter les fluctuations saisonnières des ventes qui affectent particulièrement les entreprises montréalaises"
      }
    ] : [
      {
        icon: Building2,
        title: "Intense Local Competition",
        description: "Montreal houses over 60,000 small businesses competing for customer attention"
      },
      {
        icon: Clock,
        title: "Time Scarcity",
        description: "Montreal entrepreneurs work an average of 12 hours more per week than the national average"
      },
      {
        icon: MapPin,
        title: "Bilingual Presence",
        description: "Need to attract customers in both English and French-speaking communities"
      },
      {
        icon: TrendingUp,
        title: "Seasonality",
        description: "Overcoming seasonal sales fluctuations that particularly affect Montreal businesses"
      }
    ],
    cta: isPathFrench ? "Découvrez Comment Nous Pouvons Vous Aider" : "Discover How We Can Help",
    localExperience: isPathFrench 
      ? "Avec une profonde compréhension du marché montréalais et 20+ années d'expérience, nous proposons des solutions d'automatisation qui adressent vos défis spécifiques."
      : "With a deep understanding of the Montreal market and 20+ years of experience, we provide automation solutions that address your specific challenges."
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {content.challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-3 mb-4 bg-blue-50 dark:bg-blue-900/30 rounded-full w-14 h-14 flex items-center justify-center">
                <challenge.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {challenge.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-2xl shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <Coffee className="w-12 h-12 mb-4 text-white/80" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {isPathFrench ? "Solutions Locales, Expertise Globale" : "Local Solutions, Global Expertise"}
              </h3>
              <p className="text-white/90 text-lg">
                {content.localExperience}
              </p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="#consultation" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-md"
              >
                {content.cta}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}