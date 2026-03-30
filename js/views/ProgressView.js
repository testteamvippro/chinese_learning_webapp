import { View }          from './View.js';
import { progressStore } from '../core/ProgressStore.js';
import { eventBus }      from '../core/EventBus.js';

const LEVEL_NAMES = [
  'Beginner', 'Elementary', 'Pre-Intermediate',
  'Intermediate', 'Upper-Intermediate', 'Advanced',
  'Academic', 'Expert', 'Master',
];

export class ProgressView extends View {
  constructor() {
    super('progress');
    this._unsubs = [];
    this._bindEvents();
  }

  // ---- Lifecycle ----

  onActivate() {
    this._render();
    // Subscribe to live updates while view is active
    this._unsubs.push(
      eventBus.on('word:learned', () => { if (this._active) this._render(); })
    );
  }

  onDeactivate() {
    // Clean up subscriptions to prevent memory leaks
    this._unsubs.forEach(fn => fn());
    this._unsubs = [];
  }

  // ---- Rendering ----

  _render() {
    let totalWords = 0;
    Object.values(HSK_DATA).forEach(d => (totalWords += d.length));
    const learnedWords = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
      (sum, lv) => sum + progressStore.getLevelCount(lv), 0
    );

    document.getElementById('progress-summary').innerHTML = `
      <div class="progress-stat">
        <div class="stat-num">${learnedWords}</div>
        <div class="stat-label">Words Learned</div>
      </div>
      <div class="progress-stat">
        <div class="stat-num">${totalWords - learnedWords}</div>
        <div class="stat-label">Remaining</div>
      </div>
      <div class="progress-stat">
        <div class="stat-num">${totalWords > 0 ? Math.round(learnedWords / totalWords * 100) : 0}%</div>
        <div class="stat-label">Total Progress</div>
      </div>`;

    document.getElementById('progress-levels').innerHTML = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(lv => {
      const total = (HSK_DATA[lv] || []).length;
      const done  = progressStore.getLevelCount(lv);
      const pct   = total ? Math.round(done / total * 100) : 0;
      return `
        <div class="progress-level-row plr-l${lv}">
          <div class="plr-header">
            <span class="level-badge l${lv}">HSK ${lv}</span>
            <span class="plr-name">${LEVEL_NAMES[lv - 1]}</span>
            <span class="plr-count">${done} / ${total} words · ${pct}%</span>
          </div>
          <div class="plr-bar-bg">
            <div class="plr-bar-fill" style="width:${pct}%"></div>
          </div>
        </div>`;
    }).join('');
  }

  // ---- Event wiring ----

  _bindEvents() {
    document.getElementById('reset-progress').addEventListener('click', () => {
      if (confirm('Reset all progress? This cannot be undone.')) {
        progressStore.reset();
      }
    });

    // Re-render whenever progress is reset (whether or not this view is active)
    eventBus.on('progress:reset', () => {
      if (this._active) this._render();
    });
  }
}
