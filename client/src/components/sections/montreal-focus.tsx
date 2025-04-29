import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export function MontrealFocus() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const content = {
    cta: isPathFrench ? "Découvrez Comment Nous Pouvons Vous Aider" : "Discover How We Can Help",
    localExperience: isPathFrench 
      ? "Avec une profonde compréhension du marché montréalais et 20+ années d'expérience, nous proposons des solutions d'automatisation qui adressent vos défis spécifiques."
      : "With a deep understanding of the Montreal market and 20+ years of experience, we provide automation solutions that address your specific challenges."
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                href="/consultation" 
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