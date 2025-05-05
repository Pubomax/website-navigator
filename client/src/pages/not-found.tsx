import { Link, useLocation } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, Mail, Search, Phone, MapPin, MessageSquare } from "lucide-react";
import { PageTitle } from "@/components/page-title";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "404 Page Non Trouvée" : "404 Page Not Found",
  description: isPathFrench
    ? "Désolé, nous n'avons pas trouvé la page que vous recherchez. La page a peut-être été supprimée, renommée ou n'existe pas."
    : "Sorry, we couldn't find the page you're looking for. The page might have been removed, renamed, or doesn't exist.",
  reportIssue: isPathFrench ? "Signaler un problème" : "Report an issue",
  backToHome: isPathFrench ? "Retour à l'Accueil" : "Back to Home",
  contactUs: isPathFrench ? "Nous contacter" : "Contact Us",
  popularPages: isPathFrench ? "Pages populaires" : "Popular Pages",
  services: isPathFrench ? "Services" : "Services",
  solutions: isPathFrench ? "Solutions" : "Solutions",
  faq: isPathFrench ? "FAQ" : "FAQ",
  consultation: isPathFrench ? "Consultation" : "Consultation",
  sitemap: isPathFrench ? "Plan du site" : "Sitemap",
  phone: isPathFrench ? "Téléphone" : "Phone",
  search: isPathFrench ? "Chercher" : "Search"
});

// Popular pages to suggest as alternatives
const getPopularPages = (isPathFrench: boolean) => [
  { 
    name: isPathFrench ? "Accueil" : "Home", 
    path: isPathFrench ? "/fr" : "/", 
    icon: Home 
  },
  { 
    name: isPathFrench ? "Services" : "Services", 
    path: isPathFrench ? "/fr/services" : "/services", 
    icon: MessageSquare 
  },
  { 
    name: isPathFrench ? "Solutions" : "Solutions", 
    path: isPathFrench ? "/fr/solutions" : "/solutions", 
    icon: Search 
  },
  { 
    name: isPathFrench ? "Consultation" : "Consultation", 
    path: isPathFrench ? "/fr/consultation" : "/consultation", 
    icon: Phone 
  },
  { 
    name: isPathFrench ? "Contact" : "Contact", 
    path: isPathFrench ? "/fr/contact" : "/contact", 
    icon: Mail 
  },
  { 
    name: isPathFrench ? "FAQ" : "FAQ", 
    path: isPathFrench ? "/fr/faq" : "/faq", 
    icon: AlertCircle 
  }
];

export default function NotFound() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);
  const popularPages = getPopularPages(isPathFrench);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background py-12 px-4">
      <PageTitle pageKey="notFound" />
      
      <Card className="w-full max-w-3xl mx-auto shadow-lg border-primary/10">
        <CardHeader className="bg-primary/5 border-b border-primary/10 flex flex-col items-center text-center pb-6">
          <div className="rounded-full bg-destructive/10 p-3 mb-3">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
          <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
          <p className="text-muted-foreground max-w-lg">
            {content.description}
          </p>
        </CardHeader>
        
        <CardContent className="pt-8 pb-6 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              {content.popularPages}
            </h2>
            <div className="space-y-2">
              {popularPages.map((page) => (
                <Link 
                  key={page.path} 
                  href={page.path}
                  className="flex items-center gap-2 p-2 hover:bg-primary/5 rounded-md transition-colors text-muted-foreground hover:text-foreground"
                >
                  <page.icon className="h-4 w-4 text-primary" />
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                {content.contactUs}
              </h2>
              <p className="text-sm text-muted-foreground mb-3">
                {isPathFrench 
                  ? "Besoin d'aide pour trouver quelque chose? Contactez-nous:" 
                  : "Need help finding something? Get in touch with us:"}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:5146030598" className="text-muted-foreground hover:text-primary">514-603-0598</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:hello@minecoregroup.com" className="text-muted-foreground hover:text-primary">hello@minecoregroup.com</a>
                </div>
              </div>
            </div>
            
            <div>
              <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {content.reportIssue}
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center border-t border-primary/10 pt-6 pb-4">
          <Button asChild className="min-w-[200px]">
            <Link href={isPathFrench ? "/fr" : "/"} className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              {content.backToHome}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}