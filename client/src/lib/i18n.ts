type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navigation
    services: "Services",
    solutions: "Solutions",
    company: "Company",
    contact: "Contact",
    getStarted: "Get Started",
    language: "Language",

    // Common sections
    readMore: "Read More",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    viewCaseStudies: "View Case Studies",
    partnerWithUs: "Partner with Us",
    seeOurImpact: "See Our Impact",

    // Service names
    digitalFoundation: "Digital Foundation Package",
    transformationConsulting: "Digital Transformation Consulting",
    aiAutomationStarter: "AI & Automation Starter Package",
    customAiAutomation: "Custom AI & Automation Package",
    customSoftware: "Custom Software Development",
    intelligentSupport: "Intelligent Support Package",

    // Industry sectors
    manufacturing: "Manufacturing",
    finance: "Finance",
    retail: "Retail",
    healthcare: "Healthcare",
    publicSector: "Public Sector",

    // Business types
    microEnterprises: "Micro Enterprises",
    midSizedEnterprises: "Mid-Sized Enterprises",
    largeEnterprises: "Large Enterprises",

    // Company pages
    companyStory: "Company Story",
    teamBios: "Team Bios",
    missionValues: "Mission & Values",

    // Groups
    "Industries": "Industries",
    "Business Size": "Business Size",
    "About Us": "About Us",
    "Resources": "Resources",
  },
  fr: {
    // Navigation
    services: "Services",
    solutions: "Solutions",
    company: "Entreprise",
    contact: "Contact",
    getStarted: "Commencer",
    language: "Langue",

    // Common sections
    readMore: "En savoir plus",
    learnMore: "En apprendre davantage",
    contactUs: "Contactez-nous",
    viewCaseStudies: "Voir les études de cas",
    partnerWithUs: "Devenir partenaire",
    seeOurImpact: "Voir notre impact",

    // Service names
    digitalFoundation: "Pack Fondation Numérique",
    transformationConsulting: "Conseil en Transformation Numérique",
    aiAutomationStarter: "Pack Démarrage IA & Automatisation",
    customAiAutomation: "Pack IA & Automatisation Personnalisé",
    customSoftware: "Développement Logiciel sur Mesure",
    intelligentSupport: "Pack Support Intelligent",

    // Industry sectors
    manufacturing: "Fabrication",
    finance: "Finance",
    retail: "Commerce de Détail",
    healthcare: "Santé",
    publicSector: "Secteur Public",

    // Business types
    microEnterprises: "Micro-entreprises",
    midSizedEnterprises: "Moyennes Entreprises",
    largeEnterprises: "Grandes Entreprises",

    // Company pages
    companyStory: "Notre Histoire",
    teamBios: "Notre Équipe",
    missionValues: "Mission et Valeurs",

    // Groups
    "Industries": "Industries",
    "Business Size": "Taille d'Entreprise",
    "About Us": "À Propos",
    "Resources": "Ressources",
  },
};

export const useTranslation = (lang: Language = 'en') => {
  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['en'][key] || key;
  };

  return { t };
};

export const isValidLanguage = (lang: string): lang is Language => {
  return ['en', 'fr'].includes(lang);
};