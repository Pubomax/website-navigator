// This script handles common redirects to avoid multiple redirects flagged in PageSpeed
(function() {
  // Early abort if we're on the correct path
  if (window.location.pathname === '/' || 
      window.location.pathname === '/fr/' ||
      window.location.pathname.indexOf('/fr/') === 0 ||
      window.location.pathname.indexOf('/fr') === 0) {
    return;
  }
  
  // Handle trailing slash normalization
  const hasTrailingSlash = window.location.pathname.endsWith('/') && window.location.pathname !== '/';
  if (hasTrailingSlash) {
    window.history.replaceState(null, '', window.location.pathname.slice(0, -1) + window.location.search + window.location.hash);
  }
  
  // Handle language redirects (avoid double redirects)
  const shouldBeFrench = (
    navigator.language.startsWith('fr') && 
    !window.location.pathname.startsWith('/fr') && 
    !document.cookie.includes('language=en')
  );
  
  if (shouldBeFrench) {
    // Direct redirect without a server roundtrip
    const newPath = '/fr' + (window.location.pathname === '/' ? '' : window.location.pathname);
    window.history.replaceState(null, '', newPath + window.location.search + window.location.hash);
  }
})();