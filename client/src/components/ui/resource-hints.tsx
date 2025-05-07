import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Enhanced ResourceHints component to add preload, prefetch, and preconnect directives
 * This helps optimize resource loading order and improve page load performance
 */
export function ResourceHints() {
  // Default prefetch targets for common navigation paths
  const prefetchUrls = [
    '/services',
    '/solutions',
    '/about',
    '/contact'
  ];
  
  return (
    <Helmet>
      {/* Preconnect to important third-party domains */}
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for domains we'll connect to later */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      <link rel="dns-prefetch" href="https://www.youtube.com" />
      
      {/* Preload critical resources - these are absolutely needed for initial render */}
      <link rel="preload" href="/fonts/primary.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/optimized/hero-large.webp" as="image" fetchPriority="high" />
      <link rel="preload" href="/images/logo.png" as="image" fetchPriority="high" />
      <link rel="preload" href="/css/critical.css" as="style" />
      
      {/* Prefetch likely next pages based on navigation patterns */}
      {prefetchUrls.map(url => (
        <link key={url} rel="prefetch" href={url} />
      ))}
      
      {/* Preload key scripts with lower priority */}
      <link rel="modulepreload" href="/js/main.js" />
      
      {/* Common page assets that might be needed regardless of route */}
      <link rel="preload" href="/images/optimized/hero-features.webp" as="image" />
      <link rel="preload" href="/images/optimized/services-hero.webp" as="image" />
    </Helmet>
  );
}