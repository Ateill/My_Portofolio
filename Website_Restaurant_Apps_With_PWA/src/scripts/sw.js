import 'regenerator-runtime';
import CacheHelper from './cache-helper';

const assetsToCache = [
  './',
  './logos/logo16x16.png',
  './logos/logo24x24.png',
  './logos/logo64x64.png',
  './logos/logo128x128.png',
  './logos/logo256x256.png',
  './logos/logo512x512.png',
  './logos/logo1256x1256.png',
  './index.html',
  './restaurant-icon-orange.png',
  './images/not_found_image.jpg',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
