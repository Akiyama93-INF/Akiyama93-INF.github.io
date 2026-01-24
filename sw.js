const CACHE_NAME = 'gamewiki-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './src/main.js',
    './src/styles.css',
    './src/data.js',
    './src/rawg-api.js',
    './src/search-functions.js',
    './public/logo.png',
    './public/hero-bg.png',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@800&display=swap'
];

// Install Event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('✅ Service Worker: Caching Assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate Event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('🧹 Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// Fetch Event: Stale-While-Revalidate
self.addEventListener('fetch', event => {
    // Solo cachear peticiones GET
    if (event.request.method !== 'GET') return;

    // No cachear peticiones a la API directamente
    if (event.request.url.includes('api.rawg.io') || event.request.url.includes('cheapshark.com')) {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(cachedResponse => {
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    // Update cache with fresh version
                    if (event.request.url.startsWith('http')) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                }).catch(() => {
                    // Fallback to index.html for navigation requests when offline
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                });

                // Return cached version immediately if available, otherwise wait for network
                return cachedResponse || fetchPromise;
            });
        })
    );
});
