const CACHE_NAME="le-choix-costaud-v2-1";
const APP_ASSETS=[
  "./",
  "./index.html",
  "./style-v21.css",
  "./app-v21.js",
  "./products-v21.json",
  "./manifest.json?v=2.1",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./assets/products/box-12l.png",
  "./assets/products/coffre-auto.png",
  "./assets/products/lunch-3.png",
  "./assets/products/trousse-rigide.png",
  "./assets/products/seau-pliable.png",
  "./assets/products/bac-frigo.png",
  "./assets/products/poubelle-auto.png",
  "./assets/products/panier-bain.png",
  "./assets/products/boite-cables.png",
  "./assets/products/gourde.png",
  "./assets/products/caisse-pliable.png",
  "./assets/products/boite-etanche.png"
];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_ASSETS)));self.skipWaiting();});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))));self.clients.claim();});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  event.respondWith(caches.match(event.request).then(cached=>{
    const network=fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));return response;});
    return cached||network.catch(()=>caches.match("./index.html"));
  }));
});
