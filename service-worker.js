const CACHE_NAME = 'quiz-cisco-game-cache-v1';
const urlsToCache = [
  '/quiz-cisco-game/',  // Racine de ton application
  '/quiz-cisco-game/index.html',
  '/quiz-cisco-game/css/output.css',
  '/quiz-cisco-game/js/app.js',
  '/quiz-cisco-game/js/utils.js',
  '/quiz-cisco-game/js/data.js',
  '/quiz-cisco-game/assets/icons/favicon-32.png',
  '/quiz-cisco-game/assets/icons/app-icon-192.png',
  '/quiz-cisco-game/assets/icons/app-icon-500.png',  // Correction de 500 à 512
  '/quiz-cisco-game/assets/music/track1.mp3'
];

// Installation du service worker et mise en cache des ressources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching files');
      return cache.addAll(urlsToCache);
    })
  );
});

// Interception des requêtes réseau pour utiliser le cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Mise à jour du service worker (nettoyage des anciens caches)
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});