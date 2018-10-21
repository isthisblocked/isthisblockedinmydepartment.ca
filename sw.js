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
    "url": "webpack-runtime-e348b379b71c2c7f2933.js"
  },
  {
    "url": "app-98c79d9c70fb1c2c80b6.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9b9cdffd77564f6522a5.js"
  },
  {
    "url": "index.html",
    "revision": "4fd6e4fda5c0008998ec9e6fe282b737"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "246974ba8d71ef9a33d543c764510c74"
  },
  {
    "url": "0.54dcc547574dfe899b78.css"
  },
  {
    "url": "component---src-pages-index-js.e8364ef214dee59a67a4.css"
  },
  {
    "url": "component---src-pages-index-js-ede1941e9a7ba2cb80d5.js"
  },
  {
    "url": "1-df44b4bb3e1a39caaab0.js"
  },
  {
    "url": "0-2e0560d91436ea37f881.js"
  },
  {
    "url": "static/d/265/path---index-6a9-J787PHmvKsWnVxHi95iER0nQdw.json",
    "revision": "95efe7c6afba9d263134199323c538fe"
  },
  {
    "url": "component---src-pages-404-js.e8364ef214dee59a67a4.css"
  },
  {
    "url": "component---src-pages-404-js-8145c3ff736a27baff27.js"
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