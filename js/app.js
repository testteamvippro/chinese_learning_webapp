// =============================================
//  APP ENTRY POINT
//
//  Responsibilities:
//    1. Initialise SQLite data layer (DataService + sql.js)
//    2. Instantiate all views
//    3. Register them with the Router
//    4. Wire up global navigation (nav-links, home buttons)
//    5. Boot the initial view
//
//  To add a new section:
//    a. Create js/views/MyNewView.js
//    b. Add a <section id="view-mynew"> in index.html
//    c. Import and register it here — nothing else changes.
// =============================================

import { dataService }    from './core/DataService.js';
import { router }         from './core/Router.js';
import { gamificationStore } from './core/GamificationStore.js';
import { eventBus }       from './core/EventBus.js';
import { HomeView }       from './views/HomeView.js';
import { LessonsView }    from './views/LessonsView.js';
import { GrammarView }    from './views/GrammarView.js';
import { ReadingView }    from './views/ReadingView.js';
import { ChengyuView }    from './views/ChengyuView.js';
import { WritingView }    from './views/WritingView.js';
import { FlashcardView }  from './views/FlashcardView.js';
import { QuizView }       from './views/QuizView.js';
import { ProgressView }   from './views/ProgressView.js';
import { DictionaryView } from './views/DictionaryView.js';
import { ExamView }       from './views/ExamView.js';
import { StudyPlanView }         from './views/StudyPlanView.js';
import { SentencePatternsView }  from './views/SentencePatternsView.js';
import { AITeacherView }         from './views/AITeacherView.js';
import { ListeningView }        from './views/ListeningView.js';
import { ToneTrainerView }      from './views/ToneTrainerView.js';
import { RadicalView }          from './views/RadicalView.js';
import { PlacementTestView }    from './views/PlacementTestView.js';

// ---- Initialise data layer, then boot the app ----
(async () => {
  try {
    // Seed or load all learning data via SQLite (sql.js WASM).
    // On first visit: globals (from data*.js) → SQLite → saved to IndexedDB.
    // On return visits: SQLite .db loaded from IndexedDB → globals (fast, offline).
    await dataService.init();
  } catch (err) {
    console.warn('[App] DataService init failed — falling back to globals:', err);
    // Globals from <script> tags are still in memory, so the app works fine.
  }

  // ---- Register all views (order mirrors nav order) ----
  router
    .register('home',       new HomeView())
    .register('lessons',    new LessonsView())
    .register('grammar',           new GrammarView())
    .register('sentencepatterns',  new SentencePatternsView())
    .register('reading',           new ReadingView())
    .register('chengyu',    new ChengyuView())
    .register('studyplan',  new StudyPlanView())
    .register('writing',    new WritingView())
    .register('flashcards', new FlashcardView())
    .register('quiz',       new QuizView())
    .register('dictionary', new DictionaryView())
    .register('aiteacher',  new AITeacherView())
    .register('exam',       new ExamView())
    .register('listening',  new ListeningView())
    .register('tonetrainer', new ToneTrainerView())
    .register('radicals',   new RadicalView())
    .register('placement',  new PlacementTestView())
    .register('progress',   new ProgressView());

  // ---- Global navigation (nav-links + hero/overview buttons) ----
  document.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const viewName = el.getAttribute('data-view');
      const level    = el.getAttribute('data-level');
      router.navigate(viewName, level ? { level: parseInt(level, 10) } : {});
    });
  });

  // ---- Mobile hamburger ----
  document.getElementById('hamburger').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('open');
  });

  // ---- Gamification UI ----
  function updateGamBadges() {
    const streakEl = document.getElementById('streak-count');
    const xpEl     = document.getElementById('xp-count');
    if (streakEl) streakEl.textContent = gamificationStore.streak;
    if (xpEl)     xpEl.textContent     = gamificationStore.totalXP;
  }
  updateGamBadges();

  eventBus.on('xp:gained', updateGamBadges);
  eventBus.on('word:learned', () => gamificationStore.recordWordLearned());

  eventBus.on('achievement:unlocked', ach => {
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `
      <div class="achievement-toast-icon">${ach.icon}</div>
      <div class="achievement-toast-text">
        <div class="achievement-toast-title">🎉 Achievement Unlocked!</div>
        <div class="achievement-toast-desc">${ach.title} — ${ach.desc}</div>
      </div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  });

  // Placement test navigation bridge
  document.addEventListener('placement-navigate', e => {
    const { view, level } = e.detail;
    router.navigate(view, { level });
  });

  // ---- Boot ----
  router.navigate('home');
})();
