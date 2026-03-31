import { View }           from './View.js';
import { dictionaryDB }  from '../core/DictionaryDB.js';
import { speechService } from '../core/SpeechService.js';
import { escHtml }        from '../core/utils.js';

export class DictionaryView extends View {
  constructor() {
    super('dictionary');
    this._loaded  = false;
    this._query   = '';
    this._debounce = null;
    this._bindEvents();
  }

  // ---- Lifecycle ----

  onActivate() {
    if (!this._loaded) {
      this._loadDictionary();
    }
  }

  onDeactivate() {
    clearTimeout(this._debounce);
  }

  // ---- Events ----

  _bindEvents() {
    const input = document.getElementById('dict-search');
    if (input) {
      input.addEventListener('input', () => {
        clearTimeout(this._debounce);
        this._debounce = setTimeout(() => {
          this._query = input.value.trim();
          this._doSearch();
        }, 250);
      });
    }

    const results = document.getElementById('dict-results');
    if (results) {
      results.addEventListener('click', (e) => {
        const btn = e.target.closest('.dict-speak');
        if (btn) {
          e.stopPropagation();
          speechService.speak(btn.dataset.char);
        }
      });
    }
  }

  // ---- Loading ----

  async _loadDictionary() {
    const status  = document.getElementById('dict-status');
    const input   = document.getElementById('dict-search');
    const results = document.getElementById('dict-results');

    if (status) status.style.display = 'block';
    if (input)  input.disabled = true;
    if (results) results.innerHTML = '';

    try {
      await dictionaryDB.load((msg) => {
        if (status) status.textContent = msg;
      });
      this._loaded = true;
      if (status)  status.style.display = 'none';
      if (input)   { input.disabled = false; input.focus(); }
      if (results) results.innerHTML =
        '<p class="dict-hint">Type a Chinese character, pinyin, or English word to search ' +
        dictionaryDB.entryCount.toLocaleString() + ' entries.</p>';
    } catch (err) {
      if (status) {
        status.textContent = 'Failed to load dictionary: ' + err.message;
        status.classList.add('error');
      }
    }
  }

  // ---- Search ----

  _doSearch() {
    const results = document.getElementById('dict-results');
    if (!results) return;

    if (!this._query) {
      results.innerHTML =
        '<p class="dict-hint">Type a Chinese character, pinyin, or English word to search ' +
        dictionaryDB.entryCount.toLocaleString() + ' entries.</p>';
      return;
    }

    const matches = dictionaryDB.search(this._query, 80);

    if (!matches.length) {
      results.innerHTML =
        '<p class="dict-hint">No results for "<strong>' + escHtml(this._query) + '</strong>".</p>';
      return;
    }

    results.innerHTML = matches.map(e => `
      <div class="dict-entry">
        <div class="dict-chars">
          <span class="dict-simplified">${escHtml(e.simplified)}</span>
          ${e.traditional !== e.simplified
            ? `<span class="dict-traditional">${escHtml(e.traditional)}</span>` : ''}
          <button class="dict-speak" data-char="${escHtml(e.simplified)}" title="Pronounce">🔊</button>
        </div>
        <div class="dict-pinyin">${escHtml(e.pinyin)}</div>
        <div class="dict-defs">${e.defs.map(d => `<span class="dict-def">${escHtml(d)}</span>`).join('')}</div>
      </div>
    `).join('');
  }
}
