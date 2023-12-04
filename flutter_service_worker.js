'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ee3bf4ac1ae01b98bb0365c01b3e37f4",
"assets/assets/dbestech/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/dbestech/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/dbestech/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/dbestech/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/dbestech/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/dbestech/background.png": "0564de0c80dbcae74ffce0f6a09dc3c0",
"assets/assets/dbestech/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/dbestech/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/dbestech/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/dbestech/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/assets/dbestech/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/dbestech/test1.jpeg": "9bb4e188581240286417187e232c4b38",
"assets/assets/dbestech/test2.jpeg": "11346c7dce688552f9b834067e2120d5",
"assets/assets/dbestech/test3.jpeg": "74e1950d7c75cce212743bfd5a0bf432",
"assets/assets/dbestech/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/assets/images/about11.png": "69a210ebde11920a5fdd44362f979e30",
"assets/assets/images/about12.png": "cdf491257a4f9c9c3f0f95bfc2f56e77",
"assets/assets/images/about2.png": "f2ec9855a45d57714bfe65443ddb00e3",
"assets/assets/images/banner1.png": "aba0742bb8b677406245f317e3d401ec",
"assets/assets/images/bannerContact.png": "42decd08fefa77f330ef3698c3839331",
"assets/assets/images/certificate1.png": "b1166450c12e7fb800a96e98322d65d0",
"assets/assets/images/certificate2.png": "ab012a9e779acd25d000bcb6c1e1bdcd",
"assets/assets/images/certificate3.png": "a2c0f4265121ccb49d0fc97808028dc3",
"assets/assets/images/certificate4.png": "60cfcbc6ebec4c5300afb8a0e0c20ff0",
"assets/assets/images/contact01.png": "67c510c2bde849d1aff9ee769e0bb72a",
"assets/assets/images/contact02.png": "7deb702bc023936abe0b8a213d0269d1",
"assets/assets/images/contact03.png": "b8ab2b806d555728da442fa180501fec",
"assets/assets/images/contactContainer01.png": "10f9ca3c33c8ec244a1cfea550bc6d65",
"assets/assets/images/contactContainer02.png": "e38156284347b95b9d617f8ae98c506d",
"assets/assets/images/ContactFooter.png": "2feb4fa363df786a16846edb4388d51b",
"assets/assets/images/contactFooterDesktop.png": "e2b4df18101141250317d84f5c66453c",
"assets/assets/images/contactItem1.png": "53ebdd49dc871ffb8e41754df8e411ee",
"assets/assets/images/contactItem2.png": "12195dc699e3d28fb0cb3bda0913f3ba",
"assets/assets/images/contactItem3.png": "81828e4ac3a5e32ddf5bb1ea99a0dcb8",
"assets/assets/images/dashboard.png": "01243bcdcbcc72c270c19030eafe11bd",
"assets/assets/images/header.png": "6d1d1e21e69a597b09c1fa2910d32d60",
"assets/assets/images/image_container2.png": "092d57d1c9621433ac502f49cc4b7b14",
"assets/assets/images/imgContact.png": "f66e310bf903645eea42e15b8159b1de",
"assets/assets/images/imgContainer6.png": "344aed39cd2ec2cf0febce7b0b23f3bc",
"assets/assets/images/imgContainer7.png": "be5ed6cd2535ee18e69bd4117cc04821",
"assets/assets/images/imgContainer8.png": "21743498fce598e1db15b098fc334ccb",
"assets/assets/images/imgIcon1.png": "f98b92fe2bcd9bddea0866ab23c77dbf",
"assets/assets/images/imgIcon2.png": "eca97c6b56a9bee331855e18bb5d0dd5",
"assets/assets/images/imgIcon3.png": "b47e83562d6f6166a68eaaf346cc608c",
"assets/assets/images/imgItem1.png": "d20e6c13e836db1c598d51aa5414fa70",
"assets/assets/images/imgItem2.png": "13186a3760f92315e584e765be34baf8",
"assets/assets/images/imgItem3.png": "e1de44a9060480c80d3fc3aaa4b7b320",
"assets/assets/images/imgItem4.png": "192de9f155c141777a79d00981d16f54",
"assets/assets/images/imgItem5.png": "ab1a7d5a855f02641f147a9dbd4597b0",
"assets/assets/images/imgItem6.png": "63c0e1f5f51e79d689a79ab614dbc063",
"assets/assets/images/imgItem7.png": "77e5df805850302f1ad6e02a3becfa27",
"assets/assets/images/imgItem8.png": "328486e14871ddd5d691384c325a32c5",
"assets/assets/images/logo.png": "b0cf8891fa5df4d95d8a8767ab49d39c",
"assets/assets/images/logo_g2g.png": "9415bd16e94e32e9953a301086c6279f",
"assets/assets/images/menu21.jpg": "45f530fb53f03abc19a1206f6e8ff2a9",
"assets/assets/images/menu22.jpg": "e8fb6c60cce6c92ede77c894ae737183",
"assets/assets/images/menu23.jpg": "43a5f4184fce140ca400bfee279a0805",
"assets/assets/images/product%2520(1).png": "c615eeaad1f827215ac5849df5179cf8",
"assets/assets/images/product%2520(2).png": "b175071d2d203ae6ae2ee84951e21b1d",
"assets/assets/images/product%2520(3).png": "3020d50d494d03b3da292a1bd4873fb2",
"assets/assets/images/product%2520(4).png": "d8f4ec39bf6ebf301e3dd320ac4c72ac",
"assets/assets/images/product%2520(5).png": "37d70f5eb96f1275ae2c7c78305fa7b5",
"assets/assets/images/product.png": "5dbef9c7b8344a6e16e6569efb825111",
"assets/assets/images/vitae1.png": "570dd1990213eb6be01f1c69951548f3",
"assets/assets/images/vitae2.png": "6c2e5389cf7951faa419ef9f73570d3a",
"assets/assets/images/vitae3.png": "82386ad87358a03468b26a6c71f07b3b",
"assets/assets/images/vitae4.png": "b778ecc0a0d126b24904ea203e69bad1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "acff739add82f157c704b4bcb6ab3b78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "d1c933cf3f8b0e10acf05b243c709c0f",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b952ad4bc5e7905f861b2d5b63503a08",
"/": "b952ad4bc5e7905f861b2d5b63503a08",
"main.dart.js": "a848945ea9773cf199de705c49bc962a",
"manifest.json": "45c380b25dd04fd37fb8cfa9cff365f5",
"version.json": "a94533b7d2fbe81f350ee921cc06a134"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
