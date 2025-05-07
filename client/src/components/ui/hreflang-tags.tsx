import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * HreflangTags component to implement language and region targeting
 * This improves SEO for multilingual content and helps search engines 
 * understand the relationship between pages in different languages
 */
interface HreflangData {
  path: string;
  languages: {
    code: string;
    region?: string;
    url: string;
  }[];
}

const siteHreflangData: Record<string, HreflangData> = {
  // Home page
  '/': {
    path: '/',
    languages: [
      { code: 'en', region: 'ca', url: 'https://minecoregroup.com/' },
      { code: 'fr', region: 'ca', url: 'https://minecoregroup.com/fr/' },
      { code: 'en', url: 'https://minecoregroup.com/' },
      { code: 'fr', url: 'https://minecoregroup.com/fr/' }
    ]
  },
  
  // Services page
  '/services': {
    path: '/services',
    languages: [
      { code: 'en', region: 'ca', url: 'https://minecoregroup.com/services' },
      { code: 'fr', region: 'ca', url: 'https://minecoregroup.com/fr/services' },
      { code: 'en', url: 'https://minecoregroup.com/services' },
      { code: 'fr', url: 'https://minecoregroup.com/fr/services' }
    ]
  },
  
  // Solutions page
  '/solutions': {
    path: '/solutions',
    languages: [
      { code: 'en', region: 'ca', url: 'https://minecoregroup.com/solutions' },
      { code: 'fr', region: 'ca', url: 'https://minecoregroup.com/fr/solutions' },
      { code: 'en', url: 'https://minecoregroup.com/solutions' },
      { code: 'fr', url: 'https://minecoregroup.com/fr/solutions' }
    ]
  },
  
  // Contact page
  '/contact': {
    path: '/contact',
    languages: [
      { code: 'en', region: 'ca', url: 'https://minecoregroup.com/contact' },
      { code: 'fr', region: 'ca', url: 'https://minecoregroup.com/fr/contact' },
      { code: 'en', url: 'https://minecoregroup.com/contact' },
      { code: 'fr', url: 'https://minecoregroup.com/fr/contact' }
    ]
  },
  
  // About page
  '/about': {
    path: '/about',
    languages: [
      { code: 'en', region: 'ca', url: 'https://minecoregroup.com/about' },
      { code: 'fr', region: 'ca', url: 'https://minecoregroup.com/fr/about' },
      { code: 'en', url: 'https://minecoregroup.com/about' },
      { code: 'fr', url: 'https://minecoregroup.com/fr/about' }
    ]
  }
};

export function HreflangTags() {
  // Get current path - in a real implementation, we would use the router
  // Since we don't have access to the router, we'll use window.location.pathname directly
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  // Find the closest matching path from our hreflang data
  // This handles subpaths by finding the parent path
  const getHreflangDataForPath = (path: string) => {
    // First try exact match
    if (siteHreflangData[path]) {
      return siteHreflangData[path];
    }
    
    // If not found, try to find parent path
    const pathSegments = path.split('/').filter(Boolean);
    while (pathSegments.length > 0) {
      const testPath = '/' + pathSegments.join('/');
      if (siteHreflangData[testPath]) {
        return siteHreflangData[testPath];
      }
      pathSegments.pop();
    }
    
    // Default to homepage if no match found
    return siteHreflangData['/'];
  };
  
  const hreflangData = getHreflangDataForPath(currentPath);
  
  return (
    <Helmet>
      {hreflangData.languages.map((lang, index) => (
        <link 
          key={index}
          rel="alternate"
          hrefLang={lang.region ? `${lang.code}-${lang.region}` : lang.code}
          href={lang.url}
        />
      ))}
      {/* x-default for language selector */}
      <link rel="alternate" hrefLang="x-default" href="https://minecoregroup.com/" />
    </Helmet>
  );
}