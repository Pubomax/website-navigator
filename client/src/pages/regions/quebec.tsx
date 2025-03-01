import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Quebec() {
  const [location] = useLocation();
  const isFrench = location.startsWith("/fr");

  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8">
            {isFrench 
              ? "Transformation Numérique au Québec"
              : "Digital Transformation in Quebec"}
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead">
              {isFrench
                ? "Solutions numériques innovantes pour les entreprises québécoises, de Montréal à Québec."
                : "Innovative digital solutions for Quebec businesses, from Montreal to Quebec City."}
            </p>

            <h2>{isFrench ? "Expertise Locale" : "Local Expertise"}</h2>
            <p>
              {isFrench
                ? "Notre équipe québécoise excelle dans les technologies émergentes, l'intelligence artificielle et les solutions d'entreprise adaptées au marché local."
                : "Our Quebec team specializes in emerging technologies, artificial intelligence, and enterprise solutions tailored to the local market."}
            </p>

            <h2>{isFrench ? "Industries Desservies" : "Industries We Serve"}</h2>
            <ul>
              <li>{isFrench ? "Intelligence Artificielle et Technologies" : "Artificial Intelligence & Technology"}</li>
              <li>{isFrench ? "Services Financiers" : "Financial Services"}</li>
              <li>{isFrench ? "Aérospatiale et Transport" : "Aerospace & Transportation"}</li>
              <li>{isFrench ? "Sciences de la Vie" : "Life Sciences"}</li>
              <li>{isFrench ? "Commerce de Détail" : "Retail & Commerce"}</li>
            </ul>

            <h2>{isFrench ? "Notre Présence au Québec" : "Our Quebec Presence"}</h2>
            <p>
              {isFrench
                ? "Avec des bureaux à Montréal et à Québec, nous offrons des services complets de transformation numérique dans toute la province."
                : "With offices in Montreal and Quebec City, we provide comprehensive digital transformation services throughout the province."}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  {isFrench ? "Contactez Notre Équipe" : "Contact Our Quebec Team"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">
                  {isFrench ? "Voir Nos Réussites" : "View Quebec Success Stories"}
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
