// =============================================
//  ChineseDB — SQLite in the browser via sql.js
//
//  Uses sql.js (SQLite compiled to WebAssembly).
//  The .db binary is persisted in IndexedDB so data
//  survives across sessions — works 100% offline
//  on GitHub Pages with real SQL queries.
//
//  Tables: vocabulary, extra_vocab, grammar, reading,
//          chengyu, sentence_patterns, meta, config
// =============================================

const SQL_JS_CDNS = [
  'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.11.0/sql-wasm.js',
  'https://cdn.jsdelivr.net/npm/sql.js@1.11.0/dist/sql-wasm.js',
];
const SQL_WASM_URLS = [
  'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.11.0/sql-wasm.wasm',
  'https://cdn.jsdelivr.net/npm/sql.js@1.11.0/dist/sql-wasm.wasm',
];

// IndexedDB settings for persisting the .db file
const IDB_NAME  = 'chinese_learning_sqlite';
const IDB_VER   = 1;
const IDB_STORE = 'db_file';
const IDB_KEY   = 'main';

class ChineseDB {
  constructor() {
    /** @type {any} sql.js Database instance */
    this._db = null;
    /** @type {any} sql.js SQL module */
    this._SQL = null;
    this._ready = false;
  }

  // ========================================
  //  Initialisation
  // ========================================

  async open() {
    if (this._ready) return;

    // 1. Load sql.js WASM module
    this._SQL = await this._loadSqlJs();

    // 2. Try to restore saved .db from IndexedDB
    const saved = await this._loadFromIDB();
    if (saved) {
      this._db = new this._SQL.Database(new Uint8Array(saved));
    } else {
      this._db = new this._SQL.Database();
    }

    // 3. Create tables if they don't exist
    this._createTables();

    this._ready = true;
  }

  // ---- Load sql.js via dynamic import from CDN (with fallback) ----

  async _loadSqlJs() {
    if (typeof initSqlJs === 'function') {
      return initSqlJs({ locateFile: () => SQL_WASM_URLS[0] });
    }

    for (let i = 0; i < SQL_JS_CDNS.length; i++) {
      try {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = SQL_JS_CDNS[i];
          script.onload  = resolve;
          script.onerror = () => reject(new Error(`Failed to load sql.js from ${SQL_JS_CDNS[i]}`));
          document.head.appendChild(script);
        });
        return initSqlJs({ locateFile: () => SQL_WASM_URLS[i] });
      } catch (err) {
        console.warn('[ChineseDB]', err.message);
        if (i === SQL_JS_CDNS.length - 1) throw err;
      }
    }
  }

  // ---- SQL Schema ----

  _createTables() {
    this._db.run(`
      CREATE TABLE IF NOT EXISTS vocabulary (
        id             INTEGER PRIMARY KEY AUTOINCREMENT,
        level          INTEGER NOT NULL,
        char           TEXT NOT NULL,
        pinyin         TEXT,
        tone           INTEGER,
        meaning        TEXT,
        pos            TEXT,
        example        TEXT,
        exampleMeaning TEXT,
        emoji          TEXT,
        UNIQUE(level, char)
      );
      CREATE INDEX IF NOT EXISTS idx_vocab_level ON vocabulary(level);
      CREATE INDEX IF NOT EXISTS idx_vocab_char  ON vocabulary(char);

      CREATE TABLE IF NOT EXISTS extra_vocab (
        id             INTEGER PRIMARY KEY AUTOINCREMENT,
        level          INTEGER NOT NULL,
        char           TEXT NOT NULL,
        pinyin         TEXT,
        tone           INTEGER,
        meaning        TEXT,
        pos            TEXT,
        example        TEXT,
        exampleMeaning TEXT,
        emoji          TEXT,
        UNIQUE(level, char)
      );
      CREATE INDEX IF NOT EXISTS idx_extra_level ON extra_vocab(level);

      CREATE TABLE IF NOT EXISTS grammar (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        level       INTEGER NOT NULL,
        title       TEXT,
        pattern     TEXT,
        explanation TEXT,
        examples    TEXT,
        tip         TEXT
      );
      CREATE INDEX IF NOT EXISTS idx_grammar_level ON grammar(level);

      CREATE TABLE IF NOT EXISTS reading (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        level       INTEGER NOT NULL,
        title       TEXT,
        text        TEXT,
        pinyin      TEXT,
        translation TEXT,
        questions   TEXT
      );
      CREATE INDEX IF NOT EXISTS idx_reading_level ON reading(level);

      CREATE TABLE IF NOT EXISTS chengyu (
        id             INTEGER PRIMARY KEY AUTOINCREMENT,
        chars          TEXT NOT NULL,
        pinyin         TEXT,
        literal        TEXT,
        meaning        TEXT,
        origin         TEXT,
        example        TEXT,
        exampleMeaning TEXT,
        level          INTEGER,
        UNIQUE(chars)
      );
      CREATE INDEX IF NOT EXISTS idx_chengyu_level ON chengyu(level);

      CREATE TABLE IF NOT EXISTS sentence_patterns (
        id          TEXT PRIMARY KEY,
        level       INTEGER,
        category    TEXT,
        title       TEXT,
        pattern     TEXT,
        explanation TEXT,
        sentences   TEXT,
        tip         TEXT
      );
      CREATE INDEX IF NOT EXISTS idx_sp_level    ON sentence_patterns(level);
      CREATE INDEX IF NOT EXISTS idx_sp_category ON sentence_patterns(category);

      CREATE TABLE IF NOT EXISTS meta (
        level       INTEGER PRIMARY KEY,
        stage       TEXT,
        stageZh     TEXT,
        phonetics   INTEGER,
        characters  INTEGER,
        vocabulary  INTEGER,
        grammar_pts INTEGER,
        cefr        TEXT,
        desc        TEXT,
        descZh      TEXT,
        topics      TEXT,
        color       TEXT
      );

      CREATE TABLE IF NOT EXISTS config (
        key   TEXT PRIMARY KEY,
        value TEXT
      );
    `);
  }

  // ========================================
  //  Persistence — save/load .db to IndexedDB
  // ========================================

  async save() {
    if (!this._db) return;
    const data   = this._db.export();           // Uint8Array
    const buffer = data.buffer.slice(
      data.byteOffset, data.byteOffset + data.byteLength
    );
    await this._saveToIDB(buffer);
  }

  async _openIDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(IDB_NAME, IDB_VER);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror   = () => reject(req.error);
    });
  }

  async _saveToIDB(buffer) {
    const idb = await this._openIDB();
    return new Promise((resolve, reject) => {
      const tx = idb.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).put(buffer, IDB_KEY);
      tx.oncomplete = () => { idb.close(); resolve(); };
      tx.onerror    = () => { idb.close(); reject(tx.error); };
    });
  }

  async _loadFromIDB() {
    try {
      const idb = await this._openIDB();
      return new Promise((resolve, reject) => {
        const tx  = idb.transaction(IDB_STORE, 'readonly');
        const req = tx.objectStore(IDB_STORE).get(IDB_KEY);
        req.onsuccess = () => { idb.close(); resolve(req.result || null); };
        req.onerror   = () => { idb.close(); reject(req.error); };
      });
    } catch {
      return null;
    }
  }

  // ========================================
  //  Config helpers
  // ========================================

  getConfig(key) {
    const rows = this._db.exec(
      'SELECT value FROM config WHERE key = ?', [key]
    );
    if (rows.length && rows[0].values.length) {
      return rows[0].values[0][0];
    }
    return null;
  }

  setConfig(key, value) {
    this._db.run(
      'INSERT OR REPLACE INTO config (key, value) VALUES (?, ?)',
      [key, value]
    );
  }

  // ========================================
  //  Generic SQL helpers
  // ========================================

  /**
   * Run a SELECT and return array of plain objects.
   * @param {string} sql
   * @param {Array} [params]
   * @returns {Array<Object>}
   */
  query(sql, params = []) {
    const result = this._db.exec(sql, params);
    if (!result.length) return [];
    const { columns, values } = result[0];
    return values.map(row => {
      const obj = {};
      columns.forEach((col, i) => { obj[col] = row[i]; });
      return obj;
    });
  }

  /**
   * Run a statement (INSERT, UPDATE, DELETE).
   * @param {string} sql
   * @param {Array} [params]
   */
  run(sql, params = []) {
    this._db.run(sql, params);
  }

  // ========================================
  //  Seed helpers (batch insert)
  // ========================================

  seedVocabulary(records) {
    this.run('BEGIN TRANSACTION');
    this.run('DELETE FROM vocabulary');
    const stmt = this._db.prepare(
      `INSERT OR IGNORE INTO vocabulary
       (level, char, pinyin, tone, meaning, pos, example, exampleMeaning, emoji)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    );
    for (const r of records) {
      stmt.run([
        r.level, r.char, r.pinyin, r.tone ?? null,
        r.meaning, r.pos, r.example, r.exampleMeaning,
        r.emoji ?? null,
      ]);
    }
    stmt.free();
    this.run('COMMIT');
  }

  seedExtraVocab(records) {
    this.run('BEGIN TRANSACTION');
    this.run('DELETE FROM extra_vocab');
    const stmt = this._db.prepare(
      `INSERT OR IGNORE INTO extra_vocab
       (level, char, pinyin, tone, meaning, pos, example, exampleMeaning, emoji)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    );
    for (const r of records) {
      stmt.run([
        r.level, r.char, r.pinyin, r.tone ?? null,
        r.meaning, r.pos, r.example, r.exampleMeaning,
        r.emoji ?? null,
      ]);
    }
    stmt.free();
    this.run('COMMIT');
  }

  seedGrammar(records) {
    this.run('BEGIN TRANSACTION');
    this.run('DELETE FROM grammar');
    const stmt = this._db.prepare(
      `INSERT INTO grammar (level, title, pattern, explanation, examples, tip)
       VALUES (?, ?, ?, ?, ?, ?)`
    );
    for (const r of records) {
      stmt.run([
        r.level, r.title, r.pattern, r.explanation,
        JSON.stringify(r.examples), r.tip ?? null,
      ]);
    }
    stmt.free();
    this.run('COMMIT');
  }

  seedReading(records) {
    this.run('BEGIN TRANSACTION');
    this.run('DELETE FROM reading');
    const stmt = this._db.prepare(
      `INSERT INTO reading (level, title, text, pinyin, translation, questions)
       VALUES (?, ?, ?, ?, ?, ?)`
    );
    for (const r of records) {
      stmt.run([
        r.level, r.title, r.text, r.pinyin, r.translation,
        JSON.stringify(r.questions),
      ]);
    }
    stmt.free();
    this.run('COMMIT');
  }

  seedChengyu(records) {
    this.run('BEGIN TRANSACTION');
    this.run('DELETE FROM chengyu');
    const stmt = this._db.prepare(
      `INSERT OR IGNORE INTO chengyu
       (chars, pinyin, literal, meaning, origin, example, exampleMeaning, level)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    );
    for (const r of records) {
      stmt.run([
        r.chars, r.pinyin, r.literal, r.meaning,
        r.origin, r.example, r.exampleMeaning ?? null, r.level ?? null,
      ]);
    }
    stmt.free();
    this.run('COMMIT');
  }

  seedSentencePatterns(records) {
    this.run('BEGIN TRANSACTION');
    this.run('DELETE FROM sentence_patterns');
    const stmt = this._db.prepare(
      `INSERT OR IGNORE INTO sentence_patterns
       (id, level, category, title, pattern, explanation, sentences, tip)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    );
    for (const r of records) {
      stmt.run([
        r.id, r.level, r.category, r.title, r.pattern,
        r.explanation, JSON.stringify(r.sentences), r.tip ?? null,
      ]);
    }
    stmt.free();
    this.run('COMMIT');
  }

  seedMeta(records) {
    this.run('BEGIN TRANSACTION');
    this.run('DELETE FROM meta');
    const stmt = this._db.prepare(
      `INSERT OR REPLACE INTO meta
       (level, stage, stageZh, phonetics, characters, vocabulary,
        grammar_pts, cefr, desc, descZh, topics, color)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    );
    for (const r of records) {
      stmt.run([
        r.level, r.stage, r.stageZh, r.phonetics, r.characters,
        r.vocabulary, r.grammar, r.cefr, r.desc, r.descZh,
        JSON.stringify(r.topics), r.color,
      ]);
    }
    stmt.free();
    this.run('COMMIT');
  }

  // ========================================
  //  Query API — typed SELECT wrappers
  // ========================================

  // -- Vocabulary --

  getVocabularyByLevel(level) {
    return this.query(
      'SELECT * FROM vocabulary WHERE level = ? ORDER BY id', [level]
    );
  }

  getAllVocabulary() {
    return this.query('SELECT * FROM vocabulary ORDER BY level, id');
  }

  searchVocabulary(q, limit = 100) {
    const pattern = '%' + q + '%';
    return this.query(
      `SELECT * FROM vocabulary
       WHERE char LIKE ? OR pinyin LIKE ? OR meaning LIKE ?
       ORDER BY
         CASE WHEN char = ? THEN 0 ELSE 1 END,
         LENGTH(char)
       LIMIT ?`,
      [pattern, pattern, pattern, q, limit]
    );
  }

  getVocabularyCount() {
    return this.query('SELECT COUNT(*) AS cnt FROM vocabulary')[0]?.cnt ?? 0;
  }

  getVocabularyCountByLevel(level) {
    return this.query(
      'SELECT COUNT(*) AS cnt FROM vocabulary WHERE level = ?', [level]
    )[0]?.cnt ?? 0;
  }

  // -- Extra Vocab --

  getExtraVocabByLevel(level) {
    return this.query(
      'SELECT * FROM extra_vocab WHERE level = ? ORDER BY id', [level]
    );
  }

  // -- Grammar --

  getGrammarByLevel(level) {
    const rows = this.query(
      'SELECT * FROM grammar WHERE level = ? ORDER BY id', [level]
    );
    return rows.map(r => ({ ...r, examples: JSON.parse(r.examples || '[]') }));
  }

  getAllGrammar() {
    const rows = this.query('SELECT * FROM grammar ORDER BY level, id');
    return rows.map(r => ({ ...r, examples: JSON.parse(r.examples || '[]') }));
  }

  // -- Reading --

  getReadingByLevel(level) {
    const rows = this.query(
      'SELECT * FROM reading WHERE level = ? ORDER BY id', [level]
    );
    return rows.map(r => ({ ...r, questions: JSON.parse(r.questions || '[]') }));
  }

  // -- Chengyu --

  getAllChengyu() {
    return this.query('SELECT * FROM chengyu ORDER BY id');
  }

  searchChengyu(q, limit = 100) {
    const pattern = '%' + q + '%';
    return this.query(
      `SELECT * FROM chengyu
       WHERE chars LIKE ? OR pinyin LIKE ? OR meaning LIKE ? OR literal LIKE ?
       LIMIT ?`,
      [pattern, pattern, pattern, pattern, limit]
    );
  }

  // -- Sentence Patterns --

  getAllSentencePatterns() {
    const rows = this.query('SELECT * FROM sentence_patterns ORDER BY level, id');
    return rows.map(r => ({ ...r, sentences: JSON.parse(r.sentences || '[]') }));
  }

  getSentencePatternsByLevel(level) {
    const rows = this.query(
      'SELECT * FROM sentence_patterns WHERE level = ? ORDER BY id', [level]
    );
    return rows.map(r => ({ ...r, sentences: JSON.parse(r.sentences || '[]') }));
  }

  // -- Meta --

  getMeta(level) {
    const rows = this.query('SELECT * FROM meta WHERE level = ?', [level]);
    if (!rows.length) return null;
    return { ...rows[0], topics: JSON.parse(rows[0].topics || '[]') };
  }

  getAllMeta() {
    const rows = this.query('SELECT * FROM meta ORDER BY level');
    return rows.map(r => ({ ...r, topics: JSON.parse(r.topics || '[]') }));
  }

  // -- Stats --

  getStats() {
    const cnt = (table) =>
      this.query(`SELECT COUNT(*) AS cnt FROM ${table}`)[0]?.cnt ?? 0;
    return {
      vocabulary:        cnt('vocabulary'),
      extra_vocab:       cnt('extra_vocab'),
      grammar:           cnt('grammar'),
      reading:           cnt('reading'),
      chengyu:           cnt('chengyu'),
      sentence_patterns: cnt('sentence_patterns'),
    };
  }

  getLevelStats() {
    return this.query(
      `SELECT level, COUNT(*) AS word_count
       FROM vocabulary GROUP BY level ORDER BY level`
    );
  }

  // ========================================
  //  Custom SQL — for advanced use by views
  // ========================================

  /**
   * Run any SELECT and get results as objects.
   * @example db.sql("SELECT * FROM vocabulary WHERE level = 3 AND pos = 'verb'")
   */
  sql(sqlStr, params = []) {
    return this.query(sqlStr, params);
  }

  // ========================================
  //  Cleanup
  // ========================================

  close() {
    if (this._db) {
      this._db.close();
      this._db = null;
    }
    this._SQL = null;
    this._ready = false;
  }

  async deleteDatabase() {
    if (this._db) {
      this._db.close();
      this._db = null;
      this._ready = false;
    }
    return new Promise((resolve, reject) => {
      const req = indexedDB.deleteDatabase(IDB_NAME);
      req.onsuccess = () => resolve();
      req.onerror   = () => reject(req.error);
    });
  }

  get isReady() { return this._ready; }
}

export const chineseDB = new ChineseDB();
