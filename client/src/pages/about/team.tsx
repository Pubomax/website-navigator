import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const teamMembersData = {
  en: [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      image: "/team/sarah-chen.jpg",
      bio: "With over 20 years of experience in technology and digital transformation, Sarah leads our company's vision and strategy.",
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "https://twitter.com/sarahchen",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: "/team/michael-rodriguez.jpg",
      bio: "A pioneer in AI and automation, Michael oversees our technical strategy and innovation initiatives.",
      social: {
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        twitter: "https://twitter.com/mrodriguez",
      },
    },
    {
      name: "Emily Watson",
      role: "Head of Digital Transformation",
      image: "/team/emily-watson.jpg",
      bio: "Emily brings 15 years of consulting experience, helping organizations navigate their digital journey.",
      social: {
        linkedin: "https://linkedin.com/in/emilywatson",
        twitter: "https://twitter.com/emilywatson",
      },
    },
    {
      name: "David Kim",
      role: "Chief Innovation Officer",
      image: "/team/david-kim.jpg",
      bio: "David leads our innovation lab, focusing on emerging technologies and future trends.",
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        twitter: "https://twitter.com/davidkim",
      },
    },
  ],
  fr: [
    {
      name: "Sarah Chen",
      role: "Directrice Générale",
      image: "/team/sarah-chen.jpg",
      bio: "Avec plus de 20 ans d'expérience en technologie et transformation numérique, Sarah dirige la vision et la stratégie de notre entreprise.",
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "https://twitter.com/sarahchen",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Directeur Technique",
      image: "/team/michael-rodriguez.jpg",
      bio: "Pionnier en IA et automatisation, Michael supervise notre stratégie technique et nos initiatives d'innovation.",
      social: {
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        twitter: "https://twitter.com/mrodriguez",
      },
    },
    {
      name: "Emily Watson",
      role: "Directrice de la Transformation Numérique",
      image: "/team/emily-watson.jpg",
      bio: "Emily apporte 15 ans d'expérience en conseil, aidant les organisations à naviguer dans leur parcours numérique.",
      social: {
        linkedin: "https://linkedin.com/in/emilywatson",
        twitter: "https://twitter.com/emilywatson",
      },
    },
    {
      name: "David Kim",
      role: "Directeur de l'Innovation",
      image: "/team/david-kim.jpg",
      bio: "David dirige notre laboratoire d'innovation, se concentrant sur les technologies émergentes et les tendances futures.",
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        twitter: "https://twitter.com/davidkim",
      },
    },
  ]
};

export default function Team() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const { t } = useTranslation(isPathFrench ? 'fr' : 'en');
  const teamMembers = isPathFrench ? teamMembersData.fr : teamMembersData.en;

  const translations = {
    en: {
      title: "Our Leadership Team",
      subtitle: "Meet the visionaries and experts leading our mission to transform businesses through innovative digital solutions.",
      joinTeam: "Join Our Team",
      joinDescription: "We're always looking for talented individuals who are passionate about digital transformation and innovation. Check out our current openings.",
      viewCareers: "View Career Opportunities"
    },
    fr: {
      title: "Notre Équipe de Direction",
      subtitle: "Rencontrez les visionnaires et les experts qui dirigent notre mission de transformer les entreprises grâce à des solutions numériques innovantes.",
      joinTeam: "Rejoignez Notre Équipe",
      joinDescription: "Nous recherchons toujours des personnes talentueuses et passionnées par la transformation numérique et l'innovation. Découvrez nos offres actuelles.",
      viewCareers: "Voir les Opportunités de Carrière"
    }
  };

  const content = isPathFrench ? translations.fr : translations.en;

  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8 text-center">{content.title}</h1>

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
              <Link href={isPathFrench ? "/fr/careers" : "/careers"}>{content.viewCareers}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}