// =============================================
//  LEARN CHINESE — MAIN APP LOGIC
// =============================================

// ---- STATE ----
const state = {
  currentView: 'home',
  lessonsLevel: 1,
  fcLevel: 1,
  quizLevel: 1,
  grammarLevel: 1,
  readingLevel: 1,
  writingLevel: 1,
  writingIndex: 0,
  writingCards: [],
  writingDone: {},
  fcIndex: 0,
  fcCards: [],
  quizQuestions: [],
  quizCurrent: 0,
  quizScore: 0,
  quizResults: [],
  progress: loadProgress(),
};

// ---- PROGRESS STORAGE ----
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('cn_progress') || '{}');
  } catch { return {}; }
}
function saveProgress() {
  localStorage.setItem('cn_progress', JSON.stringify(state.progress));
}
function markWordLearned(level, char) {
  if (!state.progress[level]) state.progress[level] = {};
  state.progress[level][char] = true;
  saveProgress();
}
function isLearned(level, char) {
  return !!(state.progress[level] && state.progress[level][char]);
}

// ---- NAVIGATION ----
function showView(viewName) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const view = document.getElementById('view-' + viewName);
  if (view) view.classList.add('active');
  const link = document.querySelector(`.nav-link[data-view="${viewName}"]`);
  if (link) link.classList.add('active');
  state.currentView = viewName;
  // close mobile nav
  document.querySelector('.main-nav').classList.remove('open');

  if (viewName === 'lessons')    renderLessons(state.lessonsLevel);
  if (viewName === 'flashcards') renderFlashcards(state.fcLevel);
  if (viewName === 'quiz')       resetQuizUI();
  if (viewName === 'progress')   renderProgress();
  if (viewName === 'grammar')    renderGrammar(state.grammarLevel);
  if (viewName === 'reading')    renderReading(state.readingLevel);
  if (viewName === 'chengyu')    renderChengyu('');
  if (viewName === 'writing')    renderWriting(state.writingLevel);
}

// Wire up nav links
document.querySelectorAll('[data-view]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const view = el.getAttribute('data-view');
    const level = el.getAttribute('data-level');
    if (level) {
      if (view === 'lessons') state.lessonsLevel = parseInt(level);
      if (view === 'flashcards') state.fcLevel = parseInt(level);
    }
    showView(view);
  });
});

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.toggle('open');
});

// =============================================
//  LESSONS
// =============================================
function renderLessons(level) {
  state.lessonsLevel = level;
  const data = HSK_DATA[level] || [];
  setActiveTab('level-tabs', level);

  document.getElementById('lesson-info').textContent =
    `HSK ${level} · ${data.length} vocabulary words`;

  renderVocabGrid(data, level, '');
}

function renderVocabGrid(data, level, query) {
  const showExtra = document.getElementById('show-extra') && document.getElementById('show-extra').checked;
  const allData = showExtra && EXTRA_VOCAB[level]
    ? [...data, ...EXTRA_VOCAB[level].map(w => ({...w, _extra: true}))]
    : data;
  const grid = document.getElementById('vocab-grid');
  const filtered = query
    ? allData.filter(w =>
        w.char.includes(query) ||
        w.pinyin.toLowerCase().includes(query.toLowerCase()) ||
        w.meaning.toLowerCase().includes(query.toLowerCase())
      )
    : allData;

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1">No results found.</p>';
    return;
  }

  grid.innerHTML = filtered.map(word => {
    const learned = isLearned(level, word.char);
    const extraClass = word._extra ? ' extra-word' : '';
    return `
      <div class="vocab-card${learned ? ' learned' : ''}${extraClass}" data-char="${escHtml(word.char)}" data-level="${level}">
        ${learned ? '<span class="learn-check">✓ learned</span>' : ''}
        ${word._extra ? '<span style="font-size:.7rem;position:absolute;top:.5rem;right:.7rem;color:var(--accent)">+bonus</span>' : ''}
        <div class="vocab-char tone-${word.tone}">${escHtml(word.char)}</div>
        <div class="vocab-pinyin">${escHtml(word.pinyin)}</div>
        <div class="vocab-meaning">${escHtml(word.meaning)}</div>
        <span class="vocab-tag">${escHtml(word.pos)}</span>
        <div class="vocab-example" style="display:none"></div>
      </div>`;
  }).join('');

  // Click to learn / toggle example
  grid.querySelectorAll('.vocab-card').forEach(card => {
    card.addEventListener('click', () => {
      const ch = card.getAttribute('data-char');
      const lv = parseInt(card.getAttribute('data-level'));
      const allWords = EXTRA_VOCAB[lv] ? [...HSK_DATA[lv], ...EXTRA_VOCAB[lv]] : [...HSK_DATA[lv]];
      const word = allWords.find(w => w.char === ch);
      if (!word) return;

      // mark learned
      markWordLearned(lv, ch);
      card.classList.add('learned');
      if (!card.querySelector('.learn-check')) {
        const ck = document.createElement('span');
        ck.className = 'learn-check'; ck.textContent = '✓ learned';
        card.prepend(ck);
      }

      // toggle example sentence
      const exDiv = card.querySelector('.vocab-example');
      if (exDiv.style.display === 'none') {
        exDiv.style.display = 'block';
        exDiv.style.marginTop = '.5rem';
        exDiv.style.fontSize = '.8rem';
        exDiv.style.color = 'var(--text-muted)';
        exDiv.innerHTML = `<span style="font-family:var(--font-cn)">${escHtml(word.example)}</span><br>${escHtml(word.exampleMeaning)}`;
      } else {
        exDiv.style.display = 'none';
      }
    });
  });
}

// Level tabs for lessons
document.getElementById('level-tabs').addEventListener('click', e => {
  if (e.target.classList.contains('tab')) {
    const level = parseInt(e.target.getAttribute('data-level'));
    renderLessons(level);
  }
});

// Search
document.getElementById('search-input').addEventListener('input', e => {
  const q = e.target.value.trim();
  renderVocabGrid(HSK_DATA[state.lessonsLevel], state.lessonsLevel, q);
});

// Bonus vocab toggle
document.getElementById('show-extra').addEventListener('change', () => {
  const q = document.getElementById('search-input').value.trim();
  renderVocabGrid(HSK_DATA[state.lessonsLevel], state.lessonsLevel, q);
});

// =============================================
//  GRAMMAR
// =============================================
function renderGrammar(level) {
  state.grammarLevel = level;
  setActiveTab('grammar-level-tabs', level);
  const list = document.getElementById('grammar-list');
  const patterns = GRAMMAR_DATA[level] || [];
  if (!patterns.length) {
    list.innerHTML = '<p style="color:var(--text-muted)">No grammar data for this level yet.</p>';
    return;
  }
  list.innerHTML = patterns.map((g, i) => `
    <div class="grammar-card">
      <div class="grammar-card-header">
        <span class="grammar-pattern">${escHtml(g.pattern)}</span>
        <span class="grammar-title">${escHtml(g.title)}</span>
      </div>
      <p class="grammar-explanation">${escHtml(g.explanation)}</p>
      <ul class="grammar-examples">
        ${g.examples.map(ex => `
          <li>
            <div class="cn">${escHtml(ex.cn)}</div>
            <div class="py">${escHtml(ex.py)}</div>
            <div class="en">${escHtml(ex.en)}</div>
          </li>`).join('')}
      </ul>
      ${g.tip ? `<div class="grammar-tip">${escHtml(g.tip)}</div>` : ''}
    </div>`).join('');
}

document.getElementById('grammar-level-tabs').addEventListener('click', e => {
  if (e.target.classList.contains('tab')) {
    renderGrammar(parseInt(e.target.getAttribute('data-level')));
  }
});

// =============================================
//  READING
// =============================================
function renderReading(level) {
  state.readingLevel = level;
  setActiveTab('reading-level-tabs', level);
  const list = document.getElementById('reading-list');
  const passages = READING_DATA[level] || [];
  if (!passages.length) {
    list.innerHTML = '<p style="color:var(--text-muted)">No reading passages for this level yet.</p>';
    return;
  }
  list.innerHTML = passages.map((p, pi) => `
    <div class="reading-card">
      <div class="reading-card-header">
        <span class="level-badge l${level}">HSK ${level}</span>
        <span class="reading-title">${escHtml(p.title)}</span>
      </div>
      <div class="reading-body">
        <div class="reading-cn">${escHtml(p.text)}</div>
        <div class="reading-controls">
          <button class="btn btn-sm" onclick="toggleReadingPanel(this, 'py-${pi}')">Show Pinyin</button>
          <button class="btn btn-sm" onclick="toggleReadingPanel(this, 'tr-${pi}')">Show Translation</button>
          <button class="btn btn-sm" onclick="toggleReadingPanel(this, 'rq-${pi}')">Questions</button>
        </div>
        <div id="py-${pi}" class="reading-pinyin-text">${escHtml(p.pinyin)}</div>
        <div id="tr-${pi}" class="reading-translation-text">${escHtml(p.translation)}</div>
        <div id="rq-${pi}" class="reading-questions" style="display:none">
          <h4>Comprehension Questions</h4>
          ${p.questions.map((q, qi) => `
            <div class="rq-item">
              <div class="rq-q">${escHtml(q.q)} <span style="color:var(--text-muted);font-size:.8rem">(${escHtml(q.qEn)})</span></div>
              <div id="rq-${pi}-${qi}" class="rq-a">${escHtml(q.a)} <span style="color:var(--text-muted);font-size:.8rem">(${escHtml(q.aEn)})</span></div>
              <span class="rq-reveal" onclick="toggleRqA('rq-${pi}-${qi}', this)">▶ Show answer</span>
            </div>`).join('')}
        </div>
      </div>
    </div>`).join('');
}

function toggleReadingPanel(btn, id) {
  const el = document.getElementById(id);
  if (!el) return;
  const isQs = id.startsWith('rq-') && !id.includes('-', 3);
  if (isQs) {
    const visible = el.style.display !== 'none';
    el.style.display = visible ? 'none' : 'block';
    btn.textContent = visible ? 'Questions' : 'Hide Questions';
  } else {
    const visible = el.classList.contains('visible');
    el.classList.toggle('visible', !visible);
    btn.textContent = visible
      ? (id.includes('py') ? 'Show Pinyin' : 'Show Translation')
      : (id.includes('py') ? 'Hide Pinyin' : 'Hide Translation');
  }
}

function toggleRqA(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const visible = el.classList.toggle('visible');
  btn.textContent = visible ? '▼ Hide answer' : '▶ Show answer';
}

document.getElementById('reading-level-tabs').addEventListener('click', e => {
  if (e.target.classList.contains('tab')) {
    renderReading(parseInt(e.target.getAttribute('data-level')));
  }
});

// =============================================
//  CHENGYU (成语)
// =============================================
function renderChengyu(query) {
  const grid = document.getElementById('chengyu-grid');
  const q = (query || '').trim().toLowerCase();
  const data = q
    ? CHENGYU_DATA.filter(c =>
        c.chars.includes(q) ||
        c.pinyin.toLowerCase().includes(q) ||
        c.meaning.toLowerCase().includes(q) ||
        c.literal.toLowerCase().includes(q)
      )
    : CHENGYU_DATA;

  if (!data.length) {
    grid.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1">No idioms found.</p>';
    return;
  }

  grid.innerHTML = data.map(c => `
    <div class="cy-card">
      <div class="cy-chars">${escHtml(c.chars)}</div>
      <div class="cy-pinyin">${escHtml(c.pinyin)}</div>
      <div class="cy-literal">Literal: ${escHtml(c.literal)}</div>
      <div class="cy-meaning">${escHtml(c.meaning)}</div>
      <div class="cy-origin">${escHtml(c.origin)}</div>
      <div class="cy-example">${escHtml(c.example)}</div>
      <div class="cy-example-en">${escHtml(c.exampleMeaning)}</div>
      <div class="cy-level"><span class="level-badge l${c.level}">HSK ${c.level}</span></div>
    </div>`).join('');
}

document.getElementById('chengyu-search').addEventListener('input', e => {
  renderChengyu(e.target.value);
});

// =============================================
//  FLASHCARDS
// =============================================
function renderFlashcards(level) {
  state.fcLevel = level;
  setActiveTab('fc-level-tabs', level);
  state.fcCards = shuffle([...HSK_DATA[level]]);
  state.fcIndex = 0;
  updateFlashcard();
}

document.getElementById('fc-level-tabs').addEventListener('click', e => {
  if (e.target.classList.contains('tab')) {
    renderFlashcards(parseInt(e.target.getAttribute('data-level')));
  }
});

function updateFlashcard() {
  const card = state.fcCards[state.fcIndex];
  if (!card) return;
  document.getElementById('fc-char').textContent = card.char;
  document.getElementById('fc-pinyin').textContent = card.pinyin;
  document.getElementById('fc-meaning').textContent = card.meaning;
  document.getElementById('fc-example').innerHTML =
    `<span style="font-family:var(--font-cn)">${escHtml(card.example)}</span><br><small>${escHtml(card.exampleMeaning)}</small>`;
  document.getElementById('fc-counter').textContent =
    `Card ${state.fcIndex + 1} / ${state.fcCards.length}`;
  const pct = ((state.fcIndex + 1) / state.fcCards.length * 100).toFixed(0);
  document.getElementById('fc-progress-fill').style.width = pct + '%';

  // reset flip
  const fc = document.getElementById('flashcard');
  fc.classList.remove('flipped');
}

// Flip on click / space
document.getElementById('flashcard').addEventListener('click', () => {
  document.getElementById('flashcard').classList.toggle('flipped');
});
document.getElementById('flashcard').addEventListener('keydown', e => {
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('flashcard').classList.toggle('flipped');
  }
});

document.getElementById('fc-next').addEventListener('click', () => {
  if (state.fcIndex < state.fcCards.length - 1) { state.fcIndex++; updateFlashcard(); }
});
document.getElementById('fc-prev').addEventListener('click', () => {
  if (state.fcIndex > 0) { state.fcIndex--; updateFlashcard(); }
});
document.getElementById('fc-shuffle').addEventListener('click', () => {
  renderFlashcards(state.fcLevel);
});
document.getElementById('fc-restart').addEventListener('click', () => {
  state.fcIndex = 0; updateFlashcard();
});

// Rating buttons — just move to next card
['fc-easy','fc-ok','fc-hard'].forEach(id => {
  document.getElementById(id).addEventListener('click', () => {
    const word = state.fcCards[state.fcIndex];
    if (id === 'fc-easy') markWordLearned(state.fcLevel, word.char);
    if (state.fcIndex < state.fcCards.length - 1) { state.fcIndex++; updateFlashcard(); }
  });
});

// =============================================
//  QUIZ
// =============================================
function resetQuizUI() {
  document.getElementById('quiz-start-screen').classList.remove('hidden');
  document.getElementById('quiz-question-screen').classList.add('hidden');
  document.getElementById('quiz-result-screen').classList.add('hidden');
}

document.getElementById('quiz-level-tabs').addEventListener('click', e => {
  if (e.target.classList.contains('tab')) {
    state.quizLevel = parseInt(e.target.getAttribute('data-level'));
    setActiveTab('quiz-level-tabs', state.quizLevel);
    resetQuizUI();
  }
});

document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('retry-quiz').addEventListener('click', startQuiz);

function startQuiz() {
  const pool = [...HSK_DATA[state.quizLevel]];
  state.quizQuestions = shuffle(pool).slice(0, 10);
  state.quizCurrent = 0;
  state.quizScore = 0;
  state.quizResults = [];
  document.getElementById('quiz-start-screen').classList.add('hidden');
  document.getElementById('quiz-result-screen').classList.add('hidden');
  document.getElementById('quiz-question-screen').classList.remove('hidden');
  showQuizQuestion();
}

function showQuizQuestion() {
  const q = state.quizQuestions[state.quizCurrent];
  document.getElementById('quiz-q-counter').textContent =
    `Q ${state.quizCurrent + 1} / ${state.quizQuestions.length}`;
  document.getElementById('quiz-score-display').textContent =
    `Score: ${state.quizScore}`;
  document.getElementById('quiz-char').textContent = q.char;
  document.getElementById('quiz-pinyin').textContent = q.pinyin;
  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('quiz-feedback').className = 'quiz-feedback hidden';

  // Build 4 options — 1 correct + 3 distractors
  const pool = HSK_DATA[state.quizLevel].filter(w => w.char !== q.char);
  const distractors = shuffle(pool).slice(0, 3).map(w => w.meaning);
  const options = shuffle([q.meaning, ...distractors]);

  const optDiv = document.getElementById('quiz-options');
  optDiv.innerHTML = options.map(opt =>
    `<button class="quiz-option" data-ans="${escHtml(opt)}">${escHtml(opt)}</button>`
  ).join('');

  optDiv.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn, q.meaning));
  });
}

function handleAnswer(btn, correctMeaning) {
  const chosen = btn.getAttribute('data-ans');
  const isCorrect = chosen === correctMeaning;

  // disable all options
  document.querySelectorAll('.quiz-option').forEach(b => {
    b.classList.add('disabled');
    if (b.getAttribute('data-ans') === correctMeaning) b.classList.add('correct');
  });
  if (!isCorrect) btn.classList.add('wrong');

  const fb = document.getElementById('quiz-feedback');
  if (isCorrect) {
    state.quizScore++;
    fb.textContent = '✓ Correct!';
    fb.className = 'quiz-feedback correct-fb';
  } else {
    fb.textContent = `✗ Wrong. The correct answer is: ${correctMeaning}`;
    fb.className = 'quiz-feedback wrong-fb';
  }
  fb.classList.remove('hidden');

  state.quizResults.push({ q: state.quizQuestions[state.quizCurrent], correct: isCorrect });

  setTimeout(() => {
    state.quizCurrent++;
    if (state.quizCurrent < state.quizQuestions.length) {
      showQuizQuestion();
    } else {
      showQuizResult();
    }
  }, 1400);
}

function showQuizResult() {
  document.getElementById('quiz-question-screen').classList.add('hidden');
  document.getElementById('quiz-result-screen').classList.remove('hidden');
  const total = state.quizQuestions.length;
  const score = state.quizScore;
  document.getElementById('result-score').textContent = `${score} / ${total}`;
  const pct = score / total;
  const msgs = ['Keep studying! 加油！', 'Getting there! 继续！', 'Good job! 不错！', 'Excellent! 优秀！', 'Perfect! 完美！'];
  const mi = Math.min(Math.floor(pct * 5), 4);
  document.getElementById('result-msg').textContent = msgs[mi];

  // Review list
  const rev = document.getElementById('result-review');
  rev.innerHTML = '<p style="font-weight:700;margin-bottom:.5rem">Review:</p>' +
    state.quizResults.map(r =>
      `<p class="${r.correct ? 'correct-item' : 'wrong-item'}">
        ${r.correct ? '✓' : '✗'} <strong style="font-family:var(--font-cn)">${escHtml(r.q.char)}</strong>
        ${escHtml(r.q.pinyin)} — ${escHtml(r.q.meaning)}
      </p>`
    ).join('');
}

// =============================================
//  PROGRESS
// =============================================
function renderProgress() {
  let totalWords = 0, learnedWords = 0;
  Object.values(HSK_DATA).forEach(d => totalWords += d.length);
  Object.values(state.progress).forEach(lv => learnedWords += Object.keys(lv).length);

  const summary = document.getElementById('progress-summary');
  summary.innerHTML = `
    <div class="progress-stat"><div class="stat-num">${learnedWords}</div><div class="stat-label">Words Learned</div></div>
    <div class="progress-stat"><div class="stat-num">${totalWords - learnedWords}</div><div class="stat-label">Remaining</div></div>
    <div class="progress-stat"><div class="stat-num">${Math.round(learnedWords/totalWords*100)}%</div><div class="stat-label">Total Progress</div></div>
  `;

  const levels = document.getElementById('progress-levels');
  levels.innerHTML = [1,2,3,4,5].map(lv => {
    const total = HSK_DATA[lv].length;
    const done = state.progress[lv] ? Object.keys(state.progress[lv]).length : 0;
    const pct = Math.round(done / total * 100);
    return `
      <div class="progress-level-row plr-l${lv}">
        <div class="plr-header">
          <span class="level-badge l${lv}">HSK ${lv}</span>
          <span class="plr-name">${['Beginner','Elementary','Pre-Intermediate','Intermediate','Upper-Intermediate'][lv-1]}</span>
          <span class="plr-count">${done} / ${total} words · ${pct}%</span>
        </div>
        <div class="plr-bar-bg"><div class="plr-bar-fill" style="width:${pct}%"></div></div>
      </div>`;
  }).join('');
}

document.getElementById('reset-progress').addEventListener('click', () => {
  if (confirm('Reset all progress? This cannot be undone.')) {
    state.progress = {};
    localStorage.removeItem('cn_progress');
    renderProgress();
  }
});

// =============================================
//  HELPERS
// =============================================
function setActiveTab(containerId, level) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', parseInt(t.getAttribute('data-level')) === level);
  });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// =============================================
//  WRITING PAD
// =============================================

// ---- Canvas setup (lazy, once per view activation) ----
let _canvasReady = false;
let _strokeHistory = [];  // array of path arrays for undo
let _currentPath = [];    // current in-progress stroke

function renderWriting(level) {
  state.writingLevel = level;
  setActiveTab('writing-level-tabs', level);
  const pool = shuffle([...HSK_DATA[level]]);
  state.writingCards = pool.slice(0, 15);
  state.writingIndex = 0;
  state.writingDone = {};
  _strokeHistory = [];
  _currentPath = [];

  renderWritingQueue();
  loadWritingChar();
  if (!_canvasReady) initWritingCanvas();
  else redrawCanvas();
}

function loadWritingChar() {
  const card = state.writingCards[state.writingIndex];
  if (!card) return;

  const refChar = document.getElementById('writing-ref-char');
  const refPinyin = document.getElementById('writing-ref-pinyin');
  const refMeaning = document.getElementById('writing-ref-meaning');
  const refStrokes = document.getElementById('writing-ref-strokes');
  const counter = document.getElementById('writing-counter');

  // Preserve hide state
  const isHidden = refChar.classList.contains('hidden');
  refChar.textContent = card.char;
  if (isHidden) refChar.classList.add('hidden');
  refPinyin.textContent = card.pinyin;
  refMeaning.textContent = card.meaning;
  refStrokes.textContent = ''; // stroke count lookup not available in static data
  counter.textContent = `${state.writingIndex + 1} / ${state.writingCards.length}`;

  // Update toggle button label
  document.getElementById('writing-toggle-ref').textContent =
    isHidden ? 'Show Reference' : 'Hide Reference';

  // Clear canvas for new character
  _strokeHistory = [];
  _currentPath = [];
  redrawCanvas();
  renderWritingQueue();
}

function renderWritingQueue() {
  const queue = document.getElementById('writing-queue');
  queue.innerHTML = state.writingCards.map((c, i) => {
    const active = i === state.writingIndex;
    const done = state.writingDone[i];
    return `<div class="wq-chip${active ? ' active' : ''}${done ? ' done' : ''}" data-wi="${i}">${escHtml(c.char)}</div>`;
  }).join('');

  queue.querySelectorAll('.wq-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.writingIndex = parseInt(chip.getAttribute('data-wi'));
      loadWritingChar();
    });
  });
}

// ---- Canvas drawing ----
function initWritingCanvas() {
  const canvas = document.getElementById('writing-canvas');
  if (!canvas) return;
  _canvasReady = true;

  // Make canvas responsive while keeping square proportions
  function resizeCanvas() {
    const wrap = canvas.parentElement;
    const size = Math.min(wrap.clientWidth || 320, 480);
    canvas.width = size;
    canvas.height = size;
    redrawCanvas();
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Mouse events
  canvas.addEventListener('mousedown', e => { e.preventDefault(); startStroke(canvas, e.clientX, e.clientY); });
  canvas.addEventListener('mousemove', e => { if (_drawing) continueStroke(canvas, e.clientX, e.clientY); });
  canvas.addEventListener('mouseup', () => endStroke());
  canvas.addEventListener('mouseleave', () => endStroke());

  // Touch events
  canvas.addEventListener('touchstart', e => { e.preventDefault(); const t = e.touches[0]; startStroke(canvas, t.clientX, t.clientY); }, { passive: false });
  canvas.addEventListener('touchmove', e => { e.preventDefault(); const t = e.touches[0]; if (_drawing) continueStroke(canvas, t.clientX, t.clientY); }, { passive: false });
  canvas.addEventListener('touchend', () => endStroke());
}

let _drawing = false;

function getPos(canvas, clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY,
  };
}

function startStroke(canvas, clientX, clientY) {
  _drawing = true;
  const pos = getPos(canvas, clientX, clientY);
  _currentPath = [pos];
}

function continueStroke(canvas, clientX, clientY) {
  if (!_drawing) return;
  const pos = getPos(canvas, clientX, clientY);
  _currentPath.push(pos);
  redrawCanvas();
}

function endStroke() {
  if (!_drawing) return;
  _drawing = false;
  if (_currentPath.length > 1) {
    _strokeHistory.push([..._currentPath]);
    // Mark current character as touched
    state.writingDone[state.writingIndex] = true;
    renderWritingQueue();
  }
  _currentPath = [];
  redrawCanvas();
}

function redrawCanvas() {
  const canvas = document.getElementById('writing-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const size = canvas.width;

  // Background
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);

  // Draw grid (米字格)
  const showGrid = document.getElementById('writing-show-grid');
  if (!showGrid || showGrid.checked) drawMiziGrid(ctx, size);

  // Draw trace (ghost reference character)
  const showTrace = document.getElementById('writing-show-trace');
  if (showTrace && showTrace.checked) drawTraceChar(ctx, size);

  // Draw committed strokes
  ctx.strokeStyle = '#111827';
  ctx.lineWidth = Math.max(2, size / 80);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  _strokeHistory.forEach(path => drawPath(ctx, path));

  // Draw current in-progress stroke
  if (_currentPath.length > 1) {
    ctx.strokeStyle = '#1d4ed8';
    drawPath(ctx, _currentPath);
  }
}

function drawPath(ctx, path) {
  if (path.length < 2) return;
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

function drawMiziGrid(ctx, size) {
  const mid = size / 2;
  ctx.save();
  ctx.strokeStyle = '#bfdbfe';  // light blue guide lines
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);

  // Outer border
  ctx.strokeStyle = '#93c5fd';
  ctx.setLineDash([]);
  ctx.lineWidth = 1.5;
  ctx.strokeRect(1, 1, size - 2, size - 2);

  // Cross lines (centre horizontal + vertical)
  ctx.strokeStyle = '#bfdbfe';
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath(); ctx.moveTo(mid, 0); ctx.lineTo(mid, size); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(size, mid); ctx.stroke();

  // Diagonal lines
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(size, size); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(size, 0); ctx.lineTo(0, size); ctx.stroke();

  ctx.restore();
}

function drawTraceChar(ctx, size) {
  const card = state.writingCards[state.writingIndex];
  if (!card) return;
  ctx.save();
  ctx.font = `${size * 0.75}px "Noto Sans SC", serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(96, 165, 250, 0.18)';
  ctx.fillText(card.char, size / 2, size / 2);
  ctx.restore();
}

// ---- Controls ----
document.getElementById('writing-clear').addEventListener('click', () => {
  _strokeHistory = [];
  _currentPath = [];
  state.writingDone[state.writingIndex] = false;
  renderWritingQueue();
  redrawCanvas();
});

document.getElementById('writing-undo').addEventListener('click', () => {
  if (_strokeHistory.length > 0) { _strokeHistory.pop(); redrawCanvas(); }
  if (_strokeHistory.length === 0) {
    state.writingDone[state.writingIndex] = false;
    renderWritingQueue();
  }
});

document.getElementById('writing-toggle-ref').addEventListener('click', function() {
  const ref = document.getElementById('writing-ref-char');
  const hidden = ref.classList.toggle('hidden');
  this.textContent = hidden ? 'Show Reference' : 'Hide Reference';
});

document.getElementById('writing-next').addEventListener('click', () => {
  if (state.writingIndex < state.writingCards.length - 1) {
    state.writingIndex++; loadWritingChar();
  }
});

document.getElementById('writing-prev').addEventListener('click', () => {
  if (state.writingIndex > 0) {
    state.writingIndex--; loadWritingChar();
  }
});

document.getElementById('writing-level-tabs').addEventListener('click', e => {
  if (e.target.classList.contains('tab')) {
    renderWriting(parseInt(e.target.getAttribute('data-level')));
  }
});

document.getElementById('writing-show-grid').addEventListener('change', redrawCanvas);
document.getElementById('writing-show-trace').addEventListener('change', redrawCanvas);

// =============================================
//  INIT
// =============================================
showView('home');
