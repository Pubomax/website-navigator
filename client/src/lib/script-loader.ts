/**
 * Utility functions for optimized script loading
 * - Defers non-critical JavaScript
 * - Provides async script loading for third-party scripts
 */

/**
 * Loads a script asynchronously with optional callback when loaded
 */
export function loadScript(
  src: string, 
  callback?: () => void,
  attributes: Record<string, string> = {}
): void {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  
  // Add any additional attributes
  Object.keys(attributes).forEach(key => {
    script.setAttribute(key, attributes[key]);
  });
  
  if (callback) {
    script.onload = callback;
  }
  
  document.body.appendChild(script);
}

/**
 * Loads a script after a delay (useful for non-critical third-party scripts)
 */
export function loadScriptDeferred(
  src: string, 
  delayMs: number = 2000,
  callback?: () => void,
  attributes: Record<string, string> = {}
): void {
  window.setTimeout(() => {
    loadScript(src, callback, attributes);
  }, delayMs);
}

/**
 * Prefetches a script but does not execute it
 * Useful for scripts that will be needed soon but not immediately
 */
export function prefetchScript(src: string): void {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = src;
  link.as = 'script';
  document.head.appendChild(link);
}

/**
 * Preconnects to a domain to speed up future requests
 */
export function preconnect(domain: string, crossOrigin: boolean = true): void {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = domain;
  if (crossOrigin) {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
}

/**
 * Lazy loads a module when element is in viewport
 * @param elementId ID of the element to observe
 * @param importFn Function that returns the dynamic import
 */
export function loadModuleOnVisible(
  elementId: string,
  importFn: () => Promise<any>
): void {
  if (typeof IntersectionObserver === 'undefined') {
    // Fallback for browsers that don't support IntersectionObserver
    setTimeout(importFn, 1000);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          importFn();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.1 }
  );

  const element = document.getElementById(elementId);
  if (element) {
    observer.observe(element);
  }
}