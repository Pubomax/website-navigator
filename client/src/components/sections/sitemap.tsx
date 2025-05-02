import { Link } from "wouter";
import { useLocation } from "wouter";

export function Sitemap() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const sitemapStructure = {
    services: {
      title: isPathFrench ? "Services" : "Services",
      links: [
        { 
          label: isPathFrench ? "Foundation Numérique" : "Digital Foundation", 
          href: isPathFrench ? "/fr/services/digital-foundation" : "/services/digital-foundation" 
        },
        { 
          label: isPathFrench ? "Consultation en Transformation" : "Transformation Consulting", 
          href: isPathFrench ? "/fr/services/transformation-consulting" : "/services/transformation-consulting" 
        },
        { 
          label: isPathFrench ? "Démarrage d'Automatisation IA" : "AI Automation Starter", 
          href: isPathFrench ? "/fr/services/ai-automation-starter" : "/services/ai-automation-starter" 
        },
        { 
          label: isPathFrench ? "Automatisation IA Personnalisée" : "Custom AI Automation", 
          href: isPathFrench ? "/fr/services/custom-ai-automation" : "/services/custom-ai-automation" 
        },
        { 
          label: isPathFrench ? "Logiciel Personnalisé" : "Custom Software", 
          href: isPathFrench ? "/fr/services/custom-software" : "/services/custom-software" 
        },
        { 
          label: isPathFrench ? "Support Intelligent" : "Intelligent Support", 
          href: isPathFrench ? "/fr/services/intelligent-support" : "/services/intelligent-support" 
        },
        { 
          label: isPathFrench ? "Automatisation des Ventes" : "Sales Automation", 
          href: isPathFrench ? "/fr/services/sales-automation" : "/services/sales-automation" 
        },
        { 
          label: isPathFrench ? "Automatisation Marketing" : "Marketing Automation", 
          href: isPathFrench ? "/fr/services/marketing-automation" : "/services/marketing-automation" 
        },
      ]
    },
    plans: {
      title: isPathFrench ? "Plans" : "Plans",
      links: [
        { 
          label: isPathFrench ? "VELOCITY - 500$/mois" : "VELOCITY - $500/month", 
          href: isPathFrench ? "/fr/plans/velocity" : "/plans/velocity" 
        },
        { 
          label: isPathFrench ? "ACCELERATE - 1 500$/mois" : "ACCELERATE - $1,500/month", 
          href: isPathFrench ? "/fr/plans/accelerate" : "/plans/accelerate" 
        },
        { 
          label: isPathFrench ? "DOMINATE - 3 500$/mois" : "DOMINATE - $3,500/month", 
          href: isPathFrench ? "/fr/plans/dominate" : "/plans/dominate" 
        },
      ]
    },
    solutions: {
      title: isPathFrench ? "Solutions" : "Solutions",
      links: [
        { 
          label: isPathFrench ? "Génération de Leads Automatisée" : "Automated Lead Generation", 
          href: isPathFrench ? "/fr/solutions/automated-lead-generation" : "/solutions/automated-lead-generation" 
        },
        { 
          label: isPathFrench ? "Nurturing Intelligent" : "Smart Nurturing", 
          href: isPathFrench ? "/fr/solutions/smart-nurturing" : "/solutions/smart-nurturing" 
        },
        { 
          label: isPathFrench ? "Engagement Client Instantané" : "Instant Customer Engagement", 
          href: isPathFrench ? "/fr/solutions/instant-customer-engagement" : "/solutions/instant-customer-engagement" 
        },
        { 
          label: isPathFrench ? "Acquisition Rapide" : "Quick Acquisition", 
          href: isPathFrench ? "/fr/solutions/quick-acquisition" : "/solutions/quick-acquisition" 
        },
      ]
    },
    industries: {
      title: isPathFrench ? "Industries" : "Industries",
      links: [
        { 
          label: isPathFrench ? "Fabrication" : "Manufacturing", 
          href: isPathFrench ? "/fr/sectors/manufacturing" : "/sectors/manufacturing" 
        },
        { 
          label: isPathFrench ? "Finance" : "Finance", 
          href: isPathFrench ? "/fr/sectors/finance" : "/sectors/finance" 
        },
        { 
          label: isPathFrench ? "Commerce de Détail" : "Retail", 
          href: isPathFrench ? "/fr/sectors/retail" : "/sectors/retail" 
        },
        { 
          label: isPathFrench ? "Soins de Santé" : "Healthcare", 
          href: isPathFrench ? "/fr/sectors/healthcare" : "/sectors/healthcare" 
        },
        { 
          label: isPathFrench ? "Secteur Public" : "Public Sector", 
          href: isPathFrench ? "/fr/sectors/public-sector" : "/sectors/public-sector" 
        },
      ]
    },
    businessTypes: {
      title: isPathFrench ? "Type d'Entreprise" : "Business Types",
      links: [
        { 
          label: isPathFrench ? "Petites Entreprises" : "Small Businesses", 
          href: isPathFrench ? "/fr/business-types/micro" : "/business-types/micro" 
        },
        { 
          label: isPathFrench ? "Moyennes Entreprises" : "Mid-Sized Businesses", 
          href: isPathFrench ? "/fr/business-types/mid-sized" : "/business-types/mid-sized" 
        },
        { 
          label: isPathFrench ? "Grandes Entreprises" : "Large Enterprises", 
          href: isPathFrench ? "/fr/business-types/large" : "/business-types/large" 
        },
      ]
    },
    regions: {
      title: isPathFrench ? "Régions" : "Regions",
      links: [
        { 
          label: isPathFrench ? "Québec" : "Quebec", 
          href: isPathFrench ? "/fr/regions/quebec" : "/regions/quebec" 
        },
        { 
          label: isPathFrench ? "Ontario" : "Ontario", 
          href: isPathFrench ? "/fr/regions/ontario" : "/regions/ontario" 
        },
        { 
          label: isPathFrench ? "Colombie-Britannique" : "British Columbia", 
          href: isPathFrench ? "/fr/regions/british-columbia" : "/regions/british-columbia" 
        },
        { 
          label: isPathFrench ? "Alberta" : "Alberta", 
          href: isPathFrench ? "/fr/regions/alberta" : "/regions/alberta" 
        },
      ]
    },
    company: {
      title: isPathFrench ? "Entreprise" : "Company",
      links: [
        { 
          label: isPathFrench ? "À Propos" : "About", 
          href: isPathFrench ? "/fr/about" : "/about" 
        },
        { 
          label: isPathFrench ? "Notre Histoire" : "Our Story", 
          href: isPathFrench ? "/fr/about/story" : "/about/story" 
        },
        { 
          label: isPathFrench ? "Notre Mission" : "Our Mission", 
          href: isPathFrench ? "/fr/about/mission" : "/about/mission" 
        },
        { 
          label: isPathFrench ? "Carrières" : "Careers", 
          href: isPathFrench ? "/fr/careers" : "/careers" 
        },
        { 
          label: isPathFrench ? "Études de Cas" : "Case Studies", 
          href: isPathFrench ? "/fr/case-studies" : "/case-studies" 
        },
        { 
          label: isPathFrench ? "FAQ" : "FAQ", 
          href: isPathFrench ? "/fr/faq" : "/faq" 
        },
      ]
    },
    contact: {
      title: isPathFrench ? "Contact" : "Contact",
      links: [
        { 
          label: isPathFrench ? "Nous Contacter" : "Contact Us", 
          href: isPathFrench ? "/fr/contact" : "/contact" 
        },
        { 
          label: isPathFrench ? "Consultation Gratuite" : "Free Consultation", 
          href: isPathFrench ? "/fr/consultation" : "/consultation" 
        },
        { 
          label: isPathFrench ? "Blog" : "Blog", 
          href: isPathFrench ? "/fr/blog" : "/blog" 
        },
        { 
          label: isPathFrench ? "Confidentialité" : "Privacy", 
          href: isPathFrench ? "/fr/privacy" : "/privacy" 
        },
        { 
          label: isPathFrench ? "Conditions" : "Terms", 
          href: isPathFrench ? "/fr/terms" : "/terms" 
        },
      ]
    }
  };
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-8 mt-8">
      {Object.entries(sitemapStructure).map(([key, section]) => (
        <div key={key} className={key === "services" || key === "company" ? "xl:col-span-2" : "xl:col-span-1"}>
          <h3 className="font-semibold text-base mb-3">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}