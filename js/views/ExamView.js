// =============================================
//  ExamView — Full Skills Exam
//  Tests: vocabulary meaning, character recognition,
//         pinyin reading, tone identification,
//         chengyu idioms, and grammar patterns.
// =============================================

import { View }           from './View.js';
import { speechService }  from '../core/SpeechService.js';
import { escHtml, shuffle } from '../core/utils.js';

const TYPE_LABELS = {
  'vocab-meaning': '📖 Meaning',
  'vocab-char':    '🀄 Character',
  'vocab-pinyin':  '🔤 Pinyin',
  'tone':          '🎵 Tone',
  'chengyu':       '📜 Chengyu',
  'grammar':       '✏️ Grammar',
};

export class ExamView extends View {
  constructor() {
    super('exam');
    this._level     = 1;
    this._questions = [];
    this._current   = 0;
    this._score     = 0;
    this._results   = [];
    this._bindEvents();
  }

  onActivate({ level } = {}) {
    if (level !== undefined) {
      this._level = +level;
      const sel = document.getElementById('exam-level-select');
      if (sel) sel.value = String(this._level);
    }
    this._showStart();
  }

  // ============================
  //  Screen transitions
  // ============================

  _showStart() {
    document.getElementById('exam-start-screen').classList.remove('hidden');
    document.getElementById('exam-question-screen').classList.add('hidden');
    document.getElementById('exam-result-screen').classList.add('hidden');
  }

  _start() {
    const level  = parseInt(document.getElementById('exam-level-select').value, 10);
    const count  = parseInt(document.getElementById('exam-q-count').value, 10);
    const skills = [...document.querySelectorAll('.exam-skill-cb:checked')].map(cb => cb.value);

    if (!skills.length) {
      alert('Please select at least one skill to test.');
      return;
    }

    this._level     = level;
    this._questions = this._buildQuestions(level, count, skills);

    if (this._questions.length < 1) {
      alert(`Not enough data for HSK ${level} to build exam questions. Try another level or different skills.`);
      return;
    }

    this._current = 0;
    this._score   = 0;
    this._results = [];

    document.getElementById('exam-start-screen').classList.add('hidden');
    document.getElementById('exam-result-screen').classList.add('hidden');
    document.getElementById('exam-question-screen').classList.remove('hidden');
    this._showQuestion();
  }

  // ============================
  //  Question builders
  // ============================

  _buildQuestions(level, total, skills) {
    const vocab   = [...(HSK_DATA[level] || [])];
    const cy      = [...(CHENGYU_DATA || [])];
    const grammar = [...(GRAMMAR_DATA[level] || [])];

    const perSkill = Math.ceil(total / skills.length);
    const all = [];

    for (const skill of skills) {
      switch (skill) {
        case 'vocab-meaning': all.push(...this._qVocabMeaning(vocab, perSkill));  break;
        case 'vocab-char':    all.push(...this._qVocabChar(vocab, perSkill));     break;
        case 'vocab-pinyin':  all.push(...this._qVocabPinyin(vocab, perSkill));   break;
        case 'tone':          all.push(...this._qTone(vocab, perSkill));          break;
        case 'chengyu':       all.push(...this._qChengyu(cy, perSkill));          break;
        case 'grammar':       all.push(...this._qGrammar(grammar, perSkill));     break;
      }
    }

    return shuffle(all).slice(0, total);
  }

  _qVocabMeaning(pool, n) {
    if (pool.length < 4) return [];
    return shuffle(pool).slice(0, n).map(w => {
      const dist = shuffle(pool.filter(x => x.char !== w.char)).slice(0, 3).map(x => x.meaning);
      return {
        type: 'vocab-meaning',
        char: w.char, pinyin: w.pinyin, emoji: w.emoji || '',
        correct: w.meaning,
        options: shuffle([w.meaning, ...dist]),
      };
    });
  }

  _qVocabChar(pool, n) {
    if (pool.length < 4) return [];
    return shuffle(pool).slice(0, n).map(w => {
      const dist = shuffle(pool.filter(x => x.char !== w.char)).slice(0, 3).map(x => x.char);
      return {
        type: 'vocab-char',
        meaning: w.meaning, emoji: w.emoji || '',
        correct: w.char,
        options: shuffle([w.char, ...dist]),
      };
    });
  }

  _qVocabPinyin(pool, n) {
    if (pool.length < 4) return [];
    return shuffle(pool).slice(0, n).map(w => {
      const dist = shuffle(pool.filter(x => x.char !== w.char)).slice(0, 3).map(x => x.pinyin);
      return {
        type: 'vocab-pinyin',
        char: w.char, meaning: w.meaning, emoji: w.emoji || '',
        correct: w.pinyin,
        options: shuffle([w.pinyin, ...dist]),
      };
    });
  }

  _qTone(pool, n) {
    const tonePool = pool.filter(w => w.tone);
    if (!tonePool.length) return [];
    const TONE_NAMES = ['', 'High level (ā)', 'Rising (á)', 'Dipping (ǎ)', 'Falling (à)', 'Neutral (a)'];
    return shuffle(tonePool).slice(0, n).map(w => {
      const correct = String(w.tone);
      const dists   = shuffle(['1','2','3','4','5'].filter(t => t !== correct)).slice(0, 3);
      return {
        type: 'tone',
        char: w.char, meaning: w.meaning,
        correct,
        options: shuffle([correct, ...dists]).map(t => ({
          value: t,
          label: `Tone ${t} — ${TONE_NAMES[parseInt(t, 10)] || t}`,
        })),
      };
    });
  }

  _qChengyu(cy, n) {
    if (cy.length < 4) return [];
    return shuffle(cy).slice(0, n).map(c => {
      const dist = shuffle(cy.filter(x => x.char !== c.char)).slice(0, 3).map(x => x.meaning);
      return {
        type: 'chengyu',
        char: c.char, pinyin: c.pinyin || '',
        correct: c.meaning,
        options: shuffle([c.meaning, ...dist]),
      };
    });
  }

  _qGrammar(grammar, n) {
    if (grammar.length < 4) return [];
    return shuffle(grammar).slice(0, n).map(g => {
      const dist = shuffle(grammar.filter(x => x.pattern !== g.pattern)).slice(0, 3).map(x => x.pattern);
      return {
        type: 'grammar',
        clue: g.desc || g.use || g.pattern,
        example: g.example || '',
        correct: g.pattern,
        options: shuffle([g.pattern, ...dist]),
      };
    });
  }

  // ============================
  //  Question display
  // ============================

  _showQuestion() {
    const q   = this._questions[this._current];
    const tot = this._questions.length;

    document.getElementById('exam-q-num').textContent      = `Q ${this._current + 1} / ${tot}`;
    document.getElementById('exam-score-live').textContent = `Score: ${this._score}`;
    document.getElementById('exam-progress-fill').style.width =
      `${((this._current / tot) * 100).toFixed(0)}%`;

    const fb = document.getElementById('exam-feedback');
    fb.className = 'exam-feedback hidden';
    fb.textContent = '';

    const badge = document.getElementById('exam-type-badge');
    badge.textContent = TYPE_LABELS[q.type] || q.type;
    badge.className   = `exam-type-badge etype-${q.type.replace('-', '_')}`;

    // Build question body HTML
    let body = '';
    if (q.emoji) body += `<div class="exam-emoji">${q.emoji}</div>`;

    switch (q.type) {
      case 'vocab-meaning':
        body += `<div class="exam-q-text">What does this character mean?</div>
                 <div class="exam-big-cn">${escHtml(q.char)}</div>
                 <div class="exam-sub-line">${escHtml(q.pinyin)}</div>`;
        break;
      case 'vocab-char':
        body += `<div class="exam-q-text">Which character matches this meaning?</div>
                 <div class="exam-meaning-display">"${escHtml(q.meaning)}"</div>`;
        break;
      case 'vocab-pinyin':
        body += `<div class="exam-q-text">What is the pinyin romanisation?</div>
                 <div class="exam-big-cn">${escHtml(q.char)}</div>
                 <div class="exam-sub-line">${escHtml(q.meaning)}</div>`;
        break;
      case 'tone':
        body += `<div class="exam-q-text">Which tone does this character use?</div>
                 <div class="exam-big-cn">${escHtml(q.char)}</div>
                 <div class="exam-sub-line">${escHtml(q.meaning)}</div>`;
        break;
      case 'chengyu':
        body += `<div class="exam-q-text">What does this chengyu (idiom) mean?</div>
                 <div class="exam-big-cn exam-big-cn--idiom">${escHtml(q.char)}</div>`;
        if (q.pinyin) body += `<div class="exam-sub-line">${escHtml(q.pinyin)}</div>`;
        break;
      case 'grammar':
        body += `<div class="exam-q-text">Which grammar pattern fits this description?</div>
                 <div class="exam-clue">"${escHtml(q.clue)}"</div>`;
        if (q.example) body += `<div class="exam-example">${escHtml(q.example)}</div>`;
        break;
    }

    document.getElementById('exam-question-body').innerHTML = body;

    // Speak the character on vocab/tone/chengyu questions
    if (q.char && ['vocab-meaning', 'vocab-pinyin', 'tone', 'chengyu'].includes(q.type)) {
      speechService.speak(q.char);
    }

    // Build answer options
    const isCnOption = ['vocab-char', 'chengyu'].includes(q.type);
    const optDiv = document.getElementById('exam-options');
    optDiv.innerHTML = (q.options || []).map(opt => {
      const val   = typeof opt === 'object' ? opt.value : opt;
      const label = typeof opt === 'object' ? opt.label : opt;
      const extra = isCnOption ? ' exam-opt-cn' : q.type === 'grammar' ? ' exam-opt-pattern' : '';
      return `<button class="exam-option${extra}" data-ans="${escHtml(val)}">${escHtml(label)}</button>`;
    }).join('');

    optDiv.querySelectorAll('.exam-option').forEach(btn =>
      btn.addEventListener('click', () => this._handleAnswer(btn, q))
    );
  }

  _handleAnswer(btn, q) {
    const chosen    = btn.getAttribute('data-ans');
    const isCorrect = chosen === q.correct;
    if (isCorrect) this._score++;

    // Lock all buttons, highlight result
    document.querySelectorAll('#exam-options .exam-option').forEach(b => {
      b.disabled = true;
      b.classList.add('disabled');
      if (b.getAttribute('data-ans') === q.correct) b.classList.add('correct');
    });
    if (!isCorrect) btn.classList.add('wrong');

    const fb = document.getElementById('exam-feedback');
    fb.textContent = isCorrect
      ? '✓ Correct!'
      : `✗ Wrong — correct answer: ${q.correct}`;
    fb.className = `exam-feedback ${isCorrect ? 'correct-fb' : 'wrong-fb'}`;

    this._results.push({ q, correct: isCorrect });

    // Auto-advance
    setTimeout(() => {
      this._current++;
      if (this._current < this._questions.length) {
        this._showQuestion();
      } else {
        this._showResult();
      }
    }, isCorrect ? 900 : 1900);
  }

  // ============================
  //  Results screen
  // ============================

  _showResult() {
    document.getElementById('exam-question-screen').classList.add('hidden');
    document.getElementById('exam-result-screen').classList.remove('hidden');
    document.getElementById('exam-progress-fill').style.width = '100%';

    const total = this._results.length;
    const score = this._score;
    const pct   = total > 0 ? Math.round(score / total * 100) : 0;

    let grade, gClass;
    if      (pct >= 90) { grade = 'A+  满分！Excellent!';    gClass = 'grade-a'; }
    else if (pct >= 80) { grade = 'A  优秀 Great job!';      gClass = 'grade-a'; }
    else if (pct >= 70) { grade = 'B  良好 Good work!';      gClass = 'grade-b'; }
    else if (pct >= 60) { grade = 'C  及格 Keep going!';     gClass = 'grade-c'; }
    else                { grade = 'D  加油！Keep studying!'; gClass = 'grade-d'; }

    document.getElementById('exam-final-score').innerHTML = `
      <div class="exam-score-wrap">
        <div class="exam-score-circle ${gClass}">
          <div class="esc-pct">${pct}%</div>
          <div class="esc-raw">${score} / ${total}</div>
        </div>
        <div class="exam-grade">${escHtml(grade)}</div>
        <div class="exam-meta-badge">HSK ${this._level} · ${total} Questions</div>
      </div>`;

    // Per-skill breakdown
    const stats = {};
    for (const r of this._results) {
      if (!stats[r.q.type]) stats[r.q.type] = { total: 0, correct: 0 };
      stats[r.q.type].total++;
      if (r.correct) stats[r.q.type].correct++;
    }

    document.getElementById('exam-skill-breakdown').innerHTML =
      Object.entries(stats).map(([type, s]) => {
        const p = Math.round(s.correct / s.total * 100);
        const barColor = p >= 70 ? 'var(--accent)' : p >= 50 ? '#f59e0b' : '#ef4444';
        return `<div class="exam-skill-row">
          <span class="esr-label">${escHtml(TYPE_LABELS[type] || type)}</span>
          <div class="esr-bar-bg">
            <div class="esr-bar-fill" style="width:${p}%;background:${barColor}"></div>
          </div>
          <span class="esr-pct">${s.correct}/${s.total} · ${p}%</span>
        </div>`;
      }).join('');

    // Question-by-question review
    document.getElementById('exam-review').innerHTML =
      this._results.map((r, i) => {
        const charSpan = r.q.char
          ? `<span class="rr-char">${escHtml(r.q.char)}</span>`
          : '';
        const ansSpan = !r.correct
          ? ` → <strong>${escHtml(r.q.correct)}</strong>`
          : '';
        return `<div class="exam-review-row ${r.correct ? 'rr-ok' : 'rr-fail'}">
          <span class="rr-icon">${r.correct ? '✓' : '✗'}</span>
          <span class="rr-num">${i + 1}.</span>
          <span class="rr-type">${escHtml(TYPE_LABELS[r.q.type] || r.q.type)}</span>
          ${charSpan}
          <span class="rr-ans">${ansSpan}</span>
        </div>`;
      }).join('');
  }

  // ============================
  //  Event wiring
  // ============================

  _bindEvents() {
    document.getElementById('exam-start-btn').addEventListener('click',  () => this._start());
    document.getElementById('exam-retry-btn').addEventListener('click',  () => this._showStart());
    document.getElementById('exam-back-btn').addEventListener('click',   () => this._showStart());
    document.getElementById('exam-skills-all').addEventListener('click', () =>
      document.querySelectorAll('.exam-skill-cb').forEach(cb => { cb.checked = true; })
    );
    document.getElementById('exam-skills-none').addEventListener('click', () =>
      document.querySelectorAll('.exam-skill-cb').forEach(cb => { cb.checked = false; })
    );
  }
}
