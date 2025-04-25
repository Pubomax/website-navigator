import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { PageTitle } from "@/components/page-title";

const teamMembersData = {
  en: [
    {
      name: "Sarah Chen",
      role: "Lead Generation Expert",
      image: "/team/sarah-chen.jpg",
      bio: "With over 20 years of experience in lead generation and sales automation, Sarah helps businesses maximize their revenue potential.",
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "https://twitter.com/sarahchen",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Revenue Growth Specialist",
      image: "/team/michael-rodriguez.jpg",
      bio: "A pioneer in sales automation, Michael has helped hundreds of businesses double their revenue through smart lead nurturing.",
      social: {
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        twitter: "https://twitter.com/mrodriguez",
      },
    },
    {
      name: "Emily Watson",
      role: "Customer Success Director",
      image: "/team/emily-watson.jpg",
      bio: "Emily specializes in creating automated lead nurturing systems that convert prospects into loyal customers.",
      social: {
        linkedin: "https://linkedin.com/in/emilywatson",
        twitter: "https://twitter.com/emilywatson",
      },
    },
    {
      name: "David Kim",
      role: "Conversion Optimization Expert",
      image: "/team/david-kim.jpg",
      bio: "David helps businesses optimize their lead generation and nurturing processes to maximize revenue with minimal effort.",
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        twitter: "https://twitter.com/davidkim",
      },
    },
  ],
  fr: [
    {
      name: "Sarah Chen",
      role: "Experte en Génération de Leads",
      image: "/team/sarah-chen.jpg",
      bio: "Avec plus de 20 ans d'expérience en génération de leads et automatisation des ventes, Sarah aide les entreprises à maximiser leur potentiel de revenus.",
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "https://twitter.com/sarahchen",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Spécialiste en Croissance des Revenus",
      image: "/team/michael-rodriguez.jpg",
      bio: "Pionnier en automatisation des ventes, Michael a aidé des centaines d'entreprises à doubler leurs revenus grâce au nurturing intelligent des leads.",
      social: {
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        twitter: "https://twitter.com/mrodriguez",
      },
    },
    {
      name: "Emily Watson",
      role: "Directrice du Succès Client",
      image: "/team/emily-watson.jpg",
      bio: "Emily est spécialisée dans la création de systèmes automatisés de nurturing qui convertissent les prospects en clients fidèles.",
      social: {
        linkedin: "https://linkedin.com/in/emilywatson",
        twitter: "https://twitter.com/emilywatson",
      },
    },
    {
      name: "David Kim",
      role: "Expert en Optimisation des Conversions",
      image: "/team/david-kim.jpg",
      bio: "David aide les entreprises à optimiser leurs processus de génération et de nurturing de leads pour maximiser les revenus avec un minimum d'effort.",
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        twitter: "https://twitter.com/davidkim",
      },
    },
  ]
};

const translations = {
  en: {
    title: "Meet the Revenue Growth Experts",
    subtitle: "Our team of lead generation and revenue growth specialists is here to help you maximize your business potential with minimal effort.",
    joinTeam: "Join Our Team",
    joinDescription: "We're always looking for talented individuals who are passionate about helping businesses grow their revenue through automated lead generation and nurturing.",
    viewCareers: "View Career Opportunities"
  },
  fr: {
    title: "Rencontrez les Experts en Croissance des Revenus",
    subtitle: "Notre équipe de spécialistes en génération de leads et en croissance des revenus est là pour vous aider à maximiser votre potentiel commercial avec un minimum d'effort.",
    joinTeam: "Rejoignez Notre Équipe",
    joinDescription: "Nous recherchons toujours des personnes talentueuses et passionnées par l'aide aux entreprises à développer leurs revenus grâce à la génération et au nurturing automatisés des leads.",
    viewCareers: "Voir les Opportunités de Carrière"
  }
};

export default function Team() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = isPathFrench ? translations.fr : translations.en;
  const teamMembers = isPathFrench ? teamMembersData.fr : teamMembersData.en;

  return (
    <main className="py-24">
      <PageTitle pageKey="team" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8 text-center">
            {content.title}
          </h1>

          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            {content.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-lg p-6 border"
              >
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex gap-4">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{content.joinTeam}</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {content.joinDescription}
            </p>
            <Button asChild size="lg">
              <Link href={isPathFrench ? "/fr/careers" : "/careers"}>
                {content.viewCareers}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}