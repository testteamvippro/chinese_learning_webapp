import { View }          from './View.js';
import { speechService } from '../core/SpeechService.js';
import { escHtml, shuffle, setActiveTab } from '../core/utils.js';
import { gamificationStore } from '../core/GamificationStore.js';

// =============================================
//  CANVAS PAD  — encapsulates all drawing logic
//  Knows nothing about HSK data or view state.
// =============================================

class CanvasPad {
  /**
   * @param {string} canvasId
   */
  constructor(canvasId) {
    this._canvas    = document.getElementById(canvasId);
    this._ctx       = this._canvas?.getContext('2d') ?? null;
    this._history   = [];   // committed strokes (array of point arrays)
    this._live      = [];   // current in-progress stroke
    this._drawing   = false;
    this._ready     = false;
    this._resizeHandler = null;

    // Callbacks injected by WritingView
    this._getChar     = null;  // () => string — current character to trace
    this._onStrokeEnd = null;  // () => void   — called after each committed stroke
  }

  /**
   * Attach to DOM.  Safe to call multiple times;
   * resize/input listeners are only registered once.
   *
   * @param {() => string} getChar
   * @param {() => void}   onStrokeEnd
   */
  init(getChar, onStrokeEnd) {
    this._getChar     = getChar;
    this._onStrokeEnd = onStrokeEnd;

    if (this._ready) { this.redraw(); return; }
    this._ready = true;
    this._setupResize();
    this._bindEvents();
  }

  // ---- Public API ----

  /** Clear all strokes and redraw grid. */
  clear() {
    this._history = [];
    this._live    = [];
    this.redraw();
  }

  /**
   * Remove the last committed stroke.
   * @returns {boolean} true if no strokes remain after undo
   */
  undo() {
    this._history.pop();
    this.redraw();
    return this._history.length === 0;
  }

  /** @returns {number} */
  get strokeCount() { return this._history.length; }

  /** Redraw everything: grid → trace → committed strokes → live stroke. */
  redraw() {
    if (!this._ctx) return;
    const ctx  = this._ctx;
    const size = this._canvas.width;

    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);

    if (document.getElementById('writing-show-grid')?.checked !== false) {
      this._drawGrid(size);
    }
    if (document.getElementById('writing-show-trace')?.checked) {
      this._drawTraceChar(size);
    }

    ctx.strokeStyle = '#111827';
    ctx.lineWidth   = Math.max(2, size / 80);
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    this._history.forEach(path => this._drawPath(path));

    if (this._live.length > 1) {
      ctx.strokeStyle = '#1d4ed8';
      this._drawPath(this._live);
    }
  }

  // ---- Private drawing ----

  _drawPath(path) {
    if (path.length < 2) return;
    const ctx = this._ctx;
    ctx.beginPath();
    ctx.moveTo(path[0].x, path[0].y);
    for (let i = 1; i < path.length - 1; i++) {
      const mx = (path[i].x + path[i + 1].x) / 2;
      const my = (path[i].y + path[i + 1].y) / 2;
      ctx.quadraticCurveTo(path[i].x, path[i].y, mx, my);
    }
    ctx.lineTo(path[path.length - 1].x, path[path.length - 1].y);
    ctx.stroke();
  }

  _drawGrid(size) {
    const ctx = this._ctx;
    const mid = size / 2;
    ctx.save();

    // Outer border
    ctx.strokeStyle = '#93c5fd';
    ctx.setLineDash([]);
    ctx.lineWidth = 1.5;
    ctx.strokeRect(1, 1, size - 2, size - 2);

    // Centre cross + diagonals (dashed)
    ctx.strokeStyle = '#bfdbfe';
    ctx.lineWidth   = 1;
    ctx.setLineDash([5, 5]);
    [
      [[mid, 0],    [mid, size]],
      [[0, mid],    [size, mid]],
      [[0, 0],      [size, size]],
      [[size, 0],   [0, size]],
    ].forEach(([a, b]) => {
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.stroke();
    });

    ctx.restore();
  }

  _drawTraceChar(size) {
    const char = this._getChar?.();
    if (!char) return;
    const ctx = this._ctx;
    ctx.save();
    ctx.font          = `${size * 0.75}px "Noto Sans SC", serif`;
    ctx.textAlign     = 'center';
    ctx.textBaseline  = 'middle';
    ctx.fillStyle     = 'rgba(96, 165, 250, 0.18)';
    ctx.fillText(char, size / 2, size / 2);
    ctx.restore();
  }

  // ---- Input handling ----

  _getPos(clientX, clientY) {
    const rect   = this._canvas.getBoundingClientRect();
    return {
      x: (clientX - rect.left) * (this._canvas.width  / rect.width),
      y: (clientY - rect.top)  * (this._canvas.height / rect.height),
    };
  }

  _startStroke(clientX, clientY) {
    this._drawing = true;
    this._live    = [this._getPos(clientX, clientY)];
  }

  _continueStroke(clientX, clientY) {
    if (!this._drawing) return;
    this._live.push(this._getPos(clientX, clientY));
    this.redraw();
  }

  _endStroke() {
    if (!this._drawing) return;
    this._drawing = false;
    if (this._live.length > 1) {
      this._history.push([...this._live]);
      this._onStrokeEnd?.();
    }
    this._live = [];
    this.redraw();
  }

  _setupResize() {
    this._resizeHandler = () => {
      const wrap = this._canvas.parentElement;
      const size = Math.min(wrap.clientWidth || 360, 600);
      this._canvas.width  = size;
      this._canvas.height = size;
      this.redraw();
    };
    this._resizeHandler();
    window.addEventListener('resize', this._resizeHandler);
  }

  destroy() {
    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler);
      this._resizeHandler = null;
    }
  }

  _bindEvents() {
    const c = this._canvas;
    c.addEventListener('mousedown',  e => { e.preventDefault(); this._startStroke(e.clientX, e.clientY); });
    c.addEventListener('mousemove',  e => { if (this._drawing) this._continueStroke(e.clientX, e.clientY); });
    c.addEventListener('mouseup',    () => this._endStroke());
    c.addEventListener('mouseleave', () => this._endStroke());
    c.addEventListener('touchstart', e => { e.preventDefault(); const t = e.touches[0]; this._startStroke(t.clientX, t.clientY); },  { passive: false });
    c.addEventListener('touchmove',  e => { e.preventDefault(); const t = e.touches[0]; if (this._drawing) this._continueStroke(t.clientX, t.clientY); }, { passive: false });
    c.addEventListener('touchend',   () => this._endStroke());
  }
}

// =============================================
//  WRITING VIEW
// =============================================

export class WritingView extends View {
  constructor() {
    super('writing');
    this._level = 1;
    this._cards = [];
    this._index = 0;
    this._done  = {};   // { [cardIndex]: boolean }
    this._pad   = new CanvasPad('writing-canvas');
    this._bindEvents();
  }

  // ---- Lifecycle ----

  onActivate({ level } = {}) {
    if (level !== undefined) this._level = level;
    this._loadLevel(this._level);

    // init() is idempotent — safe to call every activation
    this._pad.init(
      () => this._cards[this._index]?.char,
      () => { this._done[this._index] = true; this._renderQueue(); this._updateStrokeCount(); }
    );
  }

  onDeactivate() {
    // CanvasPad resize handler is kept alive since the pad is reused
  }

  // ---- Load / navigate ----

  _loadLevel(level) {
    this._level = level;
    setActiveTab('writing-level-tabs', level);
    const pool = HSK_DATA[level] || [];
    this._cards = shuffle([...pool]).slice(0, 15);
    this._index = 0;
    this._done  = {};
    this._pad.clear();
    this._resetTeacher();
    this._renderQueue();
    this._updateRefPanel();
  }

  _goTo(index) {
    this._index = index;
    this._pad.clear();
    this._resetTeacher();
    this._updateRefPanel();
  }

  // ---- Rendering ----

  _updateRefPanel() {
    const card = this._cards[this._index];
    if (!card) return;

    const refChar = document.getElementById('writing-ref-char');
    const wasHidden = refChar.classList.contains('hidden');

    refChar.textContent = card.char;
    if (wasHidden) refChar.classList.add('hidden');

    document.getElementById('writing-ref-pinyin').textContent  = card.pinyin;
    document.getElementById('writing-ref-meaning').textContent = card.meaning;
    document.getElementById('writing-ref-strokes').textContent =
      this._pad.strokeCount > 0 ? `${this._pad.strokeCount} stroke${this._pad.strokeCount !== 1 ? 's' : ''} drawn` : '';
    document.getElementById('writing-counter').textContent     =
      `${this._index + 1} / ${this._cards.length}`;

    document.getElementById('writing-toggle-ref').textContent =
      wasHidden ? 'Show Reference' : 'Hide Reference';

    this._renderQueue();
  }

  _renderQueue() {
    const queue = document.getElementById('writing-queue');
    queue.innerHTML = this._cards.map((c, i) => {
      const active = i === this._index;
      const done   = this._done[i];
      return `<div class="wq-chip${active ? ' active' : ''}${done ? ' done' : ''}"
                   data-wi="${i}">${escHtml(c.char)}</div>`;
    }).join('');

    if (!queue.dataset.bound) {
      queue.dataset.bound = '1';
      queue.addEventListener('click', e => {
        const chip = e.target.closest('.wq-chip');
        if (chip) this._goTo(parseInt(chip.getAttribute('data-wi')));
      });
    }
  }

  // ---- Event wiring ----

  _updateStrokeCount() {
    const n = this._pad.strokeCount;
    document.getElementById('writing-ref-strokes').textContent =
      n > 0 ? `${n} stroke${n !== 1 ? 's' : ''} drawn` : '';
  }

  _bindEvents() {
    document.getElementById('writing-level-tabs').addEventListener('click', e => {
      if (e.target.classList.contains('tab')) {
        this._loadLevel(parseInt(e.target.getAttribute('data-level')));
      }
    });

    document.getElementById('writing-clear').addEventListener('click', () => {
      this._pad.clear();
      this._done[this._index] = false;
      this._renderQueue();
      this._updateStrokeCount();
      this._resetTeacher();
    });

    document.getElementById('writing-check').addEventListener('click', () => {
      this._checkWriting();
    });

    document.getElementById('writing-undo').addEventListener('click', () => {
      const empty = this._pad.undo();
      if (empty) { this._done[this._index] = false; this._renderQueue(); }
      this._updateStrokeCount();
    });

    document.getElementById('writing-toggle-ref').addEventListener('click', function () {
      const ref    = document.getElementById('writing-ref-char');
      const hidden = ref.classList.toggle('hidden');
      this.textContent = hidden ? 'Show Reference' : 'Hide Reference';
    });

    document.getElementById('writing-prev').addEventListener('click', () => {
      if (this._index > 0) this._goTo(this._index - 1);
    });
    document.getElementById('writing-next').addEventListener('click', () => {
      if (this._index < this._cards.length - 1) this._goTo(this._index + 1);
    });

    document.getElementById('writing-speak').addEventListener('click', () => {
      const card = this._cards[this._index];
      if (card) speechService.speak(card.char);
    });

    document.getElementById('writing-show-grid').addEventListener('change',
      () => this._pad.redraw());
    document.getElementById('writing-show-trace').addEventListener('change',
      () => this._pad.redraw());
  }

  // ---- Virtual Teacher ----

  _resetTeacher() {
    const msgEl  = document.getElementById('teacher-message');
    const scoreW = document.getElementById('teacher-score-wrap');
    const panel  = document.getElementById('writing-teacher');
    if (msgEl)  msgEl.innerHTML = 'Draw the character above, then tap <strong>Check Writing</strong> to receive feedback.';
    if (scoreW) scoreW.classList.add('hidden');
    if (panel)  panel.className = 'writing-teacher';
  }

  _checkWriting() {
    const canvas = this._pad._canvas;
    if (!canvas) return;
    if (this._pad.strokeCount === 0) {
      this._showTeacherFeedback(-1);
      return;
    }
    const card = this._cards[this._index];
    if (!card) return;
    const size = canvas.width;

    // Render reference character to an offscreen canvas
    const ref  = document.createElement('canvas');
    ref.width  = size;
    ref.height = size;
    const rctx = ref.getContext('2d');
    rctx.fillStyle = '#ffffff';
    rctx.fillRect(0, 0, size, size);
    rctx.font         = `${Math.round(size * 0.72)}px "Noto Sans SC", serif`;
    rctx.textAlign    = 'center';
    rctx.textBaseline = 'middle';
    rctx.fillStyle    = '#000000';
    rctx.fillText(card.char, size / 2, size / 2 + size * 0.03);

    const userCtx  = canvas.getContext('2d');
    const userData = userCtx.getImageData(0, 0, size, size).data;
    const refData  = rctx.getImageData(0, 0, size, size).data;

    // 8×8 grid coverage: check how many reference cells the user covered
    const CELLS   = 8;
    const cellPx  = Math.floor(size / CELLS);
    const minRef  = cellPx * cellPx * 0.04;   // ≥4% of cell must be dark = has reference ink
    const minUser = cellPx * cellPx * 0.008;  // ≥0.8% = user drew something here
    let refCells = 0, matchCells = 0;

    for (let row = 0; row < CELLS; row++) {
      for (let col = 0; col < CELLS; col++) {
        let rInk = 0, uInk = 0;
        for (let py = row * cellPx; py < (row + 1) * cellPx; py++) {
          for (let px = col * cellPx; px < (col + 1) * cellPx; px++) {
            const i = (py * size + px) * 4;
            if (refData[i]  < 128) rInk++;
            if (userData[i] < 128) uInk++;
          }
        }
        if (rInk > minRef) {
          refCells++;
          if (uInk > minUser) matchCells++;
        }
      }
    }

    const score = refCells > 0 ? Math.round(matchCells / refCells * 100) : 0;
    this._showTeacherFeedback(score);
    if (score > 0) gamificationStore.recordWritingPractice();
  }

  _showTeacherFeedback(score) {
    const msgEl  = document.getElementById('teacher-message');
    const scoreW = document.getElementById('teacher-score-wrap');
    const barEl  = document.getElementById('teacher-score-bar');
    const pctEl  = document.getElementById('teacher-score-pct');
    const panel  = document.getElementById('writing-teacher');

    if (score === -1) {
      msgEl.innerHTML = 'Please draw the character on the canvas first, then I can check your work!';
      scoreW.classList.add('hidden');
      panel.className = 'writing-teacher';
      return;
    }

    scoreW.classList.remove('hidden');
    pctEl.textContent = `${score}%`;
    requestAnimationFrame(() => { barEl.style.width = `${score}%`; });

    let msg, cls, barColor;
    if (score >= 80) {
      msg      = '🌟 <strong>Excellent!</strong> Your strokes cover the character very well. Outstanding work!';
      cls      = 'writing-teacher teacher-excellent';
      barColor = 'var(--success)';
    } else if (score >= 60) {
      msg      = '👍 <strong>Good job!</strong> Most of the character is well covered. A little more practice and you&#39;ll master it!';
      cls      = 'writing-teacher teacher-good';
      barColor = 'var(--warn)';
    } else if (score >= 35) {
      msg      = '✏️ <strong>Keep going!</strong> Several areas of the character are still missing. Try enabling <em>Trace mode</em> to see the ghost guide and trace over it.';
      cls      = 'writing-teacher teacher-fair';
      barColor = 'var(--warn)';
    } else {
      msg      = '📚 <strong>Needs more practice.</strong> Enable <em>Trace mode</em> to see the character guide, then carefully trace over each stroke.';
      cls      = 'writing-teacher teacher-poor';
      barColor = 'var(--danger)';
    }

    barEl.style.background = barColor;
    msgEl.innerHTML        = msg;
    panel.className        = cls;
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
