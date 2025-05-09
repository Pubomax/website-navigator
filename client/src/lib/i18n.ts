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
    digitalFoundation: "Digital Foundation",
    aiAutomation: "AI Automation",
    customDevelopment: "Custom Development",
    transformationConsulting: "Digital Transformation Consulting",
    aiAutomationStarter: "AI & Automation Starter Package",
    customAiAutomation: "Custom AI & Automation Package",
    customSoftware: "Custom Software Development",
    intelligentSupport: "Intelligent Support Package",
    
    // New capitalized menu items
    "Sales Automation": "Sales Automation",
    "Marketing Automation": "Marketing Automation",
    "Digital Foundation": "Digital Foundation",
    "Custom Software": "Custom Software Development",
    "AI Automation Starter": "AI & Automation Starter Package",
    "Transformation Consulting": "Digital Transformation Consulting",
    "Manufacturing": "Manufacturing",
    "Finance": "Finance",
    "Retail": "Retail",
    "Healthcare": "Healthcare",
    "Public Sector": "Public Sector",
    "Micro Enterprises": "Micro Enterprises",
    "Mid-Sized Enterprises": "Mid-Sized Enterprises",
    "Large Enterprises": "Large Enterprises",
    "About": "About",
    "Team": "Team",
    "Mission": "Mission",
    "Story": "Story",
    "Automated Lead Generation": "Automated Lead Generation",
    "Smart Nurturing": "Smart Nurturing",
    "Quick Acquisition": "Quick Acquisition",
    "Instant Customer Engagement": "Instant Customer Engagement",
    "Lead Generation Solutions": "Lead Generation Solutions",
    "Sales Acceleration Solutions": "Sales Acceleration Solutions",
    "Customer Engagement Solutions": "Customer Engagement Solutions",

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
    
    // Integration pages
    integrations: "Integrations & API",

    // Solution names
    automatedLeadGeneration: "Automated Lead Generation",
    smartNurturing: "Smart Nurturing",
    salesAutomation: "Sales Automation",
    instantCustomerEngagement: "Instant Customer Engagement",
    quickAcquisition: "Quick Acquisition",
    
    // Groups
    "Core Services": "Core Services",
    "Additional Services": "Additional Services",
    "Solutions": "Solutions",
    "Industries": "Industries",
    "Business Size": "Business Size",
    "About Us": "About Us",
    "Resources": "Resources",
    "Private Sector": "Private Sector",
    "Automation Systems": "Automation Systems",
    "Custom Development": "Custom Development",
    "Implementation Services": "Implementation Services",
    "Who We Are": "Who We Are",
    "Our Mission": "Our Mission",
    "Products": "Products",
    "Company": "Company",

    // Common actions
    startProject: "Start Your Project",
    scheduleConsultation: "Schedule a Consultation",
    discussProject: "Discuss Your Project",
    transformService: "Transform Your Service",
    viewSuccessStories: "View Success Stories",
    getStartedNow: "Get Started Now",
    contactSales: "Contact Sales",

    // Section headers
    overview: "Overview",
    keyFeatures: "Key Features",
    benefits: "Benefits",
    solutionOptions: "Solutions",
    process: "Process",
    implementation: "Implementation",
    outcomes: "Outcomes",
    metrics: "Metrics",
    advantages: "Advantages",
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
    digitalFoundation: "Fondation Numérique",
    aiAutomation: "Automatisation IA",
    customDevelopment: "Développement Sur Mesure",
    transformationConsulting: "Conseil en Transformation Numérique",
    aiAutomationStarter: "Pack Démarrage IA & Automatisation",
    customAiAutomation: "Pack IA & Automatisation Personnalisé",
    customSoftware: "Développement Logiciel sur Mesure",
    intelligentSupport: "Pack Support Intelligent",
    
    // New capitalized menu items
    "Sales Automation": "Automatisation des Ventes",
    "Marketing Automation": "Automatisation Marketing",
    "Digital Foundation": "Fondation Numérique",
    "Custom Software": "Développement Logiciel sur Mesure",
    "AI Automation Starter": "Pack Démarrage IA & Automatisation",
    "Transformation Consulting": "Conseil en Transformation Numérique",
    "Manufacturing": "Fabrication",
    "Finance": "Finance",
    "Retail": "Commerce de Détail",
    "Healthcare": "Santé",
    "Public Sector": "Secteur Public", 
    "Micro Enterprises": "Micro-entreprises",
    "Mid-Sized Enterprises": "Moyennes Entreprises",
    "Large Enterprises": "Grandes Entreprises",
    "About": "À Propos",
    "Team": "Équipe",
    "Mission": "Mission",
    "Story": "Histoire",
    "Automated Lead Generation": "Génération Automatisée de Leads",
    "Smart Nurturing": "Nurturing Intelligent",
    "Quick Acquisition": "Acquisition Rapide",
    "Instant Customer Engagement": "Engagement Client Instantané",
    "Lead Generation Solutions": "Solutions de Génération de Leads",
    "Sales Acceleration Solutions": "Solutions d'Accélération des Ventes",
    "Customer Engagement Solutions": "Solutions d'Engagement Client",

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
    
    // Integration pages
    integrations: "Intégrations & API",
    
    // Solution names
    automatedLeadGeneration: "Génération Automatisée de Leads",
    smartNurturing: "Nurturing Intelligent",
    salesAutomation: "Automatisation des Ventes",
    instantCustomerEngagement: "Engagement Client Instantané",
    quickAcquisition: "Acquisition Rapide",

    // Groups
    "Core Services": "Services Principaux",
    "Additional Services": "Services Additionnels",
    "Solutions": "Solutions",
    "Industries": "Industries",
    "Business Size": "Taille d'Entreprise",
    "About Us": "À Propos",
    "Resources": "Ressources",
    "Private Sector": "Secteur Privé",
    "Automation Systems": "Systèmes d'Automatisation",
    "Custom Development": "Développement Sur Mesure",
    "Implementation Services": "Services d'Implémentation",
    "Who We Are": "Qui Sommes-Nous",
    "Our Mission": "Notre Mission",
    "Products": "Produits",
    "Company": "Entreprise",

    // Common actions
    startProject: "Démarrer Votre Projet",
    scheduleConsultation: "Planifier une Consultation",
    discussProject: "Discuter de Votre Projet",
    transformService: "Transformer Votre Service",
    viewSuccessStories: "Voir les Histoires de Réussite",
    getStartedNow: "Commencer Maintenant",
    contactSales: "Contacter les Ventes",

    // Section headers
    overview: "Aperçu",
    keyFeatures: "Fonctionnalités Clés",
    benefits: "Avantages",
    solutionOptions: "Solutions",
    process: "Processus",
    implementation: "Mise en Œuvre",
    outcomes: "Résultats",
    metrics: "Indicateurs",
    advantages: "Avantages",
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