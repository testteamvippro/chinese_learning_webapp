import { View }  from './View.js';
import { escHtml, shuffle, setActiveTab } from '../core/utils.js';
import { gamificationStore } from '../core/GamificationStore.js';

export class QuizView extends View {
  constructor() {
    super('quiz');
    this._level     = 1;
    this._questions = [];
    this._current   = 0;
    this._score     = 0;
    this._results   = [];
    this._bindEvents();
  }

  // ---- Lifecycle ----

  onActivate() {
    this._showStartScreen();
  }

  // ---- Screens ----

  _showStartScreen() {
    document.getElementById('quiz-start-screen').classList.remove('hidden');
    document.getElementById('quiz-question-screen').classList.add('hidden');
    document.getElementById('quiz-result-screen').classList.add('hidden');
  }

  _start() {
    const pool = HSK_DATA[this._level] || [];
    if (pool.length < 4) {
      const info = document.querySelector('#quiz-start-screen .quiz-intro');
      if (info) info.textContent =
        `HSK ${this._level} has only ${pool.length} word(s) loaded — need at least 4 to quiz. Try another level.`;
      return;
    }
    this._questions = shuffle([...pool]).slice(0, 10);
    this._current   = 0;
    this._score     = 0;
    this._results   = [];
    document.getElementById('quiz-start-screen').classList.add('hidden');
    document.getElementById('quiz-result-screen').classList.add('hidden');
    document.getElementById('quiz-question-screen').classList.remove('hidden');
    this._showQuestion();
  }

  _showQuestion() {
    const q = this._questions[this._current];

    document.getElementById('quiz-q-counter').textContent   = `Q ${this._current + 1} / ${this._questions.length}`;
    document.getElementById('quiz-score-display').textContent = `Score: ${this._score}`;
    document.getElementById('quiz-char').textContent         = q.char;
    document.getElementById('quiz-pinyin').textContent       = q.pinyin;

    const fb = document.getElementById('quiz-feedback');
    fb.className = 'quiz-feedback hidden';

    // Build 4 options: 1 correct + 3 distractors
    const pool = HSK_DATA[this._level] || [];
    const distractors = shuffle(
      pool.filter(w => w.char !== q.char)
    ).slice(0, 3).map(w => w.meaning);
    const options = shuffle([q.meaning, ...distractors]);

    const optDiv = document.getElementById('quiz-options');
    optDiv.innerHTML = options.map(opt =>
      `<button class="quiz-option" data-ans="${escHtml(opt)}">${escHtml(opt)}</button>`
    ).join('');

    optDiv.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => this._handleAnswer(btn, q.meaning));
    });
  }

  _handleAnswer(btn, correctMeaning) {
    const isCorrect = btn.getAttribute('data-ans') === correctMeaning;

    document.getElementById('quiz-options').querySelectorAll('.quiz-option').forEach(b => {
      b.classList.add('disabled');
      if (b.getAttribute('data-ans') === correctMeaning) b.classList.add('correct');
    });
    if (!isCorrect) btn.classList.add('wrong');

    const fb = document.getElementById('quiz-feedback');
    if (isCorrect) {
      this._score++;
      fb.textContent = '✓ Correct!';
      fb.className   = 'quiz-feedback correct-fb';
    } else {
      fb.textContent = `✗ Wrong. The correct answer is: ${correctMeaning}`;
      fb.className   = 'quiz-feedback wrong-fb';
    }
    fb.classList.remove('hidden');

    this._results.push({ q: this._questions[this._current], correct: isCorrect });

    setTimeout(() => {
      if (!this._active) return;
      this._current++;
      if (this._current < this._questions.length) {
        this._showQuestion();
      } else {
        this._showResult();
      }
    }, 1400);
  }

  _showResult() {
    document.getElementById('quiz-question-screen').classList.add('hidden');
    document.getElementById('quiz-result-screen').classList.remove('hidden');

    const total = this._questions.length;
    document.getElementById('result-score').textContent = `${this._score} / ${total}`;

    gamificationStore.recordQuizComplete(this._score, total);

    const msgs = [
      'Keep studying! 加油！', 'Getting there! 继续！',
      'Good job! 不错！', 'Excellent! 优秀！', 'Perfect! 完美！',
    ];
    document.getElementById('result-msg').textContent =
      msgs[Math.min(Math.floor(this._score / total * 5), 4)];

    document.getElementById('result-review').innerHTML =
      '<p style="font-weight:700;margin-bottom:.5rem">Review:</p>' +
      this._results.map(r =>
        `<p class="${r.correct ? 'correct-item' : 'wrong-item'}">
          ${r.correct ? '✓' : '✗'}
          <strong style="font-family:var(--font-cn)">${escHtml(r.q.char)}</strong>
          ${escHtml(r.q.pinyin)} — ${escHtml(r.q.meaning)}
        </p>`
      ).join('');
  }

  // ---- Event wiring ----

  _bindEvents() {
    document.getElementById('quiz-level-tabs').addEventListener('click', e => {
      if (e.target.classList.contains('tab')) {
        this._level = parseInt(e.target.getAttribute('data-level'));
        setActiveTab('quiz-level-tabs', this._level);
        this._showStartScreen();
      }
    });

    document.getElementById('start-quiz').addEventListener('click',  () => this._start());
    document.getElementById('retry-quiz').addEventListener('click',  () => this._start());
  }
}
