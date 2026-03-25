// =============================================
//  DictionaryDB — CC-CEDICT lazy loader
//
//  Fetches the CC-CEDICT dictionary file, caches
//  the raw text in IndexedDB, and parses it into
//  an in-memory searchable array on demand.
//
//  CC-CEDICT line format:
//    Traditional Simplified [pin1 yin1] /def1/def2/
//
//  ~112 000 entries, ~5 MB raw text.
// =============================================

const CEDICT_URL =
  'https://www.mdbg.net/chinese/export/cedict/cedict_1_0_ts_utf-8_mdbg.txt.gz';
const CEDICT_FALLBACK_URL =
  'https://raw.githubusercontent.com/glxxyz/hskhsk.com/main/data/cedict/cedict_ts.u8';

const DB_NAME    = 'cn_dict';
const DB_VERSION = 1;
const STORE      = 'cedict';
const CACHE_KEY  = 'raw';

export class DictionaryDB {
  constructor() {
    this._entries = null;   // parsed array (lazily built)
    this._rawText = null;   // raw cedict text
    this._db = null;
  }

  // ---- Public API ----

  /**
   * Ensure dictionary is loaded. Returns total entry count.
   * @param {(msg: string) => void} onProgress
   * @returns {Promise<number>}
   */
  async load(onProgress = () => {}) {
    if (this._entries) return this._entries.length;

    onProgress('Opening local cache…');
    await this._openDB();

    // Try cache first
    const cached = await this._getCache();
    if (cached) {
      onProgress('Parsing cached dictionary…');
      this._rawText = cached;
    } else {
      onProgress('Downloading CC-CEDICT (~5 MB)…');
      this._rawText = await this._fetch(onProgress);
      onProgress('Saving to local cache…');
      await this._putCache(this._rawText);
    }

    onProgress('Parsing entries…');
    this._entries = this._parse(this._rawText);
    onProgress(`Ready — ${this._entries.length.toLocaleString()} entries loaded.`);
    return this._entries.length;
  }

  /**
   * Search entries by simplified/traditional characters, pinyin, or English meaning.
   * @param {string} query
   * @param {number} limit
   * @returns {Array<{simplified:string, traditional:string, pinyin:string, defs:string[]}>}
   */
  search(query, limit = 100) {
    if (!this._entries || !query) return [];
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const results = [];
    for (const e of this._entries) {
      if (results.length >= limit) break;
      if (
        e.simplified.includes(q) ||
        e.traditional.includes(q) ||
        e.pinyinSearch.includes(q) ||
        e.defsSearch.includes(q)
      ) {
        results.push(e);
      }
    }

    // Sort: exact char match first, then by char length (shorter = more relevant)
    results.sort((a, b) => {
      const aExact = a.simplified === q || a.traditional === q ? 0 : 1;
      const bExact = b.simplified === q || b.traditional === q ? 0 : 1;
      if (aExact !== bExact) return aExact - bExact;
      return a.simplified.length - b.simplified.length;
    });

    return results;
  }

  get isLoaded() { return this._entries !== null; }
  get entryCount() { return this._entries ? this._entries.length : 0; }

  // ---- Internals ----

  _parse(raw) {
    const lines = raw.split('\n');
    const entries = [];
    for (const line of lines) {
      if (!line || line.startsWith('#')) continue;
      // Format: Traditional Simplified [pin yin] /def1/def2/
      const m = line.match(/^(\S+)\s+(\S+)\s+\[([^\]]+)\]\s+\/(.+)\/\s*$/);
      if (!m) continue;
      const traditional = m[1];
      const simplified  = m[2];
      const pinyin      = m[3];
      const defs        = m[4].split('/');
      entries.push({
        traditional,
        simplified,
        pinyin,
        pinyinSearch: pinyin.toLowerCase(),
        defs,
        defsSearch: defs.join(' ').toLowerCase(),
      });
    }
    return entries;
  }

  async _fetch(onProgress) {
    // Try primary URL first (gzipped), fall back to plain text
    try {
      const res = await fetch(CEDICT_FALLBACK_URL);
      if (!res.ok) throw new Error(res.statusText);
      const total = parseInt(res.headers.get('Content-Length') || '0', 10);
      if (!res.body || !total) {
        onProgress('Downloading…');
        return await res.text();
      }
      // Stream with progress
      const reader = res.body.getReader();
      const chunks = [];
      let received = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        const pct = total ? Math.round((received / total) * 100) : '?';
        onProgress(`Downloading… ${pct}%`);
      }
      const blob = new Blob(chunks);
      return await blob.text();
    } catch (err) {
      onProgress('Primary source failed, trying fallback…');
      const res2 = await fetch(CEDICT_URL);
      if (!res2.ok) throw new Error('All sources failed: ' + res2.statusText);
      // Decompress gzip
      if (typeof DecompressionStream !== 'undefined') {
        const ds = new DecompressionStream('gzip');
        const decompressed = res2.body.pipeThrough(ds);
        return await new Response(decompressed).text();
      }
      return await res2.text();
    }
  }

  // ---- IndexedDB helpers ----

  _openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE);
        }
      };
      req.onsuccess = () => { this._db = req.result; resolve(); };
      req.onerror   = () => reject(req.error);
    });
  }

  _getCache() {
    return new Promise((resolve) => {
      try {
        const tx  = this._db.transaction(STORE, 'readonly');
        const req = tx.objectStore(STORE).get(CACHE_KEY);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror   = () => resolve(null);
      } catch { resolve(null); }
    });
  }

  _putCache(text) {
    return new Promise((resolve) => {
      try {
        const tx  = this._db.transaction(STORE, 'readwrite');
        const req = tx.objectStore(STORE).put(text, CACHE_KEY);
        req.onsuccess = () => resolve();
        req.onerror   = () => resolve();
      } catch { resolve(); }
    });
  }
}

// Singleton
export const dictionaryDB = new DictionaryDB();
