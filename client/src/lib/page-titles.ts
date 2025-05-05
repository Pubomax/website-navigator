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
  | 'velocity'
  | 'accelerate'
  | 'dominate'
  | 'notFound';

// Title format: Page Name | Minecore Group
const pageTitles: Record<PathKey, PageTitleData> = {
  home: {
    title: {
      en: 'Make More Money, Work Less | Minecore Group',
      fr: 'Gagnez Plus, Travaillez Moins | Groupe Minecore'
    },
    description: {
      en: 'AI-powered business automation solutions for Montreal small businesses. Generate more leads, increase revenue, and reduce your workload.',
      fr: 'Solutions d\'automatisation IA pour PME à Montréal. Générez plus de prospects, augmentez vos revenus et réduisez votre charge de travail.'
    }
  },
  contact: {
    title: {
      en: 'Get Started | AI Business Automation',
      fr: 'Commencez | Automatisation d\'Entreprise IA'
    },
    description: {
      en: 'Contact Minecore Group now to start making more money while working less. Our AI automation solutions are tailored for Montreal small businesses.',
      fr: 'Contactez Groupe Minecore maintenant pour commencer à gagner plus d\'argent tout en travaillant moins. Nos solutions d\'automatisation IA sont adaptées aux petites entreprises de Montréal.'
    }
  },
  consultation: {
    title: {
      en: 'Free AI Consultation | Minecore Group',
      fr: 'Consultation Gratuite IA | Groupe Minecore'
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
      en: 'AI Business Automation FAQ | Minecore Group',
      fr: 'FAQ Automatisation d\'Entreprise IA | Groupe Minecore'
    },
    description: {
      en: 'Find answers to common questions about AI automation for small businesses. Learn how our solutions help you make more money while working less.',
      fr: 'Trouvez des réponses aux questions courantes sur l\'automatisation IA pour les petites entreprises. Découvrez comment nos solutions vous aident à gagner plus d\'argent tout en travaillant moins.'
    }
  },
  blog: {
    title: {
      en: 'AI Automation Tips & Insights | Blog',
      fr: 'Conseils & Idées d\'Automatisation IA | Blog'
    },
    description: {
      en: 'Learn how small businesses use AI automation to save time and increase revenue. Practical tips, success stories, and insights from Montreal\'s automation experts.',
      fr: 'Découvrez comment les petites entreprises utilisent l\'automatisation IA pour gagner du temps et augmenter leurs revenus. Conseils pratiques, histoires de réussite et perspectives des experts en automatisation de Montréal.'
    }
  },
  caseStudies: {
    title: {
      en: 'Small Business Success Stories | Case Studies',
      fr: 'Histoires de Réussite de PME | Études de Cas'
    },
    description: {
      en: 'Real results from Montreal businesses using our AI automation solutions. See how our clients increased revenue and saved time with Minecore Group\'s services.',
      fr: 'Résultats réels d\'entreprises montréalaises utilisant nos solutions d\'automatisation IA. Découvrez comment nos clients ont augmenté leurs revenus et gagné du temps avec les services de Groupe Minecore.'
    }
  },
  services: {
    title: {
      en: 'Make More Money, Work Less | AI Services',
      fr: 'Gagnez Plus, Travaillez Moins | Services IA'
    },
    description: {
      en: 'AI automation services for Montreal small businesses. Sales automation, lead generation, and marketing solutions that save time and grow revenue with less work.',
      fr: 'Services d\'automatisation IA pour les petites entreprises de Montréal. Automatisation des ventes, génération de leads et solutions marketing qui économisent du temps et augmentent les revenus avec moins de travail.'
    }
  },
  solutions: {
    title: {
      en: 'More Revenue, Less Work | AI Solutions',
      fr: 'Plus de Revenus, Moins de Travail | Solutions IA'
    },
    description: {
      en: 'AI automation solutions for Montreal small businesses. Save time and increase revenue with our intelligent lead generation and sales acceleration tools.',
      fr: 'Solutions d\'automatisation IA pour les petites entreprises de Montréal. Économisez du temps et augmentez vos revenus grâce à nos outils intelligents de génération de leads et d\'accélération des ventes.'
    }
  },
  about: {
    title: {
      en: 'About Us | Minecore Group',
      fr: 'À Propos de Nous | Groupe Minecore'
    },
    description: {
      en: '20 years of experience in helping Montreal businesses grow with AI automation. Learn about our mission to make small businesses more profitable with less work.',
      fr: '20 ans d\'expérience à aider les entreprises de Montréal à se développer grâce à l\'automatisation IA. Découvrez notre mission de rendre les petites entreprises plus rentables avec moins de travail.'
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
      en: 'AI Solutions for Small Businesses | Minecore Group',
      fr: 'Solutions IA pour Petites Entreprises | Groupe Minecore'
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
      en: 'AI Solutions in Quebec | Minecore Group',
      fr: 'Solutions IA au Québec | Groupe Minecore'
    },
    description: {
      en: 'Minecore Group provides specialized AI automation services for small businesses in Montreal and throughout Quebec. Local expertise, global technology.',
      fr: 'Groupe Minecore fournit des services d\'automatisation IA spécialisés pour les petites entreprises à Montréal et partout au Québec. Expertise locale, technologie mondiale.'
    }
  },
  velocity: {
    title: {
      en: 'VELOCITY: $500/mo Starter Plan | Minecore Group',
      fr: 'VELOCITY: Forfait Débutant à 500$/mois | Groupe Minecore'
    },
    description: {
      en: 'Our starter automation plan at $500/month includes 2 workflows, lead capture, and email marketing. Perfect for small Montreal businesses ready to grow.',
      fr: 'Notre forfait d\'automatisation de départ à 500$/mois comprend 2 flux de travail, la capture de leads et le marketing par e-mail. Parfait pour les petites entreprises de Montréal prêtes à se développer.'
    }
  },
  accelerate: {
    title: {
      en: 'ACCELERATE: $1,500/mo Growth Plan | Minecore Group',
      fr: 'ACCELERATE: Forfait Croissance à 1 500$/mois | Groupe Minecore'
    },
    description: {
      en: 'Scale your business with 5 automation workflows, CRM integration, and comprehensive marketing automation. Increase revenue by 20-30% with our $1,500/month plan.',
      fr: 'Développez votre entreprise avec 5 flux d\'automatisation, l\'intégration CRM et l\'automatisation marketing complète. Augmentez vos revenus de 20-30% avec notre forfait à 1 500$/mois.'
    }
  },
  dominate: {
    title: {
      en: 'DOMINATE: $3,500/mo Enterprise Plan | Minecore Group',
      fr: 'DOMINATE: Forfait Entreprise à 3 500$/mois | Groupe Minecore'
    },
    description: {
      en: 'Transform your business with 10+ custom automation workflows, AI-driven marketing, predictive analytics, and a dedicated account manager at $3,500/month.',
      fr: 'Transformez votre entreprise avec plus de 10 flux d\'automatisation personnalisés, marketing piloté par l\'IA, analyses prédictives et un gestionnaire de compte dédié à 3 500$/mois.'
    }
  },
  notFound: {
    title: {
      en: '404 Page Not Found | Minecore Group',
      fr: '404 Page Non Trouvée | Groupe Minecore'
    },
    description: {
      en: 'Sorry, the page you are looking for might have been removed or is temporarily unavailable. Please visit our homepage or explore popular sections to find what you need.',
      fr: 'Désolé, la page que vous recherchez a peut-être été supprimée ou est temporairement indisponible. Veuillez visiter notre page d\'accueil ou explorer les sections populaires pour trouver ce dont vous avez besoin.'
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