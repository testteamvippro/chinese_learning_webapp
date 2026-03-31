// =============================================
//  PLACEMENT TEST VIEW  — HSK Level Diagnostic
//
//  Quick adaptive quiz that samples from all HSK
//  levels to recommend the user's starting level.
//  Inspired by Dong Chinese level test.
// =============================================

import { View } from './View.js';
import { gamificationStore } from '../core/GamificationStore.js';

export class PlacementTestView extends View {
  constructor() {
    super('placement');
    this._questions = [];
    this._qIndex = 0;
    this._results = {};   // { level: { correct, total } }
    this._answered = false;
  }

  onActivate() {
    this._showIntro();
  }

  onDeactivate() {}

  // ---- Screens ----

  _showIntro() {
    const root = this.el.querySelector('#placement-root');
    root.innerHTML = `
      <div class="placement-intro">
        <div class="placement-icon">🎯</div>
        <h3>HSK Level Placement Test</h3>
        <p>Answer 30 questions across all HSK levels. We'll analyze your results and recommend the best starting level for you.</p>
        <div class="placement-info-grid">
          <div class="placement-info-item">
            <span class="pi-icon">⏱️</span>
            <span>~5 minutes</span>
          </div>
          <div class="placement-info-item">
            <span class="pi-icon">📊</span>
            <span>30 questions</span>
          </div>
          <div class="placement-info-item">
            <span class="pi-icon">📈</span>
            <span>HSK 1–9 coverage</span>
          </div>
        </div>
        <p class="placement-note">Don't worry if you don't know an answer — just pick your best guess. The test adapts to your level.</p>
        <button class="btn btn-primary" id="placement-start-btn">Start Placement Test &nbsp;开始测试</button>
      </div>`;

    root.querySelector('#placement-start-btn').addEventListener('click', () => this._startTest());
  }

  _startTest() {
    this._questions = this._buildQuestions();
    this._qIndex = 0;
    this._results = {};

    for (let l = 1; l <= 9; l++) {
      this._results[l] = { correct: 0, total: 0 };
    }

    this._showQuestion();
  }

  _showQuestion() {
    if (this._qIndex >= this._questions.length) {
      this._showResults();
      return;
    }

    this._answered = false;
    const q = this._questions[this._qIndex];
    const root = this.el.querySelector('#placement-root');
    const pct = (this._qIndex / this._questions.length * 100);

    root.innerHTML = `
      <div class="placement-quiz">
        <div class="placement-topbar">
          <span>Q ${this._qIndex + 1} / ${this._questions.length}</span>
          <div class="placement-progress-bar"><div class="placement-progress-fill" style="width:${pct}%"></div></div>
          <span class="placement-level-badge">HSK ${q.level}</span>
        </div>
        <div class="placement-q-body">
          <div class="placement-q-char">${q.char}</div>
          <div class="placement-q-prompt">${q.prompt}</div>
        </div>
        <div class="placement-options" id="placement-options"></div>
        <div class="placement-feedback hidden" id="placement-feedback"></div>
      </div>`;

    const optionsEl = root.querySelector('#placement-options');
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt.text;
      btn.dataset.correct = opt.correct ? '1' : '0';
      btn.addEventListener('click', () => this._handleAnswer(btn, opt, q, optionsEl));
      optionsEl.appendChild(btn);
    });
  }

  _handleAnswer(btn, opt, q, optionsEl) {
    if (this._answered) return;
    this._answered = true;

    this._results[q.level].total++;
    if (opt.correct) this._results[q.level].correct++;

    const feedbackEl = this.el.querySelector('#placement-feedback');
    optionsEl.querySelectorAll('.quiz-option').forEach(b => {
      if (b.dataset.correct === '1') b.classList.add('correct');
      else b.classList.add('wrong');
      b.disabled = true;
    });

    if (opt.correct) {
      feedbackEl.textContent = `✅ Correct!`;
      feedbackEl.className = 'placement-feedback correct';
    } else {
      feedbackEl.textContent = `❌ The answer was: ${q.answer}`;
      feedbackEl.className = 'placement-feedback wrong';
    }
    feedbackEl.classList.remove('hidden');

    setTimeout(() => {
      if (!this._active) return;
      this._qIndex++;
      this._showQuestion();
    }, 1500);
  }

  _showResults() {
    const recommended = this._calculateLevel();
    const root = this.el.querySelector('#placement-root');

    // Build breakdown
    let breakdownHTML = '';
    for (let l = 1; l <= 9; l++) {
      const r = this._results[l];
      if (r.total === 0) continue;
      const pct = Math.round((r.correct / r.total) * 100);
      const barColor = pct >= 70 ? 'var(--success)' : pct >= 40 ? 'var(--warn)' : 'var(--danger)';
      breakdownHTML += `
        <div class="placement-breakdown-row">
          <span class="pb-level">HSK ${l}</span>
          <div class="pb-bar-bg"><div class="pb-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
          <span class="pb-score">${r.correct}/${r.total} (${pct}%)</span>
        </div>`;
    }

    root.innerHTML = `
      <div class="placement-result">
        <div class="placement-result-icon">🎯</div>
        <h3>Your Recommended Level</h3>
        <div class="placement-recommended">
          <div class="placement-rec-badge">HSK ${recommended}</div>
          <div class="placement-rec-desc">${this._getLevelDesc(recommended)}</div>
        </div>
        <p class="placement-rec-note">${this._getRecommendation(recommended)}</p>
        <h4 style="margin-top:2rem;margin-bottom:1rem">Score Breakdown</h4>
        <div class="placement-breakdown">${breakdownHTML}</div>
        <div style="margin-top:2rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" data-view="lessons" data-level="${recommended}">Start HSK ${recommended} →</button>
          <button class="btn btn-outline" id="placement-retake">Retake Test</button>
        </div>
      </div>`;

    root.querySelector('#placement-retake').addEventListener('click', () => this._showIntro());

    // Make the "Start HSK X" button navigate
    root.querySelector('[data-view="lessons"]').addEventListener('click', (e) => {
      e.preventDefault();
      const { router } = window.__appRouter || {};
      // Fallback: trigger nav-link click behavior
      const evt = new CustomEvent('placement-navigate', { detail: { view: 'lessons', level: recommended } });
      document.dispatchEvent(evt);
    });

    gamificationStore.addXP(20, 'placement_test');
  }

  // ---- Question Builder ----

  _buildQuestions() {
    const questions = [];
    // Sample ~3-4 questions per level, weighted toward lower levels
    const perLevel = { 1:4, 2:4, 3:4, 4:4, 5:3, 6:3, 7:3, 8:3, 9:2 };

    for (let level = 1; level <= 9; level++) {
      const count = perLevel[level] || 2;
      const pool = (window.HSK_DATA?.[level] || []).filter(w => w.char && w.meaning && w.pinyin);
      if (pool.length < 4) continue;

      this._shuffle(pool);
      const selected = pool.slice(0, count);

      for (const word of selected) {
        const q = this._makeQuestion(word, pool, level);
        if (q) questions.push(q);
      }
    }

    // Shuffle but keep general level order (easy → hard)
    // Group by level, shuffle within groups
    const grouped = {};
    for (const q of questions) {
      if (!grouped[q.level]) grouped[q.level] = [];
      grouped[q.level].push(q);
    }
    const result = [];
    for (let l = 1; l <= 9; l++) {
      if (grouped[l]) {
        this._shuffle(grouped[l]);
        result.push(...grouped[l]);
      }
    }
    return result.slice(0, 30);
  }

  _makeQuestion(word, pool, level) {
    const type = Math.random();
    if (type < 0.5) {
      // What does X mean?
      return this._meaningQuestion(word, pool, level);
    } else {
      // Which character means X?
      return this._charQuestion(word, pool, level);
    }
  }

  _meaningQuestion(word, pool, level) {
    const wrong = pool.filter(w => w.char !== word.char);
    this._shuffle(wrong);
    const distractors = wrong.slice(0, 3);
    if (distractors.length < 3) return null;

    const options = [
      { text: word.meaning, correct: true },
      ...distractors.map(d => ({ text: d.meaning, correct: false })),
    ];
    this._shuffle(options);

    return {
      level,
      char: word.char,
      prompt: 'What does this mean?',
      answer: word.meaning,
      options,
    };
  }

  _charQuestion(word, pool, level) {
    const wrong = pool.filter(w => w.char !== word.char);
    this._shuffle(wrong);
    const distractors = wrong.slice(0, 3);
    if (distractors.length < 3) return null;

    const options = [
      { text: word.char, correct: true },
      ...distractors.map(d => ({ text: d.char, correct: false })),
    ];
    this._shuffle(options);

    return {
      level,
      char: word.meaning,
      prompt: 'Which character matches this meaning?',
      answer: word.char,
      options,
    };
  }

  // ---- Level Calculation ----

  _calculateLevel() {
    // Find the highest level where user scores >= 60%
    let recommended = 1;
    for (let l = 1; l <= 9; l++) {
      const r = this._results[l];
      if (r.total > 0 && (r.correct / r.total) >= 0.6) {
        recommended = l;
      }
    }
    // Recommend one level above the highest "passed" level, capped at 9
    return Math.min(9, recommended + 1);
  }

  _getLevelDesc(level) {
    const descs = {
      1: 'Beginner — Basic greetings and numbers',
      2: 'Elementary — Simple conversations',
      3: 'Pre-Intermediate — Opinions and culture',
      4: 'Intermediate — Work and society',
      5: 'Upper-Intermediate — Literature and media',
      6: 'Advanced — Native-level vocabulary',
      7: 'Academic — Formal writing and debate',
      8: 'Expert — Classical references',
      9: 'Master — Highest proficiency',
    };
    return descs[level] || '';
  }

  _getRecommendation(level) {
    if (level <= 2) return 'Start from the basics to build a solid foundation. Focus on core vocabulary and tones.';
    if (level <= 4) return 'You have a good foundation! Time to expand your vocabulary and tackle more complex grammar.';
    if (level <= 6) return 'Impressive skills! Focus on reading passages, chengyu, and advanced grammar patterns.';
    return 'You\'re at an advanced level! Challenge yourself with academic texts and classical Chinese.';
  }

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
