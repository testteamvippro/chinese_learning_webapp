// =============================================
//  APP ENTRY POINT
//
//  Responsibilities:
//    1. Instantiate all views
//    2. Register them with the Router
//    3. Wire up global navigation (nav-links, home buttons)
//    4. Boot the initial view
//
//  To add a new section:
//    a. Create js/views/MyNewView.js
//    b. Add a <section id="view-mynew"> in index.html
//    c. Import and register it here — nothing else changes.
// =============================================

import { router }         from './core/Router.js';
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

// ---- Register all views (order mirrors nav order) ----
router
  .register('home',       new HomeView())
  .register('lessons',    new LessonsView())
  .register('grammar',    new GrammarView())
  .register('reading',    new ReadingView())
  .register('chengyu',    new ChengyuView())
  .register('writing',    new WritingView())
  .register('flashcards', new FlashcardView())
  .register('quiz',       new QuizView())
  .register('dictionary', new DictionaryView())
  .register('exam',       new ExamView())
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

// ---- Boot ----
router.navigate('home');
