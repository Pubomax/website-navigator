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
          label: isPathFrench ? "Automatisation IA" : "AI Automation", 
          href: isPathFrench ? "/fr/services/ai-automation" : "/services/ai-automation" 
        },
        { 
          label: isPathFrench ? "Automatisation des Ventes" : "Sales Automation", 
          href: isPathFrench ? "/fr/services/sales-automation" : "/services/sales-automation" 
        },
        { 
          label: isPathFrench ? "Automatisation du Marketing" : "Marketing Automation", 
          href: isPathFrench ? "/fr/services/marketing-automation" : "/services/marketing-automation" 
        },
        { 
          label: isPathFrench ? "Logiciel Personnalisé" : "Custom Software", 
          href: isPathFrench ? "/fr/services/custom-software" : "/services/custom-software" 
        },
      ]
    },
    solutions: {
      title: isPathFrench ? "Solutions" : "Solutions",
      links: [
        { 
          label: isPathFrench ? "VELOCITY - Démarrage Rapide" : "VELOCITY - Quick Start", 
          href: isPathFrench ? "/fr/solutions/velocity" : "/solutions/velocity" 
        },
        { 
          label: isPathFrench ? "ACCELERATE - Croissance" : "ACCELERATE - Growth", 
          href: isPathFrench ? "/fr/solutions/accelerate" : "/solutions/accelerate" 
        },
        { 
          label: isPathFrench ? "DOMINATE - Transformation" : "DOMINATE - Transformation", 
          href: isPathFrench ? "/fr/solutions/dominate" : "/solutions/dominate" 
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
    company: {
      title: isPathFrench ? "Entreprise" : "Company",
      links: [
        { 
          label: isPathFrench ? "À Propos" : "About", 
          href: isPathFrench ? "/fr/about" : "/about" 
        },
        { 
          label: isPathFrench ? "Études de Cas" : "Case Studies", 
          href: isPathFrench ? "/fr/case-studies" : "/case-studies" 
        },
        { 
          label: isPathFrench ? "Témoignages" : "Testimonials", 
          href: isPathFrench ? "/fr/testimonials" : "/testimonials" 
        },
        { 
          label: isPathFrench ? "FAQ" : "FAQ", 
          href: isPathFrench ? "/fr/faq" : "/faq" 
        },
      ]
    },
    resources: {
      title: isPathFrench ? "Ressources" : "Resources",
      links: [
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
      {Object.entries(sitemapStructure).map(([key, section]) => (
        <div key={key}>
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