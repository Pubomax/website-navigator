import { useEffect } from 'react';
import { preconnect, loadScript, loadScriptDeferred } from '@/lib/script-loader';

/**
 * Hook for loading analytics scripts in an optimized way:
 * - Preconnects to Google domains
 * - Defers non-critical scripts
 * - Initializes analytics properly
 */
export function useAnalytics() {
  useEffect(() => {
    // Preconnect to Google domains to speed up future requests
    preconnect('https://www.googletagmanager.com');
    preconnect('https://www.google-analytics.com');

    // Set up the dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    
    // Initialize timing
    gtag('js', new Date());

    // Load the Google Tag Manager script with a small delay
    // Using a single GTM container is more efficient than loading multiple tags
    loadScriptDeferred(
      'https://www.googletagmanager.com/gtag/js?id=G-2S9WTCBXWT',
      1000,
      () => {
        // Configure Google Analytics
        gtag('config', 'G-2S9WTCBXWT', {
          'send_page_view': true,
          'anonymize_ip': true,
          'cookie_flags': 'SameSite=None;Secure'
        });

        // Configure Google Ads
        gtag('config', 'AW-17032394525');
      }
    );

    // Return cleanup function
    return () => {
      // Optional: Clean up any event listeners if needed
    };
  }, []);
}

// Add this to window type definition
declare global {
  interface Window {
    dataLayer: any[];
  }
}