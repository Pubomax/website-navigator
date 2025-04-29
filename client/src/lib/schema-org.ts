/**
 * Schema.org structured data for SEO
 * These functions generate JSON-LD structured data that search engines can understand
 */

interface WebPageSchemaProps {
  title: string;
  description?: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
}

export function generateWebPageSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
}: WebPageSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    ...(imageUrl && { "image": imageUrl }),
    ...(datePublished && { "datePublished": datePublished }),
    ...(dateModified && { "dateModified": dateModified }),
    "isPartOf": {
      "@type": "WebSite",
      "name": "Minecore Group",
      "url": "https://minecoregroup.com"
    }
  };
}

export function generateLocalBusinessSchema(lang: 'en' | 'fr' = 'en') {
  const descriptions = {
    en: "Minecore Group specializes in AI automation solutions for small and medium-sized businesses in Montreal, providing sales automation, marketing automation, and custom software solutions to help businesses grow faster while working less.",
    fr: "Groupe Minecore se spécialise dans les solutions d'automatisation IA pour les petites et moyennes entreprises à Montréal, offrant l'automatisation des ventes, l'automatisation du marketing et des solutions logicielles personnalisées pour aider les entreprises à se développer plus rapidement tout en travaillant moins."
  };

  const priceRange = "$$$";

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Minecore Group",
    "url": lang === 'fr' ? "https://minecoregroup.com/fr" : "https://minecoregroup.com",
    "logo": "https://minecoregroup.com/images/logo.png",
    "image": "https://minecoregroup.com/images/hero-image.jpg",
    "description": descriptions[lang],
    "priceRange": priceRange,
    "telephone": "+15146030598",
    "email": "hello@minecoregroup.com",
    "currenciesAccepted": "CAD",
    "paymentAccepted": "Credit Card, Debit Card, Bank Transfer",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
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
      "latitude": 45.5545,
      "longitude": -73.7500
    },
    "sameAs": [
      "https://x.com/minecoregroup",
      "https://www.instagram.com/minecoregroup/",
      "https://www.tiktok.com/@minecoregroup"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 45.5017,
        "longitude": -73.5673
      },
      "geoRadius": "50000"
    }
  };
}

export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateProductSchema({
  name,
  description,
  url,
  imageUrl,
  price,
  priceCurrency = "CAD",
  availability = "https://schema.org/InStock",
  brand = "Minecore Group"
}: {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  price: number;
  priceCurrency?: string;
  availability?: string;
  brand?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": imageUrl,
    "url": url,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": priceCurrency,
      "availability": availability,
      "url": url
    }
  };
}

// Helper function to safely serialize the schema object to JSON
export function serializeSchema(schema: any) {
  return JSON.stringify(schema, null, process.env.NODE_ENV === 'development' ? 2 : 0);
}