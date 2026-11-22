/* Scoped service worker for installable learning app.
   Network requests remain browser-managed, so published lessons update normally.
   Offline lessons are not yet supported. */
self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
