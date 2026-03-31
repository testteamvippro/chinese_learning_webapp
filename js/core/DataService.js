// =============================================
//  DataService — Unified data layer (SQLite)
//
//  On first visit:
//    1. Data JS files load via <script> tags → globals
//    2. DataService seeds globals → SQLite (saved to IndexedDB)
//
//  On subsequent visits:
//    1. SQLite .db loaded from IndexedDB → globals populated
//    2. Views work exactly as before via globals
//    3. Views can also use SQL queries directly
//
//  Benefits:
//    • Real SQL: SELECT, WHERE, LIKE, JOIN, GROUP BY
//    • Data persists offline in browser IndexedDB
//    • Works on GitHub Pages (zero server needed)
//    • Efficient indexed queries by level, char, etc.
//    • Single .db file — easy to export / backup
// =============================================

import { chineseDB } from './ChineseDB.js';

// Bump this when data files change to trigger re-seeding.
const DATA_VERSION = '1.0.0';

class DataService {
  constructor() {
    this._ready = false;
  }

  // ========================================
  //  Initialisation (call once at app start)
  // ========================================

  async init() {
    if (this._ready) return;

    await chineseDB.open();

    const storedVersion = chineseDB.getConfig('data_version');

    if (storedVersion === DATA_VERSION) {
      // DB already has current data — load into globals
      this._loadFromDB();
    } else {
      // First visit or data changed — seed from globals into SQLite
      this._seedFromGlobals();
      chineseDB.setConfig('data_version', DATA_VERSION);
      // Persist the .db to IndexedDB
      await chineseDB.save();
    }

    this._ready = true;
    console.log('[DataService] Ready (SQLite v' + DATA_VERSION + ')', chineseDB.getStats());
  }

  // ========================================
  //  Seed: globals → SQLite
  // ========================================

  _seedFromGlobals() {
    // -- Vocabulary --
    if (typeof HSK_DATA !== 'undefined') {
      const records = [];
      for (const [level, words] of Object.entries(HSK_DATA)) {
        for (const w of words) {
          records.push({ ...w, level: parseInt(level, 10) });
        }
      }
      chineseDB.seedVocabulary(records);
    }

    // -- Extra Vocabulary --
    if (typeof EXTRA_VOCAB !== 'undefined') {
      const records = [];
      for (const [level, words] of Object.entries(EXTRA_VOCAB)) {
        for (const w of words) {
          records.push({ ...w, level: parseInt(level, 10) });
        }
      }
      chineseDB.seedExtraVocab(records);
    }

    // -- Grammar --
    if (typeof GRAMMAR_DATA !== 'undefined') {
      const records = [];
      for (const [level, patterns] of Object.entries(GRAMMAR_DATA)) {
        for (const p of patterns) {
          records.push({ ...p, level: parseInt(level, 10) });
        }
      }
      chineseDB.seedGrammar(records);
    }

    // -- Reading --
    if (typeof READING_DATA !== 'undefined') {
      const records = [];
      for (const [level, passages] of Object.entries(READING_DATA)) {
        for (const p of passages) {
          records.push({ ...p, level: parseInt(level, 10) });
        }
      }
      chineseDB.seedReading(records);
    }

    // -- Chengyu --
    if (typeof CHENGYU_DATA !== 'undefined') {
      chineseDB.seedChengyu(CHENGYU_DATA);
    }

    // -- Sentence Patterns --
    if (typeof window !== 'undefined' && window.SENTENCE_PATTERNS_DATA) {
      chineseDB.seedSentencePatterns(window.SENTENCE_PATTERNS_DATA);
    }

    // -- HSK Meta --
    if (typeof HSK_META !== 'undefined') {
      const records = [];
      for (const [level, meta] of Object.entries(HSK_META)) {
        records.push({ ...meta, level: parseInt(level, 10) });
      }
      chineseDB.seedMeta(records);
    }

    console.log('[DataService] Seeded SQLite from global data');
  }

  // ========================================
  //  Load: SQLite → globals
  // ========================================

  _groupByLevel(rows) {
    const grouped = {};
    for (const r of rows) {
      (grouped[r.level] ??= []).push(r);
    }
    return grouped;
  }

  _loadFromDB() {
    window.HSK_DATA      = this._groupByLevel(chineseDB.getAllVocabulary());
    window.EXTRA_VOCAB   = this._groupByLevel(
      chineseDB.query('SELECT * FROM extra_vocab ORDER BY level, id')
    );
    window.GRAMMAR_DATA  = this._groupByLevel(chineseDB.getAllGrammar());
    window.READING_DATA  = this._groupByLevel(
      chineseDB.query('SELECT * FROM reading ORDER BY level, id')
        .map(r => ({ ...r, questions: JSON.parse(r.questions || '[]') }))
    );
    window.CHENGYU_DATA  = chineseDB.getAllChengyu();
    window.SENTENCE_PATTERNS_DATA = chineseDB.getAllSentencePatterns();

    const metaObj = {};
    for (const m of chineseDB.getAllMeta()) { metaObj[m.level] = m; }
    window.HSK_META = metaObj;

    console.log('[DataService] Loaded globals from SQLite');
  }

  // ========================================
  //  Public query API (SQL-powered)
  // ========================================

  /** Get vocabulary for one level. */
  getVocabulary(level) {
    return chineseDB.getVocabularyByLevel(level);
  }

  /** Get all vocabulary. */
  getAllVocabulary() {
    return chineseDB.getAllVocabulary();
  }

  /** Full-text search across vocabulary. */
  searchVocabulary(query, limit = 100) {
    return chineseDB.searchVocabulary(query, limit);
  }

  /** Get extra vocab for one level. */
  getExtraVocabulary(level) {
    return chineseDB.getExtraVocabByLevel(level);
  }

  /** Get grammar patterns for one level. */
  getGrammar(level) {
    return chineseDB.getGrammarByLevel(level);
  }

  /** Get reading passages for one level. */
  getReading(level) {
    return chineseDB.getReadingByLevel(level);
  }

  /** Get all chengyu (optionally by level). */
  getChengyu(level) {
    if (level !== undefined) {
      return chineseDB.query(
        'SELECT * FROM chengyu WHERE level = ? ORDER BY id', [level]
      );
    }
    return chineseDB.getAllChengyu();
  }

  /** Search chengyu by text. */
  searchChengyu(query, limit = 100) {
    return chineseDB.searchChengyu(query, limit);
  }

  /** Get sentence patterns with optional filters. */
  getSentencePatterns(filters = {}) {
    if (filters.level) return chineseDB.getSentencePatternsByLevel(filters.level);
    return chineseDB.getAllSentencePatterns();
  }

  /** Get HSK meta for one or all levels. */
  getMeta(level) {
    if (level !== undefined) return chineseDB.getMeta(level);
    return chineseDB.getAllMeta();
  }

  /** Database stats. */
  getStats() {
    return chineseDB.getStats();
  }

  /** Per-level word counts. */
  getLevelStats() {
    return chineseDB.getLevelStats();
  }

  /**
   * Run any custom SQL query.
   * @example dataService.sql("SELECT char, meaning FROM vocabulary WHERE level = 3 AND pos = 'verb' LIMIT 10")
   */
  sql(query, params = []) {
    return chineseDB.sql(query, params);
  }

  /** Force re-seed from current globals. */
  async reseed() {
    this._seedFromGlobals();
    chineseDB.setConfig('data_version', DATA_VERSION);
    await chineseDB.save();
  }

  /** Wipe the database. */
  async resetDatabase() {
    await chineseDB.deleteDatabase();
    this._ready = false;
  }

  get isReady() { return this._ready; }
}

export const dataService = new DataService();
