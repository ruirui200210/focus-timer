const CACHE_NAME = 'pomodoro‑v1';
const assets = ['./index.html','./manifest.json'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(assets)).then(()=>self.skipWaiting()))
})

self.addEventListener('activate',e=>{
  e.waitUntil(self.clients.claim())
})

self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  )
})

