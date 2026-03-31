// =============================================
//  SRS ENGINE  — SM-2 Spaced Repetition Algorithm
//
//  Tracks per-word review data and schedules
//  optimal review times. Persists to localStorage.
//
//  Each card record:
//    { ease, interval, repetitions, due, lastReview, lapses }
//
//  Quality ratings (0-5, simplified to 3 buttons):
//    Hard = 1  →  reset interval, mark lapse
//    OK   = 3  →  advance slowly
//    Easy = 5  →  advance fast
// =============================================

const STORAGE_KEY = 'cn_srs_data';

class SRSEngine {
  constructor() {
    this._data = this._load(); // { "level:char": { ease, interval, repetitions, due, lastReview, lapses } }
  }

  // ---- Persistence ----

  _load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch { return {}; }
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._data));
    } catch { /* quota — ignore */ }
  }

  _key(level, char) { return `${level}:${char}`; }

  // ---- Card access ----

  getCard(level, char) {
    const k = this._key(level, char);
    if (!this._data[k]) {
      this._data[k] = {
        ease: 2.5,
        interval: 0,       // days
        repetitions: 0,
        due: Date.now(),    // ms timestamp — due immediately for new cards
        lastReview: 0,
        lapses: 0,
      };
    }
    return this._data[k];
  }

  // ---- SM-2 Review ----

  /**
   * Record a review.
   * @param {number} level
   * @param {string} char
   * @param {number} quality  0–5 (Hard=1, OK=3, Easy=5)
   */
  review(level, char, quality) {
    quality = Math.max(0, Math.min(5, Math.round(quality)));
    const card = this.getCard(level, char);
    const now  = Date.now();

    card.lastReview = now;

    if (quality < 2) {
      // Failed — reset
      card.repetitions = 0;
      card.interval    = 0;
      card.lapses++;
    } else {
      // Passed — advance
      if (card.repetitions === 0) {
        card.interval = 1;                     // 1 day
      } else if (card.repetitions === 1) {
        card.interval = 3;                     // 3 days
      } else {
        card.interval = Math.round(card.interval * card.ease);
      }
      card.repetitions++;
    }

    // Update ease factor (min 1.3)
    card.ease = Math.max(1.3,
      card.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );

    // Set next due date
    card.due = now + card.interval * 86400000; // interval in ms

    this._save();
    return card;
  }

  // ---- Scheduling ----

  /**
   * Is this card due for review?
   */
  isDue(level, char) {
    const k = this._key(level, char);
    if (!this._data[k]) return true; // new card
    return this._data[k].due <= Date.now();
  }

  /**
   * Get all due cards for a level from a word pool.
   * @param {number} level
   * @param {Array} wordPool  array of word objects with .char
   * @returns {Array} words due for review, sorted by overdue amount
   */
  getDueCards(level, wordPool) {
    const now = Date.now();
    return wordPool
      .filter(w => this.isDue(level, w.char))
      .sort((a, b) => {
        const aCard = this.getCard(level, a.char);
        const bCard = this.getCard(level, b.char);
        return aCard.due - bCard.due; // most overdue first
      });
  }

  /**
   * Get cards that have been reviewed at least once.
   */
  getReviewedCards(level, wordPool) {
    return wordPool.filter(w => {
      const k = this._key(level, w.char);
      return this._data[k] && this._data[k].repetitions > 0;
    });
  }

  /**
   * Stats for a level.
   */
  getLevelStats(level, wordPool) {
    const now = Date.now();
    let newCards = 0, due = 0, reviewing = 0, mastered = 0;

    for (const w of wordPool) {
      const k = this._key(level, w.char);
      const c = this._data[k];
      if (!c || c.repetitions === 0) {
        newCards++;
      } else if (c.due <= now) {
        due++;
      } else if (c.interval >= 21) {
        mastered++;
      } else {
        reviewing++;
      }
    }
    return { newCards, due, reviewing, mastered, total: wordPool.length };
  }

  /**
   * Get next review time text.
   */
  getNextReviewText(level, char) {
    const k = this._key(level, char);
    const c = this._data[k];
    if (!c || c.repetitions === 0) return 'New';
    if (c.due <= Date.now()) return 'Due now';

    const diff = c.due - Date.now();
    const mins  = Math.round(diff / 60000);
    const hours = Math.round(diff / 3600000);
    const days  = Math.round(diff / 86400000);

    if (mins < 60) return `${mins}m`;
    if (hours < 24) return `${hours}h`;
    return `${days}d`;
  }

  /**
   * Wipe all SRS data.
   */
  reset() {
    this._data = {};
    localStorage.removeItem(STORAGE_KEY);
  }
}

export const srsEngine = new SRSEngine();
