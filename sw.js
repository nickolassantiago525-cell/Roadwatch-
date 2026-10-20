const CACHE='roadwatch-shell-v2';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-180.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('roadwatch-shell-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
// Network first for app shell updates; cached fallback if offline.
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==self.location.origin||e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return res;}).catch(()=>caches.match(e.request)));});
