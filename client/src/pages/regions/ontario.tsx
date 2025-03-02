import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Transformation Numérique en Ontario" 
    : "Digital Transformation in Ontario",
  subtitle: isPathFrench
    ? "Solutions de transformation numérique de premier plan pour les entreprises de l'Ontario, du quartier financier de Toronto au corridor technologique d'Ottawa."
    : "Leading digital transformation solutions for businesses across Ontario, from Toronto's financial district to Ottawa's technology corridor.",
  expertise: {
    title: isPathFrench ? "Expertise Locale" : "Local Expertise",
    content: isPathFrench
      ? "Notre équipe de l'Ontario apporte une expertise approfondie dans les services financiers, la technologie, la fabrication et la transformation numérique du secteur public. Nous comprenons les défis et les opportunités uniques auxquels font face les entreprises de l'Ontario."
      : "Our Ontario team brings deep expertise in financial services, technology, manufacturing, and public sector digital transformation. We understand the unique challenges and opportunities facing Ontario businesses."
  },
  industries: {
    title: isPathFrench ? "Industries que Nous Servons en Ontario" : "Ontario Industries We Serve",
    list: isPathFrench ? [
      "Services Financiers et FinTech",
      "Fabrication et Industrie 4.0",
      "Technologie et Logiciels",
      "Santé et Sciences de la Vie",
      "Secteur Public et Gouvernement"
    ] : [
      "Financial Services & FinTech",
      "Manufacturing & Industry 4.0",
      "Technology & Software",
      "Healthcare & Life Sciences",
      "Public Sector & Government"
    ]
  },
  presence: {
    title: isPathFrench ? "Notre Présence en Ontario" : "Our Ontario Presence",
    content: isPathFrench
      ? "Avec des bureaux à Toronto et Ottawa, nous fournissons un support local et une expertise aux entreprises à travers l'Ontario. Notre équipe de consultants et d'experts techniques est prête à vous aider à naviguer dans votre parcours de transformation numérique."
      : "With offices in Toronto and Ottawa, we provide local support and expertise to businesses across Ontario. Our team of consultants and technical experts are ready to help you navigate your digital transformation journey."
  },
  cta: {
    primary: isPathFrench ? "Contactez Notre Équipe Ontario" : "Contact Our Ontario Team",
    secondary: isPathFrench ? "Voir les Succès en Ontario" : "View Ontario Success Stories"
  }
});

export default function Ontario() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8">{content.title}</h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead">
              {content.subtitle}
            </p>

            <h2>{content.expertise.title}</h2>
            <p>
              {content.expertise.content}
            </p>

            <h2>{content.industries.title}</h2>
            <ul>
              {content.industries.list.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>

            <h2>{content.presence.title}</h2>
            <p>
              {content.presence.content}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                  {content.cta.primary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={isPathFrench ? "/fr/case-studies" : "/case-studies"}>
                  {content.cta.secondary}
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}