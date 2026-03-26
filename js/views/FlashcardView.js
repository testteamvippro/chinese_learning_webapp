import { View }          from './View.js';
import { progressStore } from '../core/ProgressStore.js';
import { speechService } from '../core/SpeechService.js';
import { escHtml, shuffle, setActiveTab } from '../core/utils.js';

export class FlashcardView extends View {
  constructor() {
    super('flashcards');
    this._level = 1;
    this._cards = [];
    this._index = 0;
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
    this._cards = shuffle([...HSK_DATA[level]]);
    this._index = 0;
    this._updateCard();
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

    ['fc-easy', 'fc-ok', 'fc-hard'].forEach(id => {
      document.getElementById(id).addEventListener('click', () => {
        const word = this._cards[this._index];
        if (id === 'fc-easy') progressStore.markLearned(this._level, word.char);
        this._next();
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
