import { View } from './View.js';
import { escHtml } from '../core/utils.js';

const CATEGORIES = [
  { key: 'all',         label: 'All Patterns' },
  { key: 'basic',       label: '基础 Basic' },
  { key: 'modal',       label: '情态 Modal' },
  { key: 'question',    label: '疑问 Questions' },
  { key: 'aspect',      label: '体 Aspect & Time' },
  { key: 'comparison',  label: '比较 Comparison' },
  { key: 'conditional', label: '条件 Conditional' },
  { key: 'concession',  label: '让步 Concession' },
  { key: 'emphasis',    label: '强调 Emphasis' },
  { key: 'passive',     label: '被动 Passive/把' },
  { key: 'complex',     label: '复合 Complex' },
];

export class SentencePatternsView extends View {
  constructor() {
    super('sentencepatterns');
    this._state = { query: '', category: 'all', level: 0, showPy: true };
  }

  onActivate() {
    this._render();
    this._bindEvents();
  }

  _filtered() {
    const { query, category, level } = this._state;
    const q = query.trim().toLowerCase();
    return (window.SENTENCE_PATTERNS_DATA || []).filter(p => {
      if (category !== 'all' && p.category !== category) return false;
      if (level > 0 && p.level !== level) return false;
      if (q) {
        const haystack = (p.title + p.pattern + p.explanation +
          p.sentences.map(s => s.cn + s.py + s.en).join(' ')).toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }

  _render() {
    const el = document.getElementById('sentencepatterns-root');
    if (!el) return;
    const filtered = this._filtered();
    el.innerHTML = `
      ${this._renderControls()}
      <div class="spt-stats">${filtered.length} pattern${filtered.length !== 1 ? 's' : ''} found</div>
      <div class="spt-grid">${filtered.map(p => this._renderCard(p)).join('') || '<p class="spt-empty">No patterns match your filters.</p>'}</div>
    `;
    this._restoreEvents();
  }

  _renderControls() {
    const { query, category, level, showPy } = this._state;
    const catPills = CATEGORIES.map(c =>
      `<button class="spt-cat-pill${category === c.key ? ' active' : ''}" data-cat="${escHtml(c.key)}">${escHtml(c.label)}</button>`
    ).join('');
    const levelBtns = [0,1,2,3,4,5].map(l =>
      `<button class="spt-level-btn${level === l ? ' active' : ''}" data-lv="${l}">${l === 0 ? 'All HSK' : 'HSK ' + l}</button>`
    ).join('');
    return `
      <div class="spt-controls">
        <div class="spt-search-wrap">
          <input type="text" id="spt-search" class="spt-search" placeholder="Search patterns, examples…" value="${escHtml(query)}" autocomplete="off">
          <button class="spt-py-toggle${showPy ? ' active' : ''}" id="spt-py-toggle" title="Toggle Pinyin">拼音</button>
        </div>
        <div class="spt-cat-row" id="spt-cat-row">${catPills}</div>
        <div class="spt-level-row" id="spt-level-row">${levelBtns}</div>
      </div>
    `;
  }

  _renderCard(p) {
    const { showPy } = this._state;
    const levelColor = ['','var(--success)','var(--primary)','var(--warn)','var(--accent)','var(--danger)'][p.level] || 'var(--muted)';
    const sentences = p.sentences.map(s => `
      <li class="spt-sentence-row">
        <span class="spt-cn">${escHtml(s.cn)}</span>
        ${showPy ? `<span class="spt-py">${escHtml(s.py)}</span>` : ''}
        <span class="spt-en">${escHtml(s.en)}</span>
      </li>
    `).join('');
    return `
      <div class="spt-card" id="${escHtml(p.id)}">
        <div class="spt-card-header">
          <span class="spt-pattern-badge">${escHtml(p.pattern)}</span>
          <span class="spt-level-badge" style="background:${levelColor}">HSK ${p.level}</span>
        </div>
        <div class="spt-card-title">${escHtml(p.title)}</div>
        <p class="spt-explanation">${escHtml(p.explanation)}</p>
        <ul class="spt-sentences">${sentences}</ul>
        ${p.tip ? `<div class="spt-tip">💡 ${escHtml(p.tip)}</div>` : ''}
      </div>
    `;
  }

  _bindEvents() {
    const searchEl = document.getElementById('spt-search');
    if (searchEl && !searchEl.dataset.bound) {
      searchEl.dataset.bound = '1';
      searchEl.addEventListener('input', e => {
        this._state.query = e.target.value;
        this._render();
      });
    }
    this._restoreEvents();
  }

  _restoreEvents() {
    document.getElementById('spt-cat-row')?.querySelectorAll('.spt-cat-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        this._state.category = btn.dataset.cat;
        this._render();
      });
    });
    document.getElementById('spt-level-row')?.querySelectorAll('.spt-level-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this._state.level = parseInt(btn.dataset.lv, 10);
        this._render();
      });
    });
    document.getElementById('spt-py-toggle')?.addEventListener('click', () => {
      this._state.showPy = !this._state.showPy;
      this._render();
    });
  }
}
