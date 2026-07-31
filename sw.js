/* English Buddy SW — shell precache + background full-asset fill */
const CACHE = 'english-buddy-v99';
const SHELL = [
  './',
  './index.html',
  './data.js',
  './asset-manifest.json',
  './icon-180.png',
  './icon-512.png',
  './manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/** Cache a list of same-origin URLs in small batches (background). */
async function precacheUrls(urls, batchSize = 6) {
  const cache = await caches.open(CACHE);
  const list = Array.isArray(urls) ? urls : [];
  let done = 0;
  let failed = 0;
  for (let i = 0; i < list.length; i += batchSize) {
    const batch = list.slice(i, i + batchSize);
    await Promise.all(batch.map(async (raw) => {
      try {
        const url = new URL(raw, self.location.href).href;
        // skip if already cached
        const hit = await cache.match(url);
        if (hit) { done++; return; }
        const res = await fetch(url, { credentials: 'same-origin', cache: 'reload' });
        if (res && res.ok) {
          await cache.put(url, res.clone());
          done++;
        } else {
          failed++;
        }
      } catch (_) {
        failed++;
      }
    }));
    // notify clients of progress (silent UI optional)
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const payload = {
      type: 'PRECACHE_PROGRESS',
      done: Math.min(i + batch.length, list.length),
      total: list.length,
      cached: done,
      failed,
      complete: false
    };
    clients.forEach(c => c.postMessage(payload));
  }
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  clients.forEach(c => c.postMessage({
    type: 'PRECACHE_PROGRESS',
    done: list.length,
    total: list.length,
    cached: done,
    failed,
    complete: true
  }));
  return { done, failed, total: list.length };
}

self.addEventListener('message', e => {
  const data = e.data || {};
  if (data.type === 'PRECACHE_URLS' && Array.isArray(data.urls)) {
    e.waitUntil(precacheUrls(data.urls, data.batchSize || 6));
  }
  if (data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isPage = e.request.mode === 'navigate' || e.request.destination === 'document';
  if (isPage) {
    // network-first for app shell
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html')))
    );
  } else {
    // cache-first for static assets (images/audio/js)
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
        if (res.ok && e.request.url.startsWith(self.location.origin)) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }))
    );
  }
});
