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
      en: 'Minecore Group | Business AI Automation',
      fr: 'Groupe Minecore | Automatisation IA pour Entreprises'
    },
    description: {
      en: 'Make more money, work less with Minecore Group. AI-powered business automation solutions that accelerate revenue generation.',
      fr: 'Gagnez plus d\'argent, travaillez moins avec Groupe Minecore. Solutions d\'automatisation d\'entreprise alimentées par l\'IA qui accélèrent la génération de revenus.'
    }
  },
  contact: {
    title: {
      en: 'Contact Us | Minecore Group',
      fr: 'Contactez-nous | Groupe Minecore'
    }
  },
  consultation: {
    title: {
      en: 'Book a Consultation | Minecore Group',
      fr: 'Réservez une Consultation | Groupe Minecore'
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
      en: 'Our Services | Minecore Group',
      fr: 'Nos Services | Groupe Minecore'
    }
  },
  solutions: {
    title: {
      en: 'AI Automation Solutions | Minecore Group',
      fr: 'Solutions d\'Automatisation IA | Groupe Minecore'
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
      en: 'AI Solutions for Small Businesses | Minecore Group',
      fr: 'Solutions IA pour Petites Entreprises | Groupe Minecore'
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
      en: 'AI Solutions in Quebec | Minecore Group',
      fr: 'Solutions IA au Québec | Groupe Minecore'
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