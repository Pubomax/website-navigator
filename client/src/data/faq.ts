import { Banknote, Clock, Cloud, Code, Cog, FileText, HelpCircle, Lock, MessageCircle, Shield, Star, Users } from "lucide-react";

const englishFAQ = {
  general: {
    title: "General Questions",
    icon: HelpCircle,
    questions: [
      {
        question: "What services does Minecore Group offer?",
        answer: "We offer comprehensive digital transformation solutions including AI integration, automation, analytics, cloud services, and custom software development tailored to businesses of all sizes."
      },
      {
        question: "How long has Minecore Group been in business?",
        answer: "Minecore Group has been delivering innovative digital solutions to businesses since 2020, with a proven track record of successful transformations across multiple industries."
      },
      {
        question: "Which industries do you serve?",
        answer: "We serve a wide range of industries including finance, healthcare, retail, manufacturing, and public sector. Each solution is customized to meet industry-specific needs."
      },
      {
        question: "What makes Minecore Group different from other providers?",
        answer: "Our unique combination of cutting-edge technology expertise, industry experience, and customer-centric approach sets us apart. We focus on delivering measurable business value and long-term partnerships."
      }
    ]
  },
  services: {
    title: "Our Services",
    icon: Star,
    questions: [
      {
        question: "What is included in the Digital Foundation Package?",
        answer: "The Digital Foundation Package includes infrastructure assessment, cloud setup, basic process automation, security foundation, and employee digital skills training."
      },
      {
        question: "How does your AI Automation solution work?",
        answer: "Our AI Automation solution combines machine learning, natural language processing, and robotic process automation to streamline operations, enhance decision-making, and improve efficiency."
      },
      {
        question: "What type of custom software solutions do you offer?",
        answer: "We develop tailored software solutions including enterprise applications, mobile apps, web platforms, and integrated systems designed to meet your specific business requirements."
      },
      {
        question: "Do you provide ongoing support after implementation?",
        answer: "Yes, we offer comprehensive post-implementation support including maintenance, updates, optimization, and 24/7 technical assistance through our Intelligent Support Package."
      }
    ]
  },
  technical: {
    title: "Technical Questions",
    icon: Code,
    questions: [
      {
        question: "What technologies do you use for development?",
        answer: "We utilize modern web technologies, cloud platforms (AWS, Azure, GCP), AI/ML frameworks, and enterprise software solutions including React, Node.js, Python, and various AI tools."
      },
      {
        question: "How do you ensure system security?",
        answer: "We implement industry-standard security practices, including encryption, secure authentication, regular security audits, and compliance with relevant regulations like GDPR and HIPAA."
      },
      {
        question: "Can you integrate with existing systems?",
        answer: "Yes, we specialize in system integration, connecting new solutions with your existing infrastructure while ensuring data consistency and security."
      }
    ]
  },
  implementation: {
    title: "Implementation Process",
    icon: Cog,
    questions: [
      {
        question: "What is your project implementation approach?",
        answer: "We follow an agile methodology with phases including initial consultation, requirements gathering, solution design, development, testing, deployment, and ongoing support."
      },
      {
        question: "How long does implementation typically take?",
        answer: "Implementation timelines vary by project scope. Digital Foundation Package typically takes 2-3 months, while comprehensive transformations may take 6-12 months."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes, we offer comprehensive training programs including documentation, workshops, and hands-on sessions to ensure smooth adoption of new systems."
      }
    ]
  },
  pricing: {
    title: "Pricing & Billing",
    icon: Banknote,
    questions: [
      {
        question: "How is your pricing structured?",
        answer: "We offer both project-based and subscription-based pricing models. Each solution is priced based on scope, complexity, and resource requirements."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No, we maintain complete pricing transparency. All costs, including potential scaling or additional feature expenses, are clearly outlined in our proposals."
      },
      {
        question: "Do you offer flexible payment terms?",
        answer: "Yes, we provide various payment options including monthly, quarterly, or milestone-based payments to accommodate your business needs."
      }
    ]
  },
  support: {
    title: "Support & Communication",
    icon: MessageCircle,
    questions: [
      {
        question: "What are your support hours?",
        answer: "We provide support during standard business hours (9 AM - 6 PM EST) with 24/7 emergency support available for critical issues."
      },
      {
        question: "How can I contact support?",
        answer: "Support is available through multiple channels including email, phone, live chat, and our ticket system. Emergency support has dedicated contact numbers."
      },
      {
        question: "What is your response time for support issues?",
        answer: "We aim to respond to standard queries within 4 hours and urgent issues within 1 hour during business hours. Critical issues receive immediate attention."
      }
    ]
  }
};

const frenchFAQ = {
  general: {
    title: "Questions Générales",
    icon: HelpCircle,
    questions: [
      {
        question: "Quels services Minecore Group propose-t-il ?",
        answer: "Nous proposons des solutions complètes de transformation numérique, incluant l'intégration d'IA, l'automatisation, l'analytique, les services cloud et le développement de logiciels sur mesure adaptés aux entreprises de toutes tailles."
      },
      {
        question: "Depuis combien de temps Minecore Group existe-t-il ?",
        answer: "Minecore Group fournit des solutions numériques innovantes aux entreprises depuis 2020, avec un historique prouvé de transformations réussies dans de nombreux secteurs."
      },
      {
        question: "Quels secteurs d'activité servez-vous ?",
        answer: "Nous servons un large éventail de secteurs, notamment la finance, la santé, le commerce de détail, l'industrie et le secteur public. Chaque solution est personnalisée pour répondre aux besoins spécifiques du secteur."
      },
      {
        question: "Qu'est-ce qui distingue Minecore Group des autres fournisseurs ?",
        answer: "Notre combinaison unique d'expertise technologique de pointe, d'expérience sectorielle et d'approche centrée sur le client nous distingue. Nous nous concentrons sur la création de valeur mesurable et de partenariats à long terme."
      }
    ]
  },
  services: {
    title: "Nos Services",
    icon: Star,
    questions: [
      {
        question: "Que comprend le Pack Fondation Numérique ?",
        answer: "Le Pack Fondation Numérique comprend l'évaluation de l'infrastructure, la configuration cloud, l'automatisation des processus de base, la sécurité fondamentale et la formation numérique des employés."
      },
      {
        question: "Comment fonctionne votre solution d'Automatisation IA ?",
        answer: "Notre solution d'Automatisation IA combine l'apprentissage automatique, le traitement du langage naturel et l'automatisation robotique des processus pour optimiser les opérations, améliorer la prise de décision et accroître l'efficacité."
      },
      {
        question: "Quels types de solutions logicielles personnalisées proposez-vous ?",
        answer: "Nous développons des solutions logicielles sur mesure, notamment des applications d'entreprise, des applications mobiles, des plateformes web et des systèmes intégrés conçus pour répondre à vos besoins spécifiques."
      },
      {
        question: "Fournissez-vous un support continu après l'implémentation ?",
        answer: "Oui, nous offrons un support post-implémentation complet incluant la maintenance, les mises à jour, l'optimisation et une assistance technique 24/7 via notre Pack Support Intelligent."
      }
    ]
  },
  technical: {
    title: "Questions Techniques",
    icon: Code,
    questions: [
      {
        question: "Quelles technologies utilisez-vous pour le développement ?",
        answer: "Nous utilisons des technologies web modernes, des plateformes cloud (AWS, Azure, GCP), des frameworks d'IA/ML et des solutions logicielles d'entreprise incluant React, Node.js, Python et divers outils d'IA."
      },
      {
        question: "Comment assurez-vous la sécurité des systèmes ?",
        answer: "Nous mettons en œuvre des pratiques de sécurité standard de l'industrie, notamment le chiffrement, l'authentification sécurisée, des audits de sécurité réguliers et la conformité aux réglementations comme le RGPD."
      },
      {
        question: "Pouvez-vous intégrer des systèmes existants ?",
        answer: "Oui, nous sommes spécialisés dans l'intégration de systèmes, connectant de nouvelles solutions à votre infrastructure existante tout en assurant la cohérence et la sécurité des données."
      }
    ]
  },
  implementation: {
    title: "Processus d'Implémentation",
    icon: Cog,
    questions: [
      {
        question: "Quelle est votre approche d'implémentation de projet ?",
        answer: "Nous suivons une méthodologie agile avec des phases incluant la consultation initiale, la collecte des besoins, la conception de solution, le développement, les tests, le déploiement et le support continu."
      },
      {
        question: "Combien de temps prend généralement l'implémentation ?",
        answer: "Les délais d'implémentation varient selon la portée du projet. Le Pack Fondation Numérique prend généralement 2-3 mois, tandis que les transformations complètes peuvent prendre 6-12 mois."
      },
      {
        question: "Proposez-vous une formation pour notre équipe ?",
        answer: "Oui, nous offrons des programmes de formation complets incluant documentation, ateliers et sessions pratiques pour assurer une adoption fluide des nouveaux systèmes."
      }
    ]
  },
  pricing: {
    title: "Prix et Facturation",
    icon: Banknote,
    questions: [
      {
        question: "Comment structurez-vous vos prix ?",
        answer: "Nous proposons des modèles de tarification basés sur le projet et sur l'abonnement. Chaque solution est tarifée en fonction de sa portée, sa complexité et ses besoins en ressources."
      },
      {
        question: "Y a-t-il des coûts cachés ?",
        answer: "Non, nous maintenons une transparence totale des prix. Tous les coûts, y compris les dépenses potentielles de mise à l'échelle ou de fonctionnalités supplémentaires, sont clairement indiqués dans nos propositions."
      },
      {
        question: "Proposez-vous des conditions de paiement flexibles ?",
        answer: "Oui, nous proposons diverses options de paiement, notamment mensuelles, trimestrielles ou basées sur les étapes, pour s'adapter à vos besoins commerciaux."
      }
    ]
  },
  support: {
    title: "Support et Communication",
    icon: MessageCircle,
    questions: [
      {
        question: "Quelles sont vos heures de support ?",
        answer: "Nous fournissons un support pendant les heures de bureau standard (9h - 18h HNE) avec un support d'urgence 24/7 disponible pour les problèmes critiques."
      },
      {
        question: "Comment puis-je contacter le support ?",
        answer: "Le support est disponible via plusieurs canaux, notamment email, téléphone, chat en direct et notre système de tickets. Le support d'urgence dispose de numéros de contact dédiés."
      },
      {
        question: "Quel est votre temps de réponse pour les problèmes de support ?",
        answer: "Nous visons à répondre aux demandes standard dans les 4 heures et aux problèmes urgents dans l'heure pendant les heures de bureau. Les problèmes critiques reçoivent une attention immédiate."
      }
    ]
  }
};

export const faqCategories = typeof window !== 'undefined' && window.location.pathname.startsWith('/fr') ? frenchFAQ : englishFAQ;