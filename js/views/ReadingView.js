import { View }  from './View.js';
import { escHtml, setActiveTab } from '../core/utils.js';

export class ReadingView extends View {
  constructor() {
    super('reading');
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
    setActiveTab('reading-level-tabs', level);

    const list     = document.getElementById('reading-list');
    const passages = READING_DATA[level] || [];

    if (!passages.length) {
      list.innerHTML = '<p style="color:var(--text-muted)">No reading passages for this level yet.</p>';
      return;
    }

    // Use data-* attributes instead of inline onclick — event delegation handles clicks
    list.innerHTML = passages.map((p, pi) => `
      <div class="reading-card">
        <div class="reading-card-header">
          <span class="level-badge l${level}">HSK ${level}</span>
          <span class="reading-title">${escHtml(p.title)}</span>
        </div>
        <div class="reading-body">
          <div class="reading-cn">${escHtml(p.text)}</div>
          <div class="reading-controls">
            <button class="btn btn-sm rd-panel-btn"
                    data-target="py-${pi}"
                    data-show="Show Pinyin"
                    data-hide="Hide Pinyin">Show Pinyin</button>
            <button class="btn btn-sm rd-panel-btn"
                    data-target="tr-${pi}"
                    data-show="Show Translation"
                    data-hide="Hide Translation">Show Translation</button>
            <button class="btn btn-sm rd-qs-btn"
                    data-target="rq-${pi}"
                    data-show="Questions"
                    data-hide="Hide Questions">Questions</button>
          </div>
          <div id="py-${pi}" class="reading-pinyin-text">${escHtml(p.pinyin)}</div>
          <div id="tr-${pi}" class="reading-translation-text">${escHtml(p.translation)}</div>
          <div id="rq-${pi}" class="reading-questions" style="display:none">
            <h4>Comprehension Questions</h4>
            ${p.questions.map((q, qi) => `
              <div class="rq-item">
                <div class="rq-q">${escHtml(q.q)}
                  <span style="color:var(--text-muted);font-size:.8rem">(${escHtml(q.qEn)})</span>
                </div>
                <div id="rq-${pi}-${qi}" class="rq-a">
                  ${escHtml(q.a)}
                  <span style="color:var(--text-muted);font-size:.8rem">(${escHtml(q.aEn)})</span>
                </div>
                <span class="rq-reveal" data-answer-id="rq-${pi}-${qi}">▶ Show answer</span>
              </div>`).join('')}
          </div>
        </div>
      </div>`).join('');
  }

  // ---- Panel / answer toggles (via event delegation) ----

  _handlePanelBtn(btn) {
    const id      = btn.getAttribute('data-target');
    const el      = document.getElementById(id);
    if (!el) return;
    const visible = el.classList.toggle('visible');
    btn.textContent = visible
      ? btn.getAttribute('data-hide')
      : btn.getAttribute('data-show');
  }

  _handleQsBtn(btn) {
    const id      = btn.getAttribute('data-target');
    const el      = document.getElementById(id);
    if (!el) return;
    const visible = (el.style.display !== 'none');
    el.style.display = visible ? 'none' : 'block';
    btn.textContent  = visible
      ? btn.getAttribute('data-show')
      : btn.getAttribute('data-hide');
  }

  _handleAnswerReveal(span) {
    const id      = span.getAttribute('data-answer-id');
    const el      = document.getElementById(id);
    if (!el) return;
    const visible = el.classList.toggle('visible');
    span.textContent = visible ? '▼ Hide answer' : '▶ Show answer';
  }

  // ---- Event wiring ----

  _bindEvents() {
    document.getElementById('reading-level-tabs').addEventListener('click', e => {
      if (e.target.classList.contains('tab')) {
        this._render(parseInt(e.target.getAttribute('data-level')));
      }
    });

    // Event delegation on the reading list
    document.getElementById('reading-list').addEventListener('click', e => {
      const panelBtn = e.target.closest('.rd-panel-btn');
      if (panelBtn) { this._handlePanelBtn(panelBtn); return; }

      const qsBtn = e.target.closest('.rd-qs-btn');
      if (qsBtn) { this._handleQsBtn(qsBtn); return; }

      const revealSpan = e.target.closest('.rq-reveal');
      if (revealSpan) { this._handleAnswerReveal(revealSpan); }
    });
  }
}
