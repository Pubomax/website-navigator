import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { History, Rocket, Users, Globe } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Notre Histoire" : "Our Story",
  subtitle: isPathFrench 
    ? "Fondée en 2020, nous sommes passés d'une petite équipe d'innovateurs à un partenaire leader de la transformation numérique, aidant les entreprises du monde entier à embrasser l'avenir de la technologie."
    : "Founded in 2020, we've grown from a small team of innovators to a leading digital transformation partner, helping businesses across the globe embrace the future of technology.",
  sections: isPathFrench ? [
    {
      icon: History,
      title: "Nos Débuts",
      content: "Créée par un groupe de passionnés de technologie qui ont vu la nécessité de solutions de transformation numérique complètes pouvant s'adapter aux entreprises de toutes tailles. Notre objectif initial était d'aider les petites entreprises à naviguer dans le paysage numérique."
    },
    {
      icon: Rocket,
      title: "Croissance & Innovation",
      content: "Au fur et à mesure que notre expertise grandissait, nos capacités aussi. Nous avons étendu nos services pour inclure des solutions alimentées par l'IA, le développement de logiciels sur mesure et le conseil au niveau entreprise, restant toujours à la pointe de l'avancement technologique."
    },
    {
      icon: Users,
      title: "Notre Équipe",
      content: "Aujourd'hui, notre équipe compte plus de 200 experts dans plusieurs disciplines, des spécialistes de l'IA aux consultants en transformation numérique, tous unis par notre passion d'aider les entreprises à réussir à l'ère numérique."
    },
    {
      icon: Globe,
      title: "Impact Mondial",
      content: "Nous avons aidé des milliers d'entreprises dans divers secteurs à transformer leurs opérations, adopter de nouvelles technologies et atteindre une croissance sans précédent grâce à l'innovation numérique."
    }
  ] : [
    {
      icon: History,
      title: "Our Beginning",
      content: "Started by a group of technology enthusiasts who saw the need for comprehensive digital transformation solutions that could adapt to businesses of all sizes. Our initial focus was on helping small businesses navigate the digital landscape."
    },
    {
      icon: Rocket,
      title: "Growth & Innovation",
      content: "As our expertise grew, so did our capabilities. We expanded our services to include AI-powered solutions, custom software development, and enterprise-level consulting, always staying at the forefront of technological advancement."
    },
    {
      icon: Users,
      title: "Our Team",
      content: "Today, our team consists of over 200 experts across multiple disciplines, from AI specialists to digital transformation consultants, all united by our passion for helping businesses succeed in the digital age."
    },
    {
      icon: Globe,
      title: "Global Impact",
      content: "We've helped thousands of businesses across various industries transform their operations, embrace new technologies, and achieve unprecedented growth through digital innovation."
    }
  ],
  milestones: isPathFrench ? {
    title: "Étapes Clés",
    items: [
      "2020: Création de l'entreprise axée sur la transformation numérique",
      "2021: Lancement de nos solutions d'IA & Automatisation",
      "2022: Extension au conseil de niveau entreprise",
      "2023: Ouverture de bureaux internationaux",
      "2024: Atteinte de 1000+ transformations réussies"
    ]
  } : {
    title: "Key Milestones",
    items: [
      "2020: Company founded with a focus on digital transformation",
      "2021: Launched our AI & Automation solutions",
      "2022: Expanded to enterprise-level consulting",
      "2023: Opened international offices",
      "2024: Reached 1000+ successful transformations"
    ]
  },
  cta: {
    primary: isPathFrench ? "Nous Contacter" : "Contact Us",
    secondary: isPathFrench ? "Rencontrer Notre Équipe" : "Meet Our Team"
  }
});

export default function CompanyStory() {
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
            <p className="lead text-xl text-muted-foreground">
              {content.subtitle}
            </p>

            <div className="grid gap-8 my-12">
              {content.sections.map((section) => (
                <div key={section.title} className="flex gap-6 items-start">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                    <p>{section.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>{content.milestones.title}</h2>
            <ul className="space-y-4">
              {content.milestones.items.map((milestone) => (
                <li key={milestone}>{milestone}</li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                  {content.cta.primary}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={isPathFrench ? "/fr/about/team" : "/about/team"}>
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