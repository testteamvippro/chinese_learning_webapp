// =============================================
//  TONE TRAINER VIEW  — Dedicated tone practice
//
//  Exercises: identify the tone of a character,
//  pick the correct toned pinyin, minimal pairs.
//  Inspired by Skritter & Dong Chinese.
// =============================================

import { View } from './View.js';
import { speechService } from '../core/SpeechService.js';
import { gamificationStore } from '../core/GamificationStore.js';

// Tone mark reference for display
const TONE_INFO = [
  { num: 1, mark: 'ā', name: 'First tone',  desc: 'High level — flat and steady',    color: 'var(--t1)', example: '妈 mā' },
  { num: 2, mark: 'á', name: 'Second tone', desc: 'Rising — like asking a question',  color: 'var(--t2)', example: '麻 má' },
  { num: 3, mark: 'ǎ', name: 'Third tone',  desc: 'Dipping — low, then rises',       color: 'var(--t3)', example: '马 mǎ' },
  { num: 4, mark: 'à', name: 'Fourth tone', desc: 'Falling — sharp and short',        color: 'var(--t4)', example: '骂 mà' },
];

export class ToneTrainerView extends View {
  constructor() {
    super('tonetrainer');
    this._level = 1;
    this._mode = 'identify'; // 'identify' | 'pinyin' | 'listen'
    this._words = [];
    this._qIndex = 0;
    this._score = 0;
    this._total = 10;
    this._answered = false;
    this._current = null;
  }

  onActivate(params = {}) {
    if (params.level) this._level = params.level;
    this._bindTabs();
    this._bindModeSelector();
    this._bindStartBtn();
    this._showStart();
  }

  onDeactivate() {}

  // ---- Setup ----

  _bindTabs() {
    const tabs = this.el.querySelector('#tone-level-tabs');
    if (!tabs || tabs._bound) return;
    tabs._bound = true;
    tabs.addEventListener('click', e => {
      const btn = e.target.closest('[data-level]');
      if (!btn) return;
      tabs.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      this._level = parseInt(btn.dataset.level, 10);
    });
  }

  _bindModeSelector() {
    const root = this.el.querySelector('#tone-mode-selector');
    if (!root || root._bound) return;
    root._bound = true;
    root.addEventListener('click', e => {
      const btn = e.target.closest('[data-mode]');
      if (!btn) return;
      root.querySelectorAll('.tone-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this._mode = btn.dataset.mode;
    });
  }

  _bindStartBtn() {
    const btn = this.el.querySelector('#tone-start-btn');
    if (!btn || btn._bound) return;
    btn._bound = true;
    btn.addEventListener('click', () => this._startSession());
  }

  // ---- Screens ----

  _showStart() {
    this.el.querySelector('#tone-start-screen').classList.remove('hidden');
    this.el.querySelector('#tone-quiz-screen').classList.add('hidden');
    this.el.querySelector('#tone-result-screen').classList.add('hidden');
  }

  _startSession() {
    const all = this._getWordsWithTones(this._level);
    if (all.length < 4) return;

    this._shuffle(all);
    this._words = all.slice(0, Math.min(10, all.length));
    this._total = this._words.length;
    this._qIndex = 0;
    this._score = 0;

    this.el.querySelector('#tone-start-screen').classList.add('hidden');
    this.el.querySelector('#tone-quiz-screen').classList.remove('hidden');
    this.el.querySelector('#tone-result-screen').classList.add('hidden');

    this._showQuestion();
  }

  _showQuestion() {
    if (this._qIndex >= this._total) {
      this._showResult();
      return;
    }

    this._answered = false;
    this._current = this._words[this._qIndex];

    this.el.querySelector('#tone-q-counter').textContent = `Q ${this._qIndex + 1} / ${this._total}`;
    this.el.querySelector('#tone-q-score').textContent = `Score: ${this._score}`;
    this.el.querySelector('#tone-progress-fill').style.width = ((this._qIndex) / this._total * 100) + '%';

    const bodyEl = this.el.querySelector('#tone-question-body');
    const optionsEl = this.el.querySelector('#tone-options');
    const feedbackEl = this.el.querySelector('#tone-feedback');
    feedbackEl.classList.add('hidden');
    feedbackEl.textContent = '';
    optionsEl.innerHTML = '';

    if (this._mode === 'identify') {
      this._renderIdentifyQuestion(bodyEl, optionsEl);
    } else if (this._mode === 'pinyin') {
      this._renderPinyinQuestion(bodyEl, optionsEl);
    } else {
      this._renderListenQuestion(bodyEl, optionsEl);
    }
  }

  // ---- Question Types ----

  _renderIdentifyQuestion(bodyEl, optionsEl) {
    bodyEl.innerHTML = `
      <div class="tone-q-char">${this._current.char}</div>
      <div class="tone-q-prompt">What tone is this character?</div>`;

    TONE_INFO.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'tone-option-btn';
      btn.innerHTML = `<span class="tone-opt-num" style="color:${t.color}">Tone ${t.num}</span><span class="tone-opt-mark">${t.mark}</span>`;
      btn.dataset.tone = t.num;
      btn.addEventListener('click', () => this._checkAnswer(btn, t.num, this._current.tone, optionsEl));
      optionsEl.appendChild(btn);
    });
  }

  _renderPinyinQuestion(bodyEl, optionsEl) {
    bodyEl.innerHTML = `
      <div class="tone-q-char">${this._current.char}</div>
      <div class="tone-q-prompt">Select the correct pinyin with tone marks</div>`;

    const correct = this._current.pinyin;
    const options = this._generatePinyinOptions(this._current);

    options.forEach(py => {
      const btn = document.createElement('button');
      btn.className = 'tone-option-btn tone-pinyin-opt';
      btn.textContent = py;
      btn.dataset.pinyin = py;
      btn.addEventListener('click', () => {
        if (this._answered) return;
        this._answered = true;
        const isCorrect = py === correct;
        optionsEl.querySelectorAll('.tone-option-btn').forEach(b => {
          if (b.dataset.pinyin === correct) b.classList.add('correct');
          else b.classList.add('wrong');
          b.disabled = true;
        });
        btn.classList.add(isCorrect ? 'correct' : 'wrong');
        this._recordAnswer(isCorrect);
      });
      optionsEl.appendChild(btn);
    });
  }

  _renderListenQuestion(bodyEl, optionsEl) {
    bodyEl.innerHTML = `
      <div class="tone-q-char" style="font-size:3rem;cursor:pointer" id="tone-play-btn">🔊</div>
      <div class="tone-q-prompt">Listen and identify the tone</div>`;

    this.el.querySelector('#tone-play-btn').addEventListener('click', () => {
      speechService.speak(this._current.char, 'zh-CN', 0.6);
    });

    // Auto-play
    setTimeout(() => speechService.speak(this._current.char, 'zh-CN', 0.6), 300);

    TONE_INFO.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'tone-option-btn';
      btn.innerHTML = `<span class="tone-opt-num" style="color:${t.color}">Tone ${t.num}</span><span class="tone-opt-desc">${t.desc}</span>`;
      btn.dataset.tone = t.num;
      btn.addEventListener('click', () => this._checkAnswer(btn, t.num, this._current.tone, optionsEl));
      optionsEl.appendChild(btn);
    });
  }

  _checkAnswer(btn, selected, correct, optionsEl) {
    if (this._answered) return;
    this._answered = true;

    const isCorrect = selected === correct;
    optionsEl.querySelectorAll('.tone-option-btn').forEach(b => {
      const t = parseInt(b.dataset.tone, 10);
      if (t === correct) b.classList.add('correct');
      else b.classList.add('wrong');
      b.disabled = true;
    });
    btn.classList.add(isCorrect ? 'correct' : 'wrong');

    this._recordAnswer(isCorrect);
  }

  _recordAnswer(isCorrect) {
    const feedbackEl = this.el.querySelector('#tone-feedback');
    if (isCorrect) {
      this._score++;
      feedbackEl.textContent = `✅ Correct! ${this._current.char} (${this._current.pinyin}) — Tone ${this._current.tone}`;
      feedbackEl.className = 'tone-feedback correct';
    } else {
      feedbackEl.textContent = `❌ Answer: ${this._current.char} (${this._current.pinyin}) — Tone ${this._current.tone}`;
      feedbackEl.className = 'tone-feedback wrong';
    }
    feedbackEl.classList.remove('hidden');

    setTimeout(() => {
      if (!this._active) return;
      this._qIndex++;
      this._showQuestion();
    }, 1800);
  }

  _showResult() {
    this.el.querySelector('#tone-quiz-screen').classList.add('hidden');
    const resultEl = this.el.querySelector('#tone-result-screen');
    resultEl.classList.remove('hidden');

    const pct = Math.round((this._score / this._total) * 100);
    let grade, msg;
    if (pct === 100) { grade = '🏆'; msg = 'Perfect tones! You have an excellent ear!'; }
    else if (pct >= 80) { grade = '🎵'; msg = 'Great tone awareness! Keep polishing!'; }
    else if (pct >= 60) { grade = '👍'; msg = 'Good progress! Tones take time to master.'; }
    else { grade = '💪'; msg = 'Keep practicing! Tone mastery is a marathon, not a sprint.'; }

    resultEl.innerHTML = `
      <div class="result-box">
        <div class="result-score">${grade} ${this._score} / ${this._total} <small>(${pct}%)</small></div>
        <div class="result-msg">${msg}</div>
        <div style="margin-top:1.5rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" id="tone-retry">Try Again</button>
          <button class="btn btn-outline" id="tone-back">Change Mode</button>
        </div>
      </div>`;

    resultEl.querySelector('#tone-retry').addEventListener('click', () => this._startSession());
    resultEl.querySelector('#tone-back').addEventListener('click', () => this._showStart());

    this.el.querySelector('#tone-progress-fill').style.width = '100%';
    gamificationStore.recordToneSessionComplete();
  }

  // ---- Helpers ----

  _getWordsWithTones(level) {
    const data = window.HSK_DATA?.[level] || [];
    return data.filter(w => w.tone >= 1 && w.tone <= 4 && w.char && w.pinyin);
  }

  _generatePinyinOptions(word) {
    // Generate 4 pinyin variants with different tone marks
    const base = this._stripTones(word.pinyin);
    const toneMarks = ['ā', 'á', 'ǎ', 'à'];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'ü'];
    const options = [word.pinyin];
    const usedTones = new Set([word.tone]);

    for (let t = 1; t <= 4 && options.length < 4; t++) {
      if (usedTones.has(t)) continue;
      usedTones.add(t);
      // Simple approach: replace the first vowel with toned version
      let variant = base;
      for (const v of vowels) {
        const idx = base.indexOf(v);
        if (idx !== -1) {
          const toned = this._addTone(v, t);
          variant = base.slice(0, idx) + toned + base.slice(idx + 1);
          break;
        }
      }
      if (variant !== base) options.push(variant);
    }

    // Fill with random words if needed
    while (options.length < 4) {
      const pool = this._getWordsWithTones(this._level);
      const rw = pool[Math.floor(Math.random() * pool.length)];
      if (rw && !options.includes(rw.pinyin)) options.push(rw.pinyin);
      else break;
    }

    this._shuffle(options);
    return options;
  }

  _stripTones(pinyin) {
    const map = {
      'ā':'a','á':'a','ǎ':'a','à':'a',
      'ē':'e','é':'e','ě':'e','è':'e',
      'ī':'i','í':'i','ǐ':'i','ì':'i',
      'ō':'o','ó':'o','ǒ':'o','ò':'o',
      'ū':'u','ú':'u','ǔ':'u','ù':'u',
      'ǖ':'ü','ǘ':'ü','ǚ':'ü','ǜ':'ü'
    };
    return pinyin.replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/g, m => map[m] || m);
  }

  _addTone(vowel, tone) {
    const tones = {
      'a': ['ā','á','ǎ','à'],
      'e': ['ē','é','ě','è'],
      'i': ['ī','í','ǐ','ì'],
      'o': ['ō','ó','ǒ','ò'],
      'u': ['ū','ú','ǔ','ù'],
      'ü': ['ǖ','ǘ','ǚ','ǜ'],
    };
    return tones[vowel]?.[tone - 1] || vowel;
  }

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
