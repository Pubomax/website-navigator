import { Helmet } from "react-helmet";
import { useLocation } from "wouter";
import { getPageTitleData } from "@/lib/page-titles";

type PageKey = Parameters<typeof getPageTitleData>[0];

interface PageTitleProps {
  pageKey: PageKey;
  customTitle?: string;
  customDescription?: string;
  keywords?: string;
  imageUrl?: string;
}

/**
 * Component to set the page title and meta description dynamically
 * Use this at the top of each page component
 */
export function PageTitle({ 
  pageKey, 
  customTitle, 
  customDescription, 
  keywords,
  imageUrl 
}: PageTitleProps) {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const { title, description } = getPageTitleData(pageKey, isPathFrench);
  
  const finalTitle = customTitle || title;
  const finalDescription = customDescription || description;
  const canonicalUrl = `https://minecoregroup.com${location}`;
  const defaultImage = "https://minecoregroup.com/logo-social.png"; // Default social sharing image
  const siteImage = imageUrl || defaultImage;
  const languageAlternate = isPathFrench ? 
    location.replace("/fr", "") : 
    `/fr${location}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{finalTitle}</title>
      {finalDescription && <meta name="description" content={finalDescription} />}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang={isPathFrench ? "fr" : "en"} href={canonicalUrl} />
      <link rel="alternate" hrefLang={isPathFrench ? "en" : "fr"} href={`https://minecoregroup.com${languageAlternate}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      {finalDescription && <meta property="og:description" content={finalDescription} />}
      <meta property="og:image" content={siteImage} />
      <meta property="og:locale" content={isPathFrench ? "fr_CA" : "en_CA"} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      {finalDescription && <meta property="twitter:description" content={finalDescription} />}
      <meta property="twitter:image" content={siteImage} />
      
      {/* Geo Targeting for Montreal */}
      <meta name="geo.region" content="CA-QC" />
      <meta name="geo.placename" content="Montreal" />
      <meta name="geo.position" content="45.5088;-73.5878" /> 
      <meta name="ICBM" content="45.5088, -73.5878" />
      
      {/* Additional metadata for site information */}
      <meta name="author" content="Minecore Group" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} Minecore Group`} />
      
      {/* Mobile optimization */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#4f46e5" />
      
      {/* Schema.org structured data for local business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Minecore Group",
          "url": "https://minecoregroup.com",
          "logo": "https://minecoregroup.com/logo-social.png",
          "image": siteImage,
          "description": finalDescription,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3580 boulevard saint elzear, ouest",
            "addressLocality": "Laval",
            "addressRegion": "QC",
            "postalCode": "h7p-0l7",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.5088",
            "longitude": "-73.5878"
          },
          "telephone": "+15146030598",
          "email": "hello@minecoregroup.com",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          },
          "priceRange": "$$",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "45.5088",
              "longitude": "-73.5878"
            },
            "geoRadius": "50000"
          }
        })}
      </script>
    </Helmet>
  );
}