// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Minecore Group",
  "url": "https://minecoregroup.com",
  "logo": "https://minecoregroup.com/images/logo.png",
  "description": "Leading digital transformation solutions provider in Canada",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CA",
    "addressRegion": "ON",
    "addressLocality": "Toronto"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+15141234567",
    "contactType": "sales",
    "email": "hello@minecoregroup.com",
    "areaServed": ["CA"],
    "availableLanguage": ["English", "French"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/minecoregroup",
    "https://twitter.com/minecoregroup",
    "https://www.facebook.com/minecoregroup"
  ]
};

// Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Minecore Group",
  "image": "https://minecoregroup.com/images/logo.png",
  "logo": "https://minecoregroup.com/images/logo.png",
  "url": "https://minecoregroup.com",
  "telephone": "+15141234567",
  "email": "hello@minecoregroup.com",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3580 Boulevard Saint Elzear Ouest",
    "addressLocality": "Laval",
    "addressRegion": "QC",
    "postalCode": "H7P 0L7",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.5868,
    "longitude": -73.7472
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Toronto"
    },
    {
      "@type": "City",
      "name": "Vancouver"
    },
    {
      "@type": "City",
      "name": "Montreal"
    },
    {
      "@type": "City",
      "name": "Calgary"
    },
    {
      "@type": "City",
      "name": "Ottawa"
    }
  ]
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Transformation",
  "provider": {
    "@type": "Organization",
    "name": "Minecore Group"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Canada"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Transformation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation",
          "description": "Enterprise-grade AI automation solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Foundation",
          "description": "Core digital infrastructure and transformation"
        }
      }
    ]
  }
};

// Product Schema for Service Offerings
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AI Automation Starter",
  "description": "Quickly implement AI automation with our starter package",
  "brand": {
    "@type": "Brand",
    "name": "Minecore Group"
  },
  "offers": {
    "@type": "Offer",
    "price": "4999.00",
    "priceCurrency": "CAD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "image": "https://minecoregroup.com/images/products/ai-automation-starter.webp"
};

// Review Schema for Testimonials
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": "Minecore Group AI Automation Services"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Sarah Johnson"
  },
  "reviewBody": "Minecore Group transformed our business with their AI automation solutions. We've seen a 43% improvement in our workflow efficiency and significant cost savings within just three months.",
  "publisher": {
    "@type": "Organization",
    "name": "Tech Innovators Magazine"
  }
};

// HowTo Schema for Process Descriptions
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Implement AI Automation in Your Business",
  "description": "A step-by-step guide to implementing AI automation in your business operations",
  "totalTime": "P30D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "CAD",
    "value": "5000"
  },
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Process Analysis"
    },
    {
      "@type": "HowToTool",
      "name": "Custom AI Solution"
    },
    {
      "@type": "HowToTool",
      "name": "Integration Services"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Process Assessment",
      "text": "Our team analyzes your current workflows to identify automation opportunities",
      "url": "https://minecoregroup.com/services/ai-automation-starter#assessment",
      "image": "https://minecoregroup.com/images/process/assessment.webp"
    },
    {
      "@type": "HowToStep",
      "name": "Solution Design",
      "text": "We design a custom AI automation solution tailored to your business needs",
      "url": "https://minecoregroup.com/services/ai-automation-starter#design",
      "image": "https://minecoregroup.com/images/process/design.webp"
    },
    {
      "@type": "HowToStep",
      "name": "Implementation",
      "text": "Our experts implement the solution and integrate it with your existing systems",
      "url": "https://minecoregroup.com/services/ai-automation-starter#implementation",
      "image": "https://minecoregroup.com/images/process/implementation.webp"
    },
    {
      "@type": "HowToStep",
      "name": "Training & Support",
      "text": "We provide comprehensive training and ongoing support",
      "url": "https://minecoregroup.com/services/ai-automation-starter#support",
      "image": "https://minecoregroup.com/images/process/support.webp"
    }
  ]
};

// VideoObject Schema for Video Content
const videoObjectSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "AI Automation Success Story: Montreal Manufacturing",
  "description": "Learn how a Montreal-based manufacturing company achieved 37% cost reduction with our AI automation solutions",
  "thumbnailUrl": "https://minecoregroup.com/images/videos/case-study-thumbnail.webp",
  "uploadDate": "2025-01-15T08:00:00+08:00",
  "duration": "PT5M32S",
  "contentUrl": "https://minecoregroup.com/videos/case-study-montreal-manufacturing.mp4",
  "embedUrl": "https://www.youtube.com/embed/abc12345",
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/WatchAction",
    "userInteractionCount": 2347
  },
  "publisher": {
    "@type": "Organization",
    "name": "Minecore Group",
    "logo": {
      "@type": "ImageObject",
      "url": "https://minecoregroup.com/images/logo.png",
      "width": "300",
      "height": "60"
    }
  }
};

// Add schemas to page after load
// Create a BreadcrumbList schema for the current page
function createBreadcrumbSchema(pathParts) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": []
  };
  
  let currentPath = '';
  pathParts.forEach((part, index) => {
    if (part) {
      currentPath += '/' + part;
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": index + 1,
        "name": part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
        "item": `https://minecoregroup.com${currentPath}`
      });
    }
  });
  
  return breadcrumbSchema;
}

// Add schemas to page after load
window.addEventListener('load', function() {
  const createSchemaScript = (schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    return script;
  };
  
  // Add base schemas
  document.body.appendChild(createSchemaScript(organizationSchema));
  document.body.appendChild(createSchemaScript(localBusinessSchema));
  document.body.appendChild(createSchemaScript(serviceSchema));
  
  // Get current page path information
  const path = window.location.pathname;
  const pathParts = path.split('/').filter(Boolean);
  
  // Add breadcrumb schema based on current path
  if (pathParts.length > 0) {
    document.body.appendChild(createSchemaScript(createBreadcrumbSchema(pathParts)));
  }
  
  // Add page-specific schemas based on URL patterns
  if (path.includes('/services/')) {
    // Add product and howto schemas on service pages
    document.body.appendChild(createSchemaScript(productSchema));
    document.body.appendChild(createSchemaScript(howToSchema));
  }
  
  if (path.includes('/case-studies/') || path.includes('/testimonials/')) {
    // Add review schema on testimonial pages
    document.body.appendChild(createSchemaScript(reviewSchema));
  }
  
  if (path.includes('/videos/') || path.includes('/case-studies/')) {
    // Add video schema on pages with video content
    document.body.appendChild(createSchemaScript(videoObjectSchema));
  }
});