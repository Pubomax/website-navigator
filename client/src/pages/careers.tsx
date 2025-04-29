import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageTitle } from "@/components/page-title";
import { useLocation } from "wouter";
import { ArrowRight, Code, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Carrières chez Minecore Group" : "Careers at Minecore Group",
  subtitle: isPathFrench 
    ? "Rejoignez notre équipe exceptionnelle et aidez-nous à façonner l'avenir de l'automatisation des entreprises."
    : "Join our exceptional team and help us shape the future of business automation.",
  openings: isPathFrench ? [
    {
      title: "Spécialiste en Automatisation",
      description: "Nous recherchons un spécialiste en automatisation pour concevoir et mettre en œuvre des solutions d'automatisation AI avancées pour nos clients. Cette personne travaillera directement avec les clients pour comprendre leurs besoins commerciaux et développer des solutions personnalisées.",
      requirements: [
        "Expérience en automatisation des processus commerciaux",
        "Connaissance des technologies d'IA et d'apprentissage automatique",
        "Excellentes compétences en communication",
        "Capacité à traduire les besoins commerciaux en solutions techniques"
      ],
      icon: Bot
    },
    {
      title: "Développeur Full Stack",
      description: "Nous recherchons un développeur full stack pour rejoindre notre équipe de développement. Cette personne sera responsable de la construction et de la maintenance de nos systèmes d'automatisation internes et des solutions clients.",
      requirements: [
        "Expérience en développement front-end (React, TypeScript)",
        "Expérience en développement back-end (Node.js, Express)",
        "Connaissance des bases de données SQL et NoSQL",
        "Expérience avec les API RESTful et GraphQL"
      ],
      icon: Code
    }
  ] : [
    {
      title: "Automation Specialist",
      description: "We are looking for an automation specialist to design and implement advanced AI automation solutions for our clients. This person will work directly with clients to understand their business needs and develop customized solutions.",
      requirements: [
        "Experience in business process automation",
        "Knowledge of AI and machine learning technologies",
        "Excellent communication skills",
        "Ability to translate business needs into technical solutions"
      ],
      icon: Robot
    },
    {
      title: "Full Stack Developer",
      description: "We are looking for a full stack developer to join our development team. This person will be responsible for building and maintaining our internal automation systems and client solutions.",
      requirements: [
        "Experience in front-end development (React, TypeScript)",
        "Experience in back-end development (Node.js, Express)",
        "Knowledge of SQL and NoSQL databases",
        "Experience with RESTful APIs and GraphQL"
      ],
      icon: Code
    }
  ]
});

export default function Careers() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="py-24">
      <PageTitle pageKey="careers" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="mt-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {content.openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col shadow-lg">
                  <CardHeader>
                    <div className="inline-block p-3 rounded-lg mb-4 bg-primary/10">
                      <job.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {job.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h3 className="font-medium mb-2">{isPathFrench ? "Exigences:" : "Requirements:"}</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="text-muted-foreground">{req}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      asChild 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center"
                      onClick={() => window.location.href = `mailto:careers@minecoregroup.com?subject=Application for ${job.title}`}
                    >
                      <a href={`mailto:careers@minecoregroup.com?subject=Application for ${job.title}`}>
                        {isPathFrench ? "Postuler Maintenant" : "Apply Now"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}