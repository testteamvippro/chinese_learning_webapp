import { View }  from './View.js';
import { escHtml } from '../core/utils.js';

export class ChengyuView extends View {
  constructor() {
    super('chengyu');
    this._bindEvents();
  }

  // ---- Lifecycle ----

  onActivate() {
    this._render('');
  }

  // ---- Rendering ----

  _render(query) {
    const q    = (query || '').trim().toLowerCase();
    const data = q
      ? CHENGYU_DATA.filter(c =>
          c.chars.includes(q) ||
          c.pinyin.toLowerCase().includes(q) ||
          c.meaning.toLowerCase().includes(q) ||
          c.literal.toLowerCase().includes(q)
        )
      : CHENGYU_DATA;

    const grid = document.getElementById('chengyu-grid');

    if (!data.length) {
      grid.innerHTML =
        '<p style="color:var(--text-muted);grid-column:1/-1">No idioms found.</p>';
      return;
    }

    grid.innerHTML = data.map(c => `
      <div class="cy-card">
        <div class="cy-chars">${escHtml(c.chars)}</div>
        <div class="cy-pinyin">${escHtml(c.pinyin)}</div>
        <div class="cy-literal">Literal: ${escHtml(c.literal)}</div>
        <div class="cy-meaning">${escHtml(c.meaning)}</div>
        <div class="cy-origin">${escHtml(c.origin)}</div>
        <div class="cy-example">${escHtml(c.example)}</div>
        <div class="cy-example-en">${escHtml(c.exampleMeaning)}</div>
        <div class="cy-level"><span class="level-badge l${c.level}">HSK ${c.level}</span></div>
      </div>`).join('');
  }

  // ---- Event wiring ----

  _bindEvents() {
    document.getElementById('chengyu-search').addEventListener('input', e => {
      this._render(e.target.value);
    });
  }
}
