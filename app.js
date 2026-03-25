// =============================================
//  LEARN CHINESE — MAIN APP LOGIC
// =============================================

// ---- STATE ----
const state = {
  currentView: 'home',
  lessonsLevel: 1,
  fcLevel: 1,
  quizLevel: 1,
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
  const grid = document.getElementById('vocab-grid');
  const filtered = query
    ? data.filter(w =>
        w.char.includes(query) ||
        w.pinyin.toLowerCase().includes(query.toLowerCase()) ||
        w.meaning.toLowerCase().includes(query.toLowerCase())
      )
    : data;

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1">No results found.</p>';
    return;
  }

  grid.innerHTML = filtered.map(word => {
    const learned = isLearned(level, word.char);
    return `
      <div class="vocab-card${learned ? ' learned' : ''}" data-char="${escHtml(word.char)}" data-level="${level}">
        ${learned ? '<span class="learn-check">✓ learned</span>' : ''}
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
      const word = HSK_DATA[lv].find(w => w.char === ch);
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
//  INIT
// =============================================
showView('home');
