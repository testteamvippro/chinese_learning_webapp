// =============================================
//  SERVICE WORKER  — Offline-first caching
//  Caches all app shell + data files on install,
//  serves from cache first with network fallback.
// =============================================

const CACHE_NAME = 'learnchinese-v2';

const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './data_extended.js',
  './data_hsk789.js',
  './data_vocab_hsk456.js',
  './data_vocab_expanded.js',
  './hsk_meta.js',
  './manifest.json',
  './js/app.js',
  './js/core/Router.js',
  './js/core/EventBus.js',
  './js/core/ProgressStore.js',
  './js/core/SpeechService.js',
  './js/core/DictionaryDB.js',
  './js/core/SRSEngine.js',
  './js/core/utils.js',
  './js/views/View.js',
  './js/views/HomeView.js',
  './js/views/LessonsView.js',
  './js/views/GrammarView.js',
  './js/views/ReadingView.js',
  './js/views/ChengyuView.js',
  './js/views/WritingView.js',
  './js/views/FlashcardView.js',
  './js/views/QuizView.js',
  './js/views/ProgressView.js',
  './js/views/DictionaryView.js',
  './js/views/ExamView.js',
  './js/views/StudyPlanView.js',
  './js/views/SentencePatternsView.js',
  './js/views/AITeacherView.js',
];

// ---- Install: pre-cache app shell ----
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// ---- Activate: clean up old caches ----
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ---- Fetch: cache-first, network fallback ----
self.addEventListener('fetch', event => {
  const { request } = event;

  // Skip non-GET and cross-origin API calls (Gemini, dictionary)
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request).then(response => {
        // Only cache successful same-origin responses
        if (response.ok && url.origin === self.location.origin) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      });
    }).catch(() => {
      // Offline fallback for navigation
      if (request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});
