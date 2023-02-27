/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "fonts/rubik-bold.ttf",
    "revision": "b5b2632af1e2567e822e947f3c1f5b09"
  },
  {
    "url": "fonts/rubik-light.ttf",
    "revision": "79aa600424ded269e432988cb556d283"
  },
  {
    "url": "fonts/rubik-regular.ttf",
    "revision": "35af6dbe749b9704f03282e5a5949253"
  },
  {
    "url": "images/close-2x.png",
    "revision": "2a828187b5e437aea70c961d48397171"
  },
  {
    "url": "images/close.png",
    "revision": "03bc7cb4557eb1872402f25c75237cdf"
  },
  {
    "url": "images/favicon.ico",
    "revision": "11b203d2f84a8c1044db2f6aec2628b2"
  },
  {
    "url": "images/logo-2x.png",
    "revision": "b2b638f2391dabd4a95d6cab55833322"
  },
  {
    "url": "images/logo.png",
    "revision": "3fd570ea0d7b33fb15983d8c6a8c0858"
  },
  {
    "url": "images/open-2x.png",
    "revision": "9e1f57890e0e3cd0633804ade96af343"
  },
  {
    "url": "images/open.png",
    "revision": "776fce1a69c78e094b13ae675daa7d15"
  },
  {
    "url": "images/social-2x.png",
    "revision": "252e1f981e1ac8caf57b91fa86631fd1"
  },
  {
    "url": "images/social.png",
    "revision": "0e9c6aa1bbf1e7871d1b47f38e97a769"
  },
  {
    "url": "index.html",
    "revision": "891d8004727843828cee467f80319179"
  },
  {
    "url": "scripts/main.min.js",
    "revision": "ac7ab70fd1a47080dae1e666715ebe99"
  },
  {
    "url": "styles/main.css",
    "revision": "214a090fd74ae54c990e72024d43996c"
  },
  {
    "url": "styles/main.min.css",
    "revision": "7c9f628d8f7a53ac9b6d16ebfeb8b11f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
