import React, { useEffect, useState } from 'react';

/**
 * Related Services Component
 * 
 * Implements hub-and-spoke content clusters and contextual internal linking
 * for improved site navigation and SEO performance.
 */

interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  icon?: string;
}

interface RelatedServicesProps {
  currentServiceId?: string;
  category?: string;
  limit?: number;
  showDescription?: boolean;
  heading?: string;
  className?: string;
}

export function RelatedServices({
  currentServiceId,
  category,
  limit = 3,
  showDescription = true,
  heading = "Related Services",
  className = ""
}: RelatedServicesProps) {
  // Mock data - in a real implementation, this would likely come from an API or data store
  const allServices: Service[] = [
    {
      id: 'ai-automation-starter',
      name: 'AI Automation Starter',
      slug: '/services/ai-automation-starter',
      description: 'Get started with AI automation quickly with our entry-level solution',
      category: 'automation',
      icon: 'sparkles'
    },
    {
      id: 'custom-ai-automation',
      name: 'Custom AI Automation',
      slug: '/services/custom-ai-automation',
      description: 'Fully tailored AI automation solutions for complex business processes',
      category: 'automation',
      icon: 'robot'
    },
    {
      id: 'marketing-automation',
      name: 'Marketing Automation',
      slug: '/services/marketing-automation',
      description: 'Streamline your marketing campaigns with intelligent automation',
      category: 'marketing',
      icon: 'megaphone'
    },
    {
      id: 'sales-automation',
      name: 'Sales Automation',
      slug: '/services/sales-automation',
      description: 'Optimize your sales process with AI-powered automation',
      category: 'sales',
      icon: 'chart-bar'
    },
    {
      id: 'digital-foundation',
      name: 'Digital Foundation',
      slug: '/services/digital-foundation',
      description: 'Build a strong digital infrastructure for your business',
      category: 'infrastructure',
      icon: 'server'
    },
    {
      id: 'transformation-consulting',
      name: 'Transformation Consulting',
      slug: '/services/transformation-consulting',
      description: 'Strategic guidance for your digital transformation journey',
      category: 'consulting',
      icon: 'light-bulb'
    }
  ];
  
  const [relatedServices, setRelatedServices] = useState<Service[]>([]);
  
  useEffect(() => {
    // Filter services based on criteria
    let filtered = allServices;
    
    // Don't show the current service
    if (currentServiceId) {
      filtered = filtered.filter(service => service.id !== currentServiceId);
    }
    
    // Filter by category if provided
    if (category) {
      filtered = filtered.filter(service => service.category === category);
    }
    
    // If no category provided and we have a currentServiceId, prioritize same category
    if (!category && currentServiceId) {
      const currentService = allServices.find(service => service.id === currentServiceId);
      if (currentService) {
        // First add services from same category
        const sameCategory = filtered.filter(service => service.category === currentService.category);
        const otherCategories = filtered.filter(service => service.category !== currentService.category);
        filtered = [...sameCategory, ...otherCategories];
      }
    }
    
    // Limit number of results
    filtered = filtered.slice(0, limit);
    
    setRelatedServices(filtered);
  }, [currentServiceId, category, limit]);
  
  if (relatedServices.length === 0) {
    return null;
  }
  
  return (
    <section className={`related-services py-8 ${className}`} aria-labelledby="related-services-heading">
      <div className="container mx-auto px-4">
        <h2 id="related-services-heading" className="text-2xl font-bold mb-6">{heading}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map(service => (
            <div 
              key={service.id} 
              className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">
                <a
                  href={service.slug}
                  className="text-primary hover:underline flex items-center"
                  aria-describedby={`${service.id}-desc`}
                >
                  {service.icon && (
                    <span className="icon mr-2" aria-hidden="true">
                      {/* Icon would be rendered here */}
                    </span>
                  )}
                  {service.name}
                </a>
              </h3>
              
              {showDescription && (
                <p id={`${service.id}-desc`} className="text-gray-600 mb-4">
                  {service.description}
                </p>
              )}
              
              <a
                href={service.slug}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                aria-label={`Learn more about ${service.name}`}
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 010-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a
            href="/services"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
          >
            View all services
          </a>
        </div>
      </div>
    </section>
  );
}