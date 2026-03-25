import { View }  from './View.js';
import { escHtml, setActiveTab } from '../core/utils.js';

export class GrammarView extends View {
  constructor() {
    super('grammar');
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
    setActiveTab('grammar-level-tabs', level);

    const list     = document.getElementById('grammar-list');
    const patterns = GRAMMAR_DATA[level] || [];

    if (!patterns.length) {
      list.innerHTML = '<p style="color:var(--text-muted)">No grammar data for this level yet.</p>';
      return;
    }

    list.innerHTML = patterns.map(g => `
      <div class="grammar-card">
        <div class="grammar-card-header">
          <span class="grammar-pattern">${escHtml(g.pattern)}</span>
          <span class="grammar-title">${escHtml(g.title)}</span>
        </div>
        <p class="grammar-explanation">${escHtml(g.explanation)}</p>
        <ul class="grammar-examples">
          ${g.examples.map(ex => `
            <li>
              <div class="cn">${escHtml(ex.cn)}</div>
              <div class="py">${escHtml(ex.py)}</div>
              <div class="en">${escHtml(ex.en)}</div>
            </li>`).join('')}
        </ul>
        ${g.tip ? `<div class="grammar-tip">${escHtml(g.tip)}</div>` : ''}
      </div>`).join('');
  }

  // ---- Event wiring ----

  _bindEvents() {
    document.getElementById('grammar-level-tabs').addEventListener('click', e => {
      if (e.target.classList.contains('tab')) {
        this._render(parseInt(e.target.getAttribute('data-level')));
      }
    });
  }
}
