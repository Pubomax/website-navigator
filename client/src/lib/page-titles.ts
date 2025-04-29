/**
 * Helper utility for managing page titles across the site
 */

interface PageTitleData {
  title: {
    en: string;
    fr: string;
  };
  description?: {
    en: string;
    fr: string;
  };
}

type PathKey = 
  | 'home'
  | 'contact'
  | 'consultation'
  | 'privacy'
  | 'terms'
  | 'faq'
  | 'blog'
  | 'caseStudies'
  | 'services'
  | 'solutions'
  | 'about'
  | 'team'
  | 'story'
  | 'mission'
  | 'careers'
  | 'admin'
  | 'integrations'
  | 'digitalFoundation'
  | 'transformationConsulting'
  | 'aiAutomationStarter'
  | 'customAiAutomation'
  | 'customSoftware'
  | 'intelligentSupport'
  | 'salesAutomation'
  | 'marketingAutomation'
  | 'manufacturing'
  | 'finance'
  | 'retail'
  | 'healthcare'
  | 'publicSector'
  | 'micro'
  | 'midSized'
  | 'large'
  | 'ontario'
  | 'britishColumbia'
  | 'alberta'
  | 'quebec'
  | 'notFound';

// Title format: Page Name | Minecore Group
const pageTitles: Record<PathKey, PageTitleData> = {
  home: {
    title: {
      en: 'Minecore Group | AI Business Automation for Montreal SMBs',
      fr: 'Groupe Minecore | Automatisation IA pour PME à Montréal'
    },
    description: {
      en: 'Make more money, work less with Minecore Group. AI-powered business automation solutions for Montreal small businesses that accelerate lead generation and revenue growth.',
      fr: 'Gagnez plus d\'argent, travaillez moins avec Groupe Minecore. Solutions d\'automatisation d\'entreprise alimentées par l\'IA pour les petites entreprises de Montréal qui accélèrent la génération de prospects et la croissance des revenus.'
    }
  },
  contact: {
    title: {
      en: 'Contact Us | Minecore Group Montreal',
      fr: 'Contactez-nous | Groupe Minecore Montréal'
    },
    description: {
      en: 'Contact Minecore Group for AI automation solutions tailored for Montreal small businesses. Increase revenue and reduce workload with our specialized services.',
      fr: 'Contactez Groupe Minecore pour des solutions d\'automatisation IA adaptées aux petites entreprises de Montréal. Augmentez vos revenus et réduisez votre charge de travail avec nos services spécialisés.'
    }
  },
  consultation: {
    title: {
      en: 'Free AI Automation Consultation | Minecore Group Montreal',
      fr: 'Consultation Gratuite d\'Automatisation IA | Groupe Minecore Montréal'
    },
    description: {
      en: 'Book a free consultation with Minecore Group\'s Montreal automation experts. Learn how our AI solutions can help your small business generate more leads and revenue.',
      fr: 'Réservez une consultation gratuite avec les experts en automatisation de Groupe Minecore à Montréal. Découvrez comment nos solutions d\'IA peuvent aider votre petite entreprise à générer plus de prospects et de revenus.'
    }
  },
  privacy: {
    title: {
      en: 'Privacy Policy | Minecore Group',
      fr: 'Politique de Confidentialité | Groupe Minecore'
    }
  },
  terms: {
    title: {
      en: 'Terms of Service | Minecore Group',
      fr: 'Conditions d\'Utilisation | Groupe Minecore'
    }
  },
  faq: {
    title: {
      en: 'Frequently Asked Questions | Minecore Group',
      fr: 'Questions Fréquemment Posées | Groupe Minecore'
    }
  },
  blog: {
    title: {
      en: 'Blog | Minecore Group',
      fr: 'Blog | Groupe Minecore'
    }
  },
  caseStudies: {
    title: {
      en: 'Case Studies | Minecore Group',
      fr: 'Études de Cas | Groupe Minecore'
    }
  },
  services: {
    title: {
      en: 'AI Automation Services for Montreal SMBs | Minecore Group',
      fr: 'Services d\'Automatisation IA pour PME à Montréal | Groupe Minecore'
    },
    description: {
      en: 'Discover our full range of AI automation services designed specifically for Montreal small businesses. Sales automation, lead generation, and marketing solutions that save time and grow revenue.',
      fr: 'Découvrez notre gamme complète de services d\'automatisation IA conçus spécifiquement pour les petites entreprises de Montréal. Automatisation des ventes, génération de leads et solutions marketing qui économisent du temps et augmentent les revenus.'
    }
  },
  solutions: {
    title: {
      en: 'AI Automation Solutions for Montreal Small Businesses | Minecore Group',
      fr: 'Solutions d\'Automatisation IA pour Petites Entreprises à Montréal | Groupe Minecore'
    },
    description: {
      en: 'Tailored AI automation solutions for Montreal small businesses. Increase revenue and reduce workload with our intelligent lead generation and sales acceleration packages.',
      fr: 'Solutions d\'automatisation IA sur mesure pour les petites entreprises de Montréal. Augmentez vos revenus et réduisez votre charge de travail grâce à nos forfaits intelligents de génération de leads et d\'accélération des ventes.'
    }
  },
  about: {
    title: {
      en: 'About Us | Minecore Group',
      fr: 'À Propos de Nous | Groupe Minecore'
    }
  },
  team: {
    title: {
      en: 'Our Team | Minecore Group',
      fr: 'Notre Équipe | Groupe Minecore'
    }
  },
  story: {
    title: {
      en: 'Our Story | Minecore Group',
      fr: 'Notre Histoire | Groupe Minecore'
    }
  },
  mission: {
    title: {
      en: 'Our Mission | Minecore Group',
      fr: 'Notre Mission | Groupe Minecore'
    }
  },
  careers: {
    title: {
      en: 'Careers | Minecore Group',
      fr: 'Carrières | Groupe Minecore'
    },
    description: {
      en: 'Join our team at Minecore Group. We are looking for talented individuals to help us build AI automation solutions for small businesses in Montreal.',
      fr: 'Rejoignez notre équipe chez Groupe Minecore. Nous recherchons des personnes talentueuses pour nous aider à construire des solutions d\'automatisation IA pour les petites entreprises à Montréal.'
    }
  },
  admin: {
    title: {
      en: 'Admin Dashboard | Minecore Group',
      fr: 'Tableau de Bord Admin | Groupe Minecore'
    }
  },
  integrations: {
    title: {
      en: 'Integration Guides | Minecore Group',
      fr: 'Guides d\'Intégration | Groupe Minecore'
    }
  },
  digitalFoundation: {
    title: {
      en: 'Digital Foundation | Minecore Group',
      fr: 'Fondation Numérique | Groupe Minecore'
    }
  },
  transformationConsulting: {
    title: {
      en: 'Revenue Acceleration Consulting | Minecore Group',
      fr: 'Consultation en Accélération des Revenus | Groupe Minecore'
    }
  },
  aiAutomationStarter: {
    title: {
      en: 'AI Automation Starter | Minecore Group',
      fr: 'Automatisation IA de Base | Groupe Minecore'
    }
  },
  customAiAutomation: {
    title: {
      en: 'Custom AI Automation | Minecore Group',
      fr: 'Automatisation IA Personnalisée | Groupe Minecore'
    }
  },
  customSoftware: {
    title: {
      en: 'Custom Software Development | Minecore Group',
      fr: 'Développement Logiciel Sur Mesure | Groupe Minecore'
    }
  },
  intelligentSupport: {
    title: {
      en: 'Intelligent Support | Minecore Group',
      fr: 'Support Intelligent | Groupe Minecore'
    }
  },
  salesAutomation: {
    title: {
      en: 'Sales Automation | Minecore Group',
      fr: 'Automatisation des Ventes | Groupe Minecore'
    }
  },
  marketingAutomation: {
    title: {
      en: 'Marketing Automation | Minecore Group',
      fr: 'Automatisation Marketing | Groupe Minecore'
    }
  },
  manufacturing: {
    title: {
      en: 'Manufacturing AI Solutions | Minecore Group',
      fr: 'Solutions IA pour la Fabrication | Groupe Minecore'
    }
  },
  finance: {
    title: {
      en: 'Finance AI Solutions | Minecore Group',
      fr: 'Solutions IA pour la Finance | Groupe Minecore'
    }
  },
  retail: {
    title: {
      en: 'Retail AI Solutions | Minecore Group',
      fr: 'Solutions IA pour le Commerce | Groupe Minecore'
    }
  },
  healthcare: {
    title: {
      en: 'Healthcare AI Solutions | Minecore Group',
      fr: 'Solutions IA pour la Santé | Groupe Minecore'
    }
  },
  publicSector: {
    title: {
      en: 'Public Sector AI Solutions | Minecore Group',
      fr: 'Solutions IA pour le Secteur Public | Groupe Minecore'
    }
  },
  micro: {
    title: {
      en: 'AI Automation for Montreal Small Businesses | Minecore Group',
      fr: 'Automatisation IA pour Petites Entreprises à Montréal | Groupe Minecore'
    },
    description: {
      en: 'Affordable AI automation solutions specifically designed for Montreal small businesses. Grow your business, save time, and reduce stress with our specialized automation tools.',
      fr: 'Solutions d\'automatisation IA abordables spécialement conçues pour les petites entreprises de Montréal. Développez votre entreprise, gagnez du temps et réduisez le stress grâce à nos outils d\'automatisation spécialisés.'
    }
  },
  midSized: {
    title: {
      en: 'AI Solutions for Mid-Sized Businesses | Minecore Group',
      fr: 'Solutions IA pour Entreprises Moyennes | Groupe Minecore'
    }
  },
  large: {
    title: {
      en: 'AI Solutions for Large Enterprises | Minecore Group',
      fr: 'Solutions IA pour Grandes Entreprises | Groupe Minecore'
    }
  },
  ontario: {
    title: {
      en: 'AI Solutions in Ontario | Minecore Group',
      fr: 'Solutions IA en Ontario | Groupe Minecore'
    }
  },
  britishColumbia: {
    title: {
      en: 'AI Solutions in British Columbia | Minecore Group',
      fr: 'Solutions IA en Colombie-Britannique | Groupe Minecore'
    }
  },
  alberta: {
    title: {
      en: 'AI Solutions in Alberta | Minecore Group',
      fr: 'Solutions IA en Alberta | Groupe Minecore'
    }
  },
  quebec: {
    title: {
      en: 'AI Automation Solutions in Montreal & Quebec | Minecore Group',
      fr: 'Solutions d\'Automatisation IA à Montréal et au Québec | Groupe Minecore'
    },
    description: {
      en: 'Minecore Group provides specialized AI automation services for small businesses in Montreal and throughout Quebec. Local expertise, global technology.',
      fr: 'Groupe Minecore fournit des services d\'automatisation IA spécialisés pour les petites entreprises à Montréal et partout au Québec. Expertise locale, technologie mondiale.'
    }
  },
  notFound: {
    title: {
      en: 'Page Not Found | Minecore Group',
      fr: 'Page Non Trouvée | Groupe Minecore'
    }
  }
};

/**
 * Get the page title and description based on the page key and language
 */
export function getPageTitleData(key: PathKey, isPathFrench: boolean = false): {title: string, description?: string} {
  const language = isPathFrench ? 'fr' : 'en';
  const data = pageTitles[key] || pageTitles.home;
  
  return {
    title: data.title[language],
    description: data.description?.[language]
  };
}