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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/GoldCoastYard/precache-manifest.a3fd5ca0e76119b78605ad358904e70b.js"
=======
  "/GoldCoastYard/precache-manifest.24f7c0eabea912a9ddbde5aac7b153e2.js"
>>>>>>> 32e59520e80c9bf132e487e7965b2330fb034676
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/GoldCoastYard/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
