// =============================================
//  PROGRESS STORE  — Service + Singleton
//  Single source of truth for learned-word data.
//  Emits EventBus events so any module can react
//  without direct coupling to this store.
// =============================================

import { eventBus } from './EventBus.js';

const STORAGE_KEY = 'cn_progress';

class ProgressStore {
  constructor() {
    /** @type {Object<number, Object<string, true>>} */
    this._data = this._load();
  }

  // ---- Private ----

  _load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
      return {};
    }
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._data));
    } catch { /* quota exceeded — data stays in memory */ }
  }

  // ---- Public API ----

  /**
   * Mark a word as learned and persist it.
   * Emits 'word:learned' { level, char }.
   * @param {number} level
   * @param {string} char
   */
  markLearned(level, char) {
    if (!this._data[level]) this._data[level] = {};
    this._data[level][char] = true;
    this._save();
    eventBus.emit('word:learned', { level, char });
  }

  /**
   * @param {number} level
   * @param {string} char
   * @returns {boolean}
   */
  isLearned(level, char) {
    return !!(this._data[level]?.[char]);
  }

  /**
   * Number of words learned at a given level.
   * @param {number} level
   * @returns {number}
   */
  getLevelCount(level) {
    return Object.keys(this._data[level] ?? {}).length;
  }

  /**
   * Raw data snapshot (read-only use only).
   * @returns {object}
   */
  getAll() {
    return this._data;
  }

  /**
   * Wipe all progress and emit 'progress:reset'.
   */
  reset() {
    this._data = {};
    localStorage.removeItem(STORAGE_KEY);
    eventBus.emit('progress:reset');
  }
}

// Singleton
export const progressStore = new ProgressStore();
