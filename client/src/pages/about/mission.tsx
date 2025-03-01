import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Shield,
  Fuel,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getValues = (isPathFrench: boolean) => ({
  values: [
    {
      icon: Heart,
      title: isPathFrench ? "Succès Client" : "Customer Success",
      description: isPathFrench 
        ? "Nous mesurons notre succès à travers les réalisations et la croissance de nos clients."
        : "We measure our success through the achievements and growth of our clients.",
    },
    {
      icon: Lightbulb,
      title: isPathFrench ? "Innovation" : "Innovation",
      description: isPathFrench
        ? "Nous repoussons continuellement les limites du possible dans la transformation numérique."
        : "We continuously push the boundaries of what's possible in digital transformation.",
    },
    {
      icon: Users,
      title: isPathFrench ? "Collaboration" : "Collaboration",
      description: isPathFrench
        ? "Nous croyons en la puissance du travail d'équipe et du partenariat avec nos clients."
        : "We believe in the power of teamwork and partnership with our clients.",
    },
    {
      icon: Shield,
      title: isPathFrench ? "Intégrité" : "Integrity",
      description: isPathFrench
        ? "Nous maintenons les plus hauts standards d'éthique et de transparence dans toutes nos relations."
        : "We maintain the highest standards of ethics and transparency in all our dealings.",
    },
    {
      icon: Fuel,
      title: isPathFrench ? "Excellence" : "Excellence",
      description: isPathFrench
        ? "Nous visons l'excellence dans chaque solution que nous livrons et service que nous fournissons."
        : "We strive for excellence in every solution we deliver and service we provide.",
    },
  ],
  translations: {
    mission: {
      title: isPathFrench ? "Notre Mission" : "Our Mission",
      content: isPathFrench
        ? "Donner aux organisations de toutes tailles les moyens d'accéder à des solutions numériques innovantes qui stimulent la croissance, l'efficacité et l'avantage concurrentiel dans un paysage numérique en évolution."
        : "To empower organizations of all sizes with innovative digital solutions that drive growth, efficiency, and competitive advantage in an evolving digital landscape.",
    },
    vision: {
      title: isPathFrench ? "Notre Vision" : "Our Vision",
      content: isPathFrench
        ? "Être le leader mondial de la transformation numérique, reconnu pour nos solutions innovantes, notre service exceptionnel et notre impact mesurable sur le succès de nos clients."
        : "To be the global leader in digital transformation, known for our innovative solutions, exceptional service, and measurable impact on our clients' success.",
    },
    values: {
      title: isPathFrench ? "Nos Valeurs Fondamentales" : "Our Core Values",
    },
    commitments: {
      title: isPathFrench ? "Nos Engagements" : "Our Commitments",
      items: isPathFrench ? [
        "Fournir une valeur mesurable à nos clients",
        "Maintenir les plus hauts standards de qualité",
        "Investir dans l'innovation continue",
        "Soutenir des pratiques numériques durables",
        "Contribuer à notre communauté mondiale"
      ] : [
        "Delivering measurable value to our clients",
        "Maintaining the highest standards of quality",
        "Investing in continuous innovation",
        "Supporting sustainable digital practices",
        "Contributing to our global community"
      ],
    },
  },
});

export default function Mission() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const { t } = useTranslation(isPathFrench ? 'fr' : 'en');
  const { values, translations } = getValues(isPathFrench);

  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-primary/10">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              {isPathFrench ? "Mission & Valeurs" : "Mission & Values"}
            </h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="bg-card rounded-lg p-8 border mb-12">
              <h2 className="text-2xl font-bold mb-4">{translations.mission.title}</h2>
              <p className="text-xl text-muted-foreground">
                {translations.mission.content}
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border mb-12">
              <h2 className="text-2xl font-bold mb-4">{translations.vision.title}</h2>
              <p className="text-xl text-muted-foreground">
                {translations.vision.content}
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-8">{translations.values.title}</h2>
            <div className="grid gap-6">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-6 items-start p-6 rounded-lg border"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">{translations.commitments.title}</h2>
            <ul className="space-y-4">
              {translations.commitments.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                  {t("partnerWithUs")}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={isPathFrench ? "/fr/case-studies" : "/case-studies"}>
                  {t("seeOurImpact")}
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}