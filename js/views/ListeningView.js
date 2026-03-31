// =============================================
//  LISTENING VIEW  — Audio-based word identification
//
//  Plays a Chinese word/phrase via Web Speech API,
//  then shows 4 multiple-choice options.
//  Inspired by ChineseClass101 & TrainChinese.
// =============================================

import { View } from './View.js';
import { speechService } from '../core/SpeechService.js';
import { gamificationStore } from '../core/GamificationStore.js';

export class ListeningView extends View {
  constructor() {
    super('listening');
    this._level = 1;
    this._words = [];
    this._current = null;
    this._qIndex = 0;
    this._score = 0;
    this._total = 10;
    this._answered = false;
    this._mode = 'meaning'; // 'meaning' or 'character'
  }

  onActivate(params = {}) {
    if (params.level) this._level = params.level;
    this._bindTabs();
    this._bindButtons();
    this._showStart();
  }

  onDeactivate() {}

  // ---- Tab handling ----

  _bindButtons() {
    const startBtn = this.el.querySelector('#listening-start-btn');
    if (startBtn && !startBtn._bound) {
      startBtn._bound = true;
      startBtn.addEventListener('click', () => this._startQuiz());
    }
    const replayBtn = this.el.querySelector('#listening-replay');
    if (replayBtn && !replayBtn._bound) {
      replayBtn._bound = true;
      replayBtn.addEventListener('click', () => {
        if (this._current) speechService.speak(this._current.char, 'zh-CN', 0.75);
      });
    }
  }

  _bindTabs() {
    const tabs = this.el.querySelector('#listening-level-tabs');
    if (!tabs || tabs._bound) return;
    tabs._bound = true;
    tabs.addEventListener('click', e => {
      const btn = e.target.closest('[data-level]');
      if (!btn) return;
      tabs.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      this._level = parseInt(btn.dataset.level, 10);
      this._showStart();
    });
  }

  // ---- Screens ----

  _showStart() {
    const startEl = this.el.querySelector('#listening-start');
    const quizEl = this.el.querySelector('#listening-quiz');
    const resultEl = this.el.querySelector('#listening-result');
    startEl.classList.remove('hidden');
    quizEl.classList.add('hidden');
    resultEl.classList.add('hidden');
  }

  _startQuiz() {
    this._words = this._getWords(this._level);
    if (this._words.length < 4) return;
    this._qIndex = 0;
    this._score = 0;
    this._total = Math.min(10, this._words.length);
    this._shuffle(this._words);
    this._words = this._words.slice(0, this._total);

    const startEl = this.el.querySelector('#listening-start');
    const quizEl = this.el.querySelector('#listening-quiz');
    const resultEl = this.el.querySelector('#listening-result');
    startEl.classList.add('hidden');
    quizEl.classList.remove('hidden');
    resultEl.classList.add('hidden');

    this._showQuestion();
  }

  _showQuestion() {
    if (this._qIndex >= this._total) {
      this._showResult();
      return;
    }

    this._answered = false;
    this._current = this._words[this._qIndex];

    // Counter
    this.el.querySelector('#listening-counter').textContent = `Q ${this._qIndex + 1} / ${this._total}`;
    this.el.querySelector('#listening-score').textContent = `Score: ${this._score}`;

    // Progress bar
    const pct = ((this._qIndex) / this._total) * 100;
    this.el.querySelector('#listening-progress-fill').style.width = pct + '%';

    // Play audio
    this.el.querySelector('#listening-char-display').textContent = '🔊';
    this.el.querySelector('#listening-hint').textContent = 'Listen carefully, then choose the correct answer';

    // Generate options
    const optionsEl = this.el.querySelector('#listening-options');
    optionsEl.innerHTML = '';
    const feedbackEl = this.el.querySelector('#listening-feedback');
    feedbackEl.classList.add('hidden');
    feedbackEl.textContent = '';

    const allWords = this._getWords(this._level);
    const options = this._generateOptions(this._current, allWords);

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = this._mode === 'meaning' ? opt.meaning : opt.char;
      btn.dataset.char = opt.char;
      btn.addEventListener('click', () => this._handleAnswer(btn, opt));
      optionsEl.appendChild(btn);
    });

    // Auto-play audio
    setTimeout(() => {
      speechService.speak(this._current.char, 'zh-CN', 0.75);
    }, 300);
  }

  _handleAnswer(btn, selected) {
    if (this._answered) return;
    this._answered = true;

    const correct = selected.char === this._current.char;
    const feedbackEl = this.el.querySelector('#listening-feedback');
    const optionsEl = this.el.querySelector('#listening-options');

    // Highlight all buttons
    optionsEl.querySelectorAll('.quiz-option').forEach(b => {
      const isCorrect = b.dataset.char === this._current.char;
      b.classList.add(isCorrect ? 'correct' : 'wrong');
      b.disabled = true;
    });
    btn.classList.add(correct ? 'correct' : 'wrong');

    if (correct) {
      this._score++;
      gamificationStore.recordQuizCorrect();
      feedbackEl.textContent = `✅ Correct! ${this._current.char} (${this._current.pinyin}) — ${this._current.meaning}`;
      feedbackEl.className = 'listening-feedback correct';
    } else {
      feedbackEl.textContent = `❌ The answer was: ${this._current.char} (${this._current.pinyin}) — ${this._current.meaning}`;
      feedbackEl.className = 'listening-feedback wrong';
    }
    feedbackEl.classList.remove('hidden');

    // Reveal the character
    this.el.querySelector('#listening-char-display').textContent = this._current.char;

    // Auto-advance
    setTimeout(() => {
      if (!this._active) return;
      this._qIndex++;
      this._showQuestion();
    }, 2200);
  }

  _showResult() {
    const quizEl = this.el.querySelector('#listening-quiz');
    const resultEl = this.el.querySelector('#listening-result');
    quizEl.classList.add('hidden');
    resultEl.classList.remove('hidden');

    const pct = Math.round((this._score / this._total) * 100);
    let grade, msg;
    if (pct === 100) { grade = '🏆'; msg = 'Perfect listening! Your ears are finely tuned!'; }
    else if (pct >= 80) { grade = '🌟'; msg = 'Excellent! You have strong listening skills!'; }
    else if (pct >= 60) { grade = '👍'; msg = 'Good work! Keep practicing to sharpen your ears.'; }
    else if (pct >= 40) { grade = '📈'; msg = 'Getting there! Regular listening practice will help.'; }
    else { grade = '💪'; msg = 'Keep it up! Listening improves with daily practice.'; }

    resultEl.innerHTML = `
      <div class="result-box">
        <div class="result-score">${grade} ${this._score} / ${this._total} <small>(${pct}%)</small></div>
        <div class="result-msg">${msg}</div>
        <div style="margin-top:1.5rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" id="listening-retry">Try Again</button>
          <button class="btn btn-outline" id="listening-back">Change Mode</button>
        </div>
      </div>`;

    resultEl.querySelector('#listening-retry').addEventListener('click', () => this._startQuiz());
    resultEl.querySelector('#listening-back').addEventListener('click', () => this._showStart());

    // Progress bar full
    this.el.querySelector('#listening-progress-fill').style.width = '100%';

    gamificationStore.recordListeningComplete();
  }

  // ---- Helpers ----

  _getWords(level) {
    const data = window.HSK_DATA?.[level] || [];
    // Filter to single characters or short words that work well for audio
    return data.filter(w => w.char && w.pinyin && w.meaning);
  }

  _generateOptions(correct, pool) {
    const options = [correct];
    const used = new Set([correct.char]);
    const filtered = pool.filter(w => !used.has(w.char));
    this._shuffle(filtered);
    for (const w of filtered) {
      if (options.length >= 4) break;
      if (!used.has(w.char)) {
        options.push(w);
        used.add(w.char);
      }
    }
    this._shuffle(options);
    return options;
  }

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
