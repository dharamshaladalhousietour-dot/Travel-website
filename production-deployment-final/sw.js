// Service Worker for Pretty Planet Travels
// Cache version - increment when updating cache strategy
const CACHE_VERSION = 'v1.0.0';
const STATIC_CACHE = `pretty-planet-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `pretty-planet-dynamic-${CACHE_VERSION}`;

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/static/js/main.js',
  '/static/css/main.css',
  '/assets/rajeev.jpg',
  '/assets/riny.jpg',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip external domains (except images)
  const url = new URL(request.url);
  const isOwnDomain = url.origin === location.origin;
  const isImage = request.destination === 'image';
  
  if (!isOwnDomain && !isImage) return;
  
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(request)
          .then((networkResponse) => {
            // Clone response before using it
            const responseClone = networkResponse.clone();
            
            // Cache successful responses
            if (networkResponse.status === 200) {
              const cacheKey = isImage || request.url.includes('/static/') 
                ? STATIC_CACHE 
                : DYNAMIC_CACHE;
                
              caches.open(cacheKey)
                .then((cache) => {
                  cache.put(request, responseClone);
                });
            }
            
            return networkResponse;
          })
          .catch(() => {
            // Fallback for failed requests
            if (request.destination === 'document') {
              return caches.match('/');
            }
          });
      })
  );
});