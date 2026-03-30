import { View }          from './View.js';
import { progressStore } from '../core/ProgressStore.js';
import { speechService } from '../core/SpeechService.js';
import { srsEngine }     from '../core/SRSEngine.js';
import { escHtml, shuffle, setActiveTab } from '../core/utils.js';

export class FlashcardView extends View {
  constructor() {
    super('flashcards');
    this._level = 1;
    this._cards = [];
    this._index = 0;
    this._srsMode = true;     // SRS mode on by default
    this._bindEvents();
  }

  // ---- Lifecycle ----

  onActivate({ level } = {}) {
    if (level !== undefined) this._level = level;
    this._reset(this._level);
  }

  // ---- Core logic ----

  _reset(level) {
    this._level = level;
    setActiveTab('fc-level-tabs', level);

    const pool = HSK_DATA[level] || [];

    if (this._srsMode) {
      // SRS: show due cards first, then new cards (limit 20 new per session)
      const due = srsEngine.getDueCards(level, pool);
      const newCards = pool.filter(w => {
        const c = srsEngine.getCard(level, w.char);
        return c.repetitions === 0;
      });
      const newBatch = shuffle([...newCards]).slice(0, 20);
      // Due cards first, then some new cards
      this._cards = [...due.filter(w => {
        const c = srsEngine.getCard(level, w.char);
        return c.repetitions > 0;
      }), ...newBatch];
      if (this._cards.length === 0) this._cards = shuffle([...pool]); // fallback
    } else {
      this._cards = shuffle([...pool]);
    }

    this._index = 0;
    this._updateCard();
    this._updateSRSStats();
  }

  _updateCard() {
    const card = this._cards[this._index];
    if (!card) return;

    document.getElementById('fc-char').textContent    = card.char;
    const emojiEl = document.getElementById('fc-emoji');
    if (emojiEl) emojiEl.textContent = card.emoji || '';
    document.getElementById('fc-pinyin').textContent  = card.pinyin;
    document.getElementById('fc-meaning').textContent = card.meaning;
    document.getElementById('fc-example').innerHTML   =
      `<span style="font-family:var(--font-cn)">${escHtml(card.example)}</span><br><small>${escHtml(card.exampleMeaning)}</small>`;
    document.getElementById('fc-counter').textContent =
      `Card ${this._index + 1} / ${this._cards.length}`;
    document.getElementById('fc-progress-fill').style.width =
      `${((this._index + 1) / this._cards.length * 100).toFixed(0)}%`;

    document.getElementById('flashcard').classList.remove('flipped');

    // Show SRS info on card
    const srsInfo = document.getElementById('fc-srs-info');
    if (srsInfo && this._srsMode) {
      const nextText = srsEngine.getNextReviewText(this._level, card.char);
      const c = srsEngine.getCard(this._level, card.char);
      const streak = c.repetitions;
      srsInfo.textContent = nextText === 'New' ? '✨ New card' : `🔄 Streak: ${streak} · Next: ${nextText}`;
      srsInfo.style.display = '';
    } else if (srsInfo) {
      srsInfo.style.display = 'none';
    }
  }

  _updateSRSStats() {
    const statsEl = document.getElementById('fc-srs-stats');
    if (!statsEl) return;

    if (!this._srsMode) {
      statsEl.style.display = 'none';
      return;
    }

    const pool  = HSK_DATA[this._level] || [];
    const stats = srsEngine.getLevelStats(this._level, pool);
    statsEl.style.display = '';
    statsEl.innerHTML = `
      <span class="srs-stat srs-new">✨ ${stats.newCards} new</span>
      <span class="srs-stat srs-due">🔴 ${stats.due} due</span>
      <span class="srs-stat srs-rev">🔄 ${stats.reviewing} learning</span>
      <span class="srs-stat srs-done">✅ ${stats.mastered} mastered</span>
    `;
  }

  _next() {
    if (this._index < this._cards.length - 1) { this._index++; this._updateCard(); }
  }

  _prev() {
    if (this._index > 0) { this._index--; this._updateCard(); }
  }

  // ---- Event wiring ----

  _bindEvents() {
    document.getElementById('fc-level-tabs').addEventListener('click', e => {
      if (e.target.classList.contains('tab')) {
        this._reset(parseInt(e.target.getAttribute('data-level')));
      }
    });

    const fcEl = document.getElementById('flashcard');

    // Flip on click → auto-speak when revealed
    fcEl.addEventListener('click', () => {
      fcEl.classList.toggle('flipped');
      if (fcEl.classList.contains('flipped')) {
        const card = this._cards[this._index];
        if (card) speechService.speak(card.char);
      }
    });

    // Flip on space / enter
    fcEl.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); fcEl.click(); }
    });

    document.getElementById('fc-next').addEventListener('click',    () => this._next());
    document.getElementById('fc-prev').addEventListener('click',    () => this._prev());
    document.getElementById('fc-shuffle').addEventListener('click', () => this._reset(this._level));
    document.getElementById('fc-restart').addEventListener('click', () => { this._index = 0; this._updateCard(); });

    // SRS mode toggle
    document.getElementById('fc-srs-toggle')?.addEventListener('change', e => {
      this._srsMode = e.target.checked;
      this._reset(this._level);
    });

    // Rating buttons → SRS review
    ['fc-easy', 'fc-ok', 'fc-hard'].forEach(id => {
      document.getElementById(id).addEventListener('click', () => {
        const word = this._cards[this._index];
        if (!word) return;

        if (this._srsMode) {
          const quality = id === 'fc-easy' ? 5 : id === 'fc-ok' ? 3 : 1;
          srsEngine.review(this._level, word.char, quality);
        }

        if (id === 'fc-easy') progressStore.markLearned(this._level, word.char);
        this._next();
        this._updateSRSStats();
      });
    });

    // On-demand speak — stop propagation so it doesn't flip the card
    document.getElementById('fc-speak').addEventListener('click', e => {
      e.stopPropagation();
      const card = this._cards[this._index];
      if (card) speechService.speak(card.char);
    });
  }
}
