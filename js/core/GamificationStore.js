// =============================================
//  GAMIFICATION STORE  — Streak, XP & Achievements
//
//  Tracks daily streak, experience points, and
//  achievement badges. Persists to localStorage.
//  Emits events via EventBus so UI can react.
// =============================================

import { eventBus } from './EventBus.js';

const STORAGE_KEY = 'cn_gamification';

const ACHIEVEMENTS = [
  { id: 'first_lesson',   icon: '📖', title: 'First Steps',        desc: 'Complete your first activity',        check: s => s.totalActivities >= 1 },
  { id: 'streak_3',       icon: '🔥', title: 'On Fire',            desc: 'Reach a 3-day streak',                check: s => s.bestStreak >= 3 },
  { id: 'streak_7',       icon: '🔥', title: 'Week Warrior',       desc: 'Reach a 7-day streak',                check: s => s.bestStreak >= 7 },
  { id: 'streak_30',      icon: '🏆', title: 'Monthly Master',     desc: 'Reach a 30-day streak',               check: s => s.bestStreak >= 30 },
  { id: 'xp_100',         icon: '⭐', title: 'Rising Star',        desc: 'Earn 100 XP',                         check: s => s.totalXP >= 100 },
  { id: 'xp_500',         icon: '🌟', title: 'Shining Bright',     desc: 'Earn 500 XP',                         check: s => s.totalXP >= 500 },
  { id: 'xp_1000',        icon: '💫', title: 'XP Champion',        desc: 'Earn 1,000 XP',                       check: s => s.totalXP >= 1000 },
  { id: 'xp_5000',        icon: '🎆', title: 'XP Legend',          desc: 'Earn 5,000 XP',                       check: s => s.totalXP >= 5000 },
  { id: 'quiz_10',        icon: '🧠', title: 'Quiz Whiz',         desc: 'Complete 10 quizzes',                 check: s => s.quizzesCompleted >= 10 },
  { id: 'quiz_50',        icon: '🎓', title: 'Quiz Master',       desc: 'Complete 50 quizzes',                 check: s => s.quizzesCompleted >= 50 },
  { id: 'flashcard_100',  icon: '🃏', title: 'Card Collector',    desc: 'Review 100 flashcards',               check: s => s.flashcardsReviewed >= 100 },
  { id: 'flashcard_500',  icon: '🗂️', title: 'Card Master',       desc: 'Review 500 flashcards',               check: s => s.flashcardsReviewed >= 500 },
  { id: 'perfect_quiz',   icon: '💯', title: 'Perfectionist',     desc: 'Score 100% on a quiz',                check: s => s.perfectQuizzes >= 1 },
  { id: 'exam_pass',      icon: '📋', title: 'Exam Ready',        desc: 'Complete a full skills exam',         check: s => s.examsCompleted >= 1 },
  { id: 'listening_10',   icon: '👂', title: 'Good Listener',     desc: 'Complete 10 listening sessions',      check: s => s.listeningCompleted >= 10 },
  { id: 'tone_master',    icon: '🎵', title: 'Tone Master',       desc: 'Complete 10 tone training sessions',  check: s => s.toneSessionsCompleted >= 10 },
  { id: 'writing_50',     icon: '✍️', title: 'Calligrapher',       desc: 'Practice writing 50 characters',      check: s => s.charsWritten >= 50 },
  { id: 'words_100',      icon: '📚', title: 'Bookworm',          desc: 'Learn 100 words',                     check: s => s.wordsLearned >= 100 },
  { id: 'words_500',      icon: '🏅', title: 'Scholar',           desc: 'Learn 500 words',                     check: s => s.wordsLearned >= 500 },
  { id: 'words_1000',     icon: '🎖️', title: 'Vocabulary King',    desc: 'Learn 1,000 words',                   check: s => s.wordsLearned >= 1000 },
];

// XP rewards per activity
const XP_REWARDS = {
  flashcard_review:  2,
  quiz_correct:      5,
  quiz_complete:    15,
  exam_complete:    30,
  writing_practice:  3,
  listening_correct: 5,
  tone_correct:      3,
  word_learned:      5,
  daily_login:      10,
};

class GamificationStore {
  constructor() {
    this._data = this._load();
    this._checkDailyLogin();
  }

  // ---- Persistence ----

  _defaults() {
    return {
      totalXP: 0,
      todayXP: 0,
      currentStreak: 0,
      bestStreak: 0,
      lastActiveDate: null,
      totalActivities: 0,
      quizzesCompleted: 0,
      flashcardsReviewed: 0,
      perfectQuizzes: 0,
      examsCompleted: 0,
      listeningCompleted: 0,
      toneSessionsCompleted: 0,
      charsWritten: 0,
      wordsLearned: 0,
      unlockedAchievements: [],
      dailyGoal: 50,       // XP target per day
      xpHistory: [],        // last 30 days: [{date, xp}]
    };
  }

  _load() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return { ...this._defaults(), ...raw };
    } catch {
      return this._defaults();
    }
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._data));
    } catch { /* quota exceeded */ }
  }

  // ---- Daily Login / Streak ----

  _today() {
    return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  }

  _checkDailyLogin() {
    const today = this._today();
    if (this._data.lastActiveDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().slice(0, 10);

    if (this._data.lastActiveDate === yStr) {
      // Consecutive day
      this._data.currentStreak += 1;
    } else if (this._data.lastActiveDate !== today) {
      // Streak broken
      this._data.currentStreak = 1;
    }

    if (this._data.currentStreak > this._data.bestStreak) {
      this._data.bestStreak = this._data.currentStreak;
    }

    this._data.todayXP = 0;
    this._data.lastActiveDate = today;

    // Record daily XP history (keep 30 days)
    this._trimHistory();

    this.addXP(XP_REWARDS.daily_login, 'daily_login');
    this._save();
  }

  _trimHistory() {
    const today = this._today();
    if (!this._data.xpHistory.length || this._data.xpHistory[this._data.xpHistory.length - 1].date !== today) {
      this._data.xpHistory.push({ date: today, xp: 0 });
    }
    if (this._data.xpHistory.length > 30) {
      this._data.xpHistory = this._data.xpHistory.slice(-30);
    }
  }

  // ---- XP System ----

  addXP(amount, reason = '') {
    this._data.totalXP += amount;
    this._data.todayXP += amount;
    this._data.totalActivities += 1;

    // Update today's history entry
    const hist = this._data.xpHistory;
    if (hist.length && hist[hist.length - 1].date === this._today()) {
      hist[hist.length - 1].xp += amount;
    }

    this._save();
    this._checkAchievements();
    eventBus.emit('xp:gained', { amount, reason, total: this._data.totalXP, today: this._data.todayXP });
  }

  // ---- Activity Trackers ----

  recordQuizComplete(score, total) {
    this._data.quizzesCompleted += 1;
    if (score === total) this._data.perfectQuizzes += 1;
    this.addXP(XP_REWARDS.quiz_complete, 'quiz_complete');
  }

  recordQuizCorrect() {
    this.addXP(XP_REWARDS.quiz_correct, 'quiz_correct');
  }

  recordFlashcardReview() {
    this._data.flashcardsReviewed += 1;
    this.addXP(XP_REWARDS.flashcard_review, 'flashcard_review');
  }

  recordExamComplete() {
    this._data.examsCompleted += 1;
    this.addXP(XP_REWARDS.exam_complete, 'exam_complete');
  }

  recordWritingPractice() {
    this._data.charsWritten += 1;
    this.addXP(XP_REWARDS.writing_practice, 'writing_practice');
  }

  recordListeningComplete() {
    this._data.listeningCompleted += 1;
    this.addXP(XP_REWARDS.listening_correct, 'listening_complete');
  }

  recordToneSessionComplete() {
    this._data.toneSessionsCompleted += 1;
    this.addXP(XP_REWARDS.tone_correct, 'tone_session');
  }

  recordWordLearned() {
    this._data.wordsLearned += 1;
    this.addXP(XP_REWARDS.word_learned, 'word_learned');
  }

  // ---- Achievements ----

  _checkAchievements() {
    const unlocked = new Set(this._data.unlockedAchievements);
    let newUnlocks = false;

    for (const ach of ACHIEVEMENTS) {
      if (!unlocked.has(ach.id) && ach.check(this._data)) {
        this._data.unlockedAchievements.push(ach.id);
        unlocked.add(ach.id);
        newUnlocks = true;
        eventBus.emit('achievement:unlocked', ach);
      }
    }

    if (newUnlocks) this._save();
  }

  // ---- Getters ----

  get streak()       { return this._data.currentStreak; }
  get bestStreak()   { return this._data.bestStreak; }
  get totalXP()      { return this._data.totalXP; }
  get todayXP()      { return this._data.todayXP; }
  get dailyGoal()    { return this._data.dailyGoal; }
  get xpHistory()    { return [...this._data.xpHistory]; }
  get stats()        { return { ...this._data }; }

  get level() {
    // Simple leveling: sqrt-based curve
    return Math.floor(Math.sqrt(this._data.totalXP / 25)) + 1;
  }

  get xpForNextLevel() {
    const lvl = this.level;
    return lvl * lvl * 25;
  }

  get achievements() {
    const unlocked = new Set(this._data.unlockedAchievements);
    return ACHIEVEMENTS.map(a => ({
      ...a,
      unlocked: unlocked.has(a.id),
    }));
  }

  get dailyProgress() {
    return Math.min(1, this._data.todayXP / this._data.dailyGoal);
  }

  setDailyGoal(xp) {
    this._data.dailyGoal = Math.max(10, Math.min(500, xp));
    this._save();
  }
}

// Singleton
export const gamificationStore = new GamificationStore();
