// This file will be preloaded to optimize JavaScript loading
document.addEventListener('DOMContentLoaded', () => {
  // Preload important routes
  const routes = [
    '/services',
    '/solutions',
    '/about',
    '/contact',
    '/consultation'
  ];
  
  setTimeout(() => {
    routes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, 3000); // Delay prefetching to prioritize initial page load
});