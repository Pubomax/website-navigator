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
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "sales",
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
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "postalCode": "Your Postal Code",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.653226,
    "longitude": -79.383184
  },
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

// Add schemas to page after load
window.addEventListener('load', function() {
  const createSchemaScript = (schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    return script;
  };
  
  document.body.appendChild(createSchemaScript(organizationSchema));
  document.body.appendChild(createSchemaScript(localBusinessSchema));
  document.body.appendChild(createSchemaScript(serviceSchema));
});