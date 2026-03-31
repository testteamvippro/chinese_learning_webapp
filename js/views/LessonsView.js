import { View }          from './View.js';
import { progressStore } from '../core/ProgressStore.js';
import { speechService } from '../core/SpeechService.js';
import { escHtml, setActiveTab } from '../core/utils.js';

export class LessonsView extends View {
  constructor() {
    super('lessons');
    this._level = 1;
    this._bindEvents();
  }

  // ---- Lifecycle ----

  onActivate({ level } = {}) {
    if (level !== undefined) this._level = level;
    this._render(this._level);
  }

  // ---- Rendering ----

  _render(level) {
    this._level = level;
    const data  = HSK_DATA[level] || [];   // HSK_DATA comes from data.js global
    setActiveTab('level-tabs', level);
    document.getElementById('lesson-info').textContent =
      `HSK ${level} · ${data.length} vocabulary words`;
    this._renderGrid(data, level, '');
  }

  _renderGrid(baseData, level, query) {
    const showExtra = document.getElementById('show-extra')?.checked;
    const allData   = showExtra && EXTRA_VOCAB[level]
      ? [...baseData, ...EXTRA_VOCAB[level].map(w => ({ ...w, _extra: true }))]
      : baseData;

    const filtered = query
      ? allData.filter(w =>
          w.char.includes(query) ||
          w.pinyin.toLowerCase().includes(query.toLowerCase()) ||
          w.meaning.toLowerCase().includes(query.toLowerCase())
        )
      : allData;

    const grid = document.getElementById('vocab-grid');

    if (!filtered.length) {
      grid.innerHTML =
        '<p style="color:var(--text-muted);grid-column:1/-1">No results found.</p>';
      return;
    }

    grid.innerHTML = filtered.map(word => {
      const learned    = progressStore.isLearned(level, word.char);
      const extraClass = word._extra ? ' extra-word' : '';
      return `
        <div class="vocab-card${learned ? ' learned' : ''}${extraClass}"
             data-char="${escHtml(word.char)}" data-level="${level}">
          ${learned
            ? '<span class="learn-check">✓ learned</span>'
            : ''}
          ${word._extra
            ? '<span style="font-size:.7rem;position:absolute;top:.5rem;right:.7rem;color:var(--accent)">+bonus</span>'
            : ''}
          ${word.emoji ? `<div class="vocab-emoji">${word.emoji}</div>` : ''}
          <div class="vocab-char tone-${word.tone}">${escHtml(word.char)}</div>
          <div class="vocab-pinyin">${escHtml(word.pinyin)}</div>
          <div class="vocab-meaning">${escHtml(word.meaning)}</div>
          <span class="vocab-tag">${escHtml(word.pos)}</span>
          <div class="vocab-example" style="display:none"></div>
          <button class="vocab-speak" title="Pronounce" aria-label="Pronounce">🔊</button>
        </div>`;
    }).join('');
  }

  _getWordFromPool(level, char) {
    const pool = EXTRA_VOCAB[level]
      ? [...(HSK_DATA[level] || []), ...EXTRA_VOCAB[level]]
      : [...(HSK_DATA[level] || [])];
    return pool.find(w => w.char === char);
  }

  // ---- Event wiring (done once in constructor) ----

  _bindEvents() {
    document.getElementById('level-tabs').addEventListener('click', e => {
      if (e.target.classList.contains('tab')) {
        this._render(parseInt(e.target.getAttribute('data-level')));
      }
    });

    document.getElementById('search-input').addEventListener('input', e => {
      this._renderGrid(HSK_DATA[this._level], this._level, e.target.value.trim());
    });

    document.getElementById('show-extra').addEventListener('change', () => {
      const q = document.getElementById('search-input').value.trim();
      this._renderGrid(HSK_DATA[this._level], this._level, q);
    });

    // Event delegation on the grid — handles card clicks and speak buttons
    const grid = document.getElementById('vocab-grid');
    grid.addEventListener('click', e => {
      // Speak button
      const speakBtn = e.target.closest('.vocab-speak');
      if (speakBtn) {
        e.stopPropagation();
        speechService.speak(speakBtn.closest('.vocab-card').getAttribute('data-char'));
        return;
      }

      // Card click → mark learned + toggle example
      const card = e.target.closest('.vocab-card');
      if (!card) return;

      const ch   = card.getAttribute('data-char');
      const lv   = parseInt(card.getAttribute('data-level'));
      const word = this._getWordFromPool(lv, ch);
      if (!word) return;

      speechService.speak(word.char);
      progressStore.markLearned(lv, ch);
      card.classList.add('learned');
      if (!card.querySelector('.learn-check')) {
        const ck = document.createElement('span');
        ck.className   = 'learn-check';
        ck.textContent = '✓ learned';
        card.prepend(ck);
      }

      const exDiv = card.querySelector('.vocab-example');
      if (exDiv.style.display === 'none') {
        exDiv.style.display    = 'block';
        exDiv.style.marginTop  = '.5rem';
        exDiv.style.fontSize   = '.8rem';
        exDiv.style.color      = 'var(--text-muted)';
        exDiv.innerHTML = `<span style="font-family:var(--font-cn)">${escHtml(word.example)}</span><br>${escHtml(word.exampleMeaning)}`;
      } else {
        exDiv.style.display = 'none';
      }
    });
  }
}
