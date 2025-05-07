const CACHE_NAME = 'minecore-cache-v1';
const urlsToCache = [
  '/',
  '/offline.html',
  '/css/main.css',
  '/js/main.js',
  '/images/logo.png',
  '/images/optimized/hero-small.webp',
  '/images/optimized/hero-medium.webp',
  '/images/optimized/hero-large.webp',
  '/fonts/primary.woff2'
];

// Install the service worker and cache initial assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache opened');
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache first, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return the response from cache
      if (response) {
        return response;
      }

      // Clone the request because it's a one-time use
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest)
        .then((response) => {
          // Check if response is valid
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response because it's a one-time use
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // If fetch fails (offline), show offline page
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
        });
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'form-submission') {
    event.waitUntil(syncForms());
  }
});

// Handle background sync for forms
async function syncForms() {
  try {
    const formDataRequests = await getStoredFormRequests();
    
    await Promise.all(formDataRequests.map(async (storedRequest) => {
      const response = await fetch(storedRequest.url, {
        method: storedRequest.method,
        headers: storedRequest.headers,
        body: storedRequest.body,
        credentials: 'include'
      });
      
      if (response.ok) {
        await removeStoredFormRequest(storedRequest.id);
      }
    }));
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Placeholder functions for form storage (to be implemented in IndexedDB)
async function getStoredFormRequests() {
  // This would fetch from IndexedDB in a real implementation
  return [];
}

async function removeStoredFormRequest(id) {
  // This would delete from IndexedDB in a real implementation
}