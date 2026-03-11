/* ═══════════════════════════════════════════════════════════
   SERVICE WORKER — IAFACIL.HELP
   Cache-First for static assets, Network-First for HTML
   ═══════════════════════════════════════════════════════════ */

const CACHE_NAME = 'iafacil-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/css/main.css',
    '/js/components/header.js',
    '/js/components/footer.js',
    '/js/components/bottomNav.js',
    '/js/components/toast.js',
    '/js/config/constants.js',
    '/manifest.json',
    '/assets/images/logo.svg',
];

// ── Install: pre-cache static assets ──────────────────────
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
    );
    self.skipWaiting();
});

// ── Activate: remove old caches ───────────────────────────
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// ── Fetch strategy ────────────────────────────────────────
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Only handle same-origin requests
    if (url.origin !== self.location.origin) return;

    // Network-First for HTML navigation (keeps pages fresh)
    if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
                    return response;
                })
                .catch(() => caches.match(request).then((cached) => cached || caches.match('/index.html')))
        );
        return;
    }

    // Cache-First for CSS, JS, fonts, images
    if (/\.(css|js|woff2?|ttf|svg|png|jpg|webp|ico)(\?.*)?$/.test(url.pathname)) {
        event.respondWith(
            caches.match(request).then((cached) => {
                if (cached) return cached;
                return fetch(request).then((response) => {
                    if (response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
                    }
                    return response;
                });
            })
        );
    }
});
