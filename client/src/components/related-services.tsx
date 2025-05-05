import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

interface RelatedServicesProps {
  currentService: string;
  services: RelatedService[];
  title?: string;
  subtitle?: string;
}

export function RelatedServices({ 
  currentService, 
  services, 
  title, 
  subtitle 
}: RelatedServicesProps) {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  // Filter out the current service and take only 3 related services
  const filteredServices = services
    .filter(service => service.href !== currentService)
    .slice(0, 3);
  
  const defaultTitle = isPathFrench ? "Services Connexes" : "Related Services";
  const defaultSubtitle = isPathFrench 
    ? "Explorez d'autres solutions d'automatisation qui pourraient vous intéresser" 
    : "Explore other automation solutions you might be interested in";
  
  return (
    <section className="py-12 border-t mt-16">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            {title || defaultTitle}
          </h2>
          <p className="text-muted-foreground">
            {subtitle || defaultSubtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                    <CardDescription className="mb-4">{service.description}</CardDescription>
                    <Link 
                      href={service.href} 
                      className="text-sm font-medium text-primary flex items-center hover:underline"
                    >
                      {isPathFrench 
                        ? `Découvrir notre service ${service.title.toLowerCase()}` 
                        : `Learn about our ${service.title.toLowerCase()} service`}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}