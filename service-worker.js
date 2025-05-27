const CACHE_NAME = 'quiz-cisco-game-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'css/output.css',
  'js/app.js',
  'js/utils.js',
  'js/data.js',
  'assets/icons/favicon-32.png',
  'assets/icons/app-icon-192.png',
  'assets/icons/app-icon-500.png',
  'assets/music/track1.mp3'
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
      // Retourne la ressource du cache si elle existe, sinon fait une requête réseau
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