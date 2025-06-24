const cachename = "eshop-cache-v1";
const assets = [
    "/",
    "/index.html",
    "/product.html",
    "/style.css",
    "/icons/icon.png"
];
self.addEventListener("install", event {event.waituntil(caches.open(cachename).then(cache{return cache.addall(assets);}));});
self.addEventListener("fetch" , event {event.respondwith( caches.match(event.request).then(response { return response || fetch(event.request);}));});
