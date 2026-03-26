import { View }          from './View.js';
import { speechService } from '../core/SpeechService.js';
import { escHtml, shuffle, setActiveTab } from '../core/utils.js';

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
    const resize = () => {
      const wrap = this._canvas.parentElement;
      const size = Math.min(wrap.clientWidth || 320, 480);
      this._canvas.width  = size;
      this._canvas.height = size;
      this.redraw();
    };
    resize();
    window.addEventListener('resize', resize);
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

  // ---- Load / navigate ----

  _loadLevel(level) {
    this._level = level;
    setActiveTab('writing-level-tabs', level);
    const pool = HSK_DATA[level] || [];
    this._cards = shuffle([...pool]).slice(0, 15);
    this._index = 0;
    this._done  = {};
    this._pad.clear();
    this._renderQueue();
    this._updateRefPanel();
  }

  _goTo(index) {
    this._index = index;
    this._pad.clear();
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

    queue.querySelectorAll('.wq-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        this._goTo(parseInt(chip.getAttribute('data-wi')));
      });
    });
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
}
