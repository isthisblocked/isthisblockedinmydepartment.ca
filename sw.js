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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-f7f4222730c8193ade29.js"
  },
  {
    "url": "app-176e13776523b74afbc5.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9b9cdffd77564f6522a5.js"
  },
  {
    "url": "index.html",
    "revision": "b481611e809fd35c7cdc025794e5cf9d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d89855954d32af08e9027388c6abdf5b"
  },
  {
    "url": "0.a04de7bc22989dde5d4f.css"
  },
  {
    "url": "component---src-pages-index-js.1c0fc8ff58981bd3cf4b.css"
  },
  {
    "url": "component---src-pages-index-js-503e98c623761aebed81.js"
  },
  {
    "url": "1-2eaf0c4b292405c4d8a2.js"
  },
  {
    "url": "0-a027e229d7cad064f81c.js"
  },
  {
    "url": "static/d/979/path---index-6a9-5f1izAzhrAIXbXOkCOAXFXhJQ.json",
    "revision": "5084bad0e30d936670e361e935101954"
  },
  {
    "url": "component---src-pages-404-js.1c0fc8ff58981bd3cf4b.css"
  },
  {
    "url": "component---src-pages-404-js-0ff4fe04ff1bbe0c4499.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6800a1a5b4ec32946e46eeeb9ebbced6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});