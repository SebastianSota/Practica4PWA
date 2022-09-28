self.addEventListener('install', (event) => {
    // console.log("SW: install");
    // const promiseCache = caches.open('cache-v1.1').then((cache) =>{
    //     return cache.addAll(
    //         [
    //             '/',
    //             '/index.html',
    //             '/css/style.css',
    //             '/js/app.js',
    //             '/images/Esfera_cristal.jpeg',
    //             'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
    //             'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
    //         ]
    //     );
    // });

    const promiseCache = caches.open('imported-elements').then((cache) =>{
        return cache.addAll(
            [
                './',
                './index.html',
                './pages/dividir.html',
                './pages/multiplicar.html',
                './pages/restar.html',
                './pages/sumar.html',
                './js/app.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
            ]
        )
    });

    event.waitUntil(promiseCache);
});

//Only cache
self.addEventListener('fetch', (event) =>{
    const respCache = caches.match(event.request)
    event.respondWith(respCache);
});

