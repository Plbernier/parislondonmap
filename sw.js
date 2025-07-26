const CACHE_NAME = 'paris-londres-v1.1.0';
const urlsToCache = [
  './index.html',
  './manifest.json',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Installation du Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Installation en cours...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Mise en cache des fichiers');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activation du Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activation en cours...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Suppression de l\'ancien cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Stratégie Cache First pour les ressources statiques
self.addEventListener('fetch', event => {
  // Ignorer les requêtes non-GET et les requêtes externes (sauf CDN connus)
  if (event.request.method !== 'GET') {
    return;
  }
  
  const url = new URL(event.request.url);
  
  // Cache First pour les fichiers locaux et CDN connus
  if (url.origin === location.origin || 
      url.hostname === 'unpkg.com' || 
      url.hostname === 'cdnjs.cloudflare.com' ||
      url.hostname.includes('tile.openstreetmap.org') ||
      url.hostname.includes('arcgisonline.com')) {
    
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Retourner la version en cache si disponible
          if (response) {
            return response;
          }
          
          // Sinon, faire la requête réseau
          return fetch(event.request).then(response => {
            // Vérifier si la réponse est valide
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Cloner la réponse car elle ne peut être consommée qu'une fois
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          });
        })
        .catch(() => {
          // En cas d'erreur réseau, retourner une page d'erreur basique
          if (event.request.destination === 'document') {
            return new Response(
              `<!DOCTYPE html>
              <html lang="fr">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Hors ligne - Paris & Londres</title>
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; 
                         text-align: center; padding: 50px; background: #f5f5f5; }
                  .offline-message { background: white; padding: 30px; border-radius: 12px; 
                                   box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 400px; 
                                   margin: 0 auto; }
                  h1 { color: #667eea; margin-bottom: 20px; }
                  p { color: #666; line-height: 1.6; }
                  .retry-btn { background: #667eea; color: white; border: none; 
                             padding: 12px 24px; border-radius: 6px; cursor: pointer; 
                             margin-top: 20px; }
                </style>
              </head>
              <body>
                <div class="offline-message">
                  <h1>📍 Mode Hors Ligne</h1>
                  <p>Vous êtes actuellement hors ligne. L'application utilise les données mises en cache.</p>
                  <p>Vérifiez votre connexion internet et réessayez.</p>
                  <button class="retry-btn" onclick="window.location.reload()">Réessayer</button>
                </div>
              </body>
              </html>`,
              {
                headers: { 'Content-Type': 'text/html' }
              }
            );
          }
        })
    );
  } else {
    // Network First pour les API externes (Nominatim, etc.)
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // En cas d'erreur, retourner une réponse JSON vide pour les API
          if (event.request.url.includes('nominatim')) {
            return new Response('[]', {
              headers: { 'Content-Type': 'application/json' }
            });
          }
        })
    );
  }
});

// Gestion des messages du client
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Synchronisation en arrière-plan (optionnel)
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Synchronisation en arrière-plan');
    // Ici on pourrait synchroniser les données utilisateur
  }
});

// Notification de mise à jour disponible
self.addEventListener('message', event => {
  if (event.data.action === 'UPDATE_FOUND') {
    // Notifier le client qu'une mise à jour est disponible
    event.ports[0].postMessage({
      type: 'UPDATE_AVAILABLE'
    });
  }
});