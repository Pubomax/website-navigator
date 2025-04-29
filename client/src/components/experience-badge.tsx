import { Award, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export function ExperienceBadge({ className = "" }: { className?: string }) {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center justify-center space-x-2 bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 py-2 px-4 rounded-full shadow-sm border border-amber-200 dark:border-amber-800/50 ${className}`}
    >
      <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
      <span className="font-medium text-sm">
        {isPathFrench ? "Soutenu par 20+ Années d'Expérience" : "Backed by 20+ Years of Experience"}
      </span>
    </motion.div>
  );
}

export function ExperienceBannerFull() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const benefits = isPathFrench ? [
    "Expertise éprouvée dans l'automatisation des ventes et du marketing",
    "Des solutions adaptées par des professionnels, pas seulement des outils d'IA", 
    "Stratégies testées avec plus de 200 entreprises montréalaises"
  ] : [
    "Proven expertise in sales and marketing automation",
    "Solutions tailored by professionals, not just AI tools",
    "Strategies tested with over 200 Montreal businesses"
  ];
  
  return (
    <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-y border-amber-200 dark:border-amber-800/30">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <Clock className="w-10 h-10 mr-4 text-amber-600 dark:text-amber-400" />
            <div>
              <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300">
                {isPathFrench ? "20+ Années d'Expérience à Votre Service" : "20+ Years of Experience at Your Service"}
              </h3>
              <p className="text-amber-700 dark:text-amber-400">
                {isPathFrench ? "Notre équipe apporte des décennies d'expertise en marketing et ventes" : "Our team brings decades of marketing and sales expertise"}
              </p>
            </div>
          </div>
          
          <ul className="space-y-2 md:space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <span className="text-amber-800 dark:text-amber-200 text-sm">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}