import { View }   from './View.js';
import { router } from '../core/Router.js';

// =============================================
//  STUDY PLAN VIEW
//  — Idiom of the Day
//  — 4-Week HSK study plan per level
//  — Learning tips and quick-links
// =============================================

const PLANS = {
  1: {
    title: "HSK 1 — Absolute Beginner",
    goal: "Master 150 core words, tones 1–4, and basic sentence structures.",
    weeks: [
      {
        label: "Week 1 — Sounds & Tones",
        tasks: [
          "Learn all 4 tones — practice with 妈 mā / má / mǎ / mà",
          "Master Pinyin initials and finals (b p m f, d t n l…)",
          "Study 35 core HSK 1 words: greetings, family members, numbers 1–10",
          "Practice: 你好 nǐ hǎo, 再见 zàijiàn, 谢谢 xièxie, 不客气 bú kèqi",
        ]
      },
      {
        label: "Week 2 — First Sentences",
        tasks: [
          "Learn Subject + Verb + Object sentence pattern",
          "Study 40 more words: verbs (吃 chī, 喝 hē, 去 qù, 来 lái), places, time",
          "Practice: 我吃饭。 Wǒ chī fàn. / 我喝水。 Wǒ hē shuǐ.",
          "Do 10 min flashcard review daily — use this app's Flashcards section",
        ]
      },
      {
        label: "Week 3 — Questions & Numbers",
        tasks: [
          "Learn question words: 什么 (what), 哪里 (where), 谁 (who), 几 (how many)",
          "Master numbers 1–100 and telling time (几点 jǐ diǎn)",
          "Study 40 more words: adjectives (好 hǎo, 大 dà, 小 xiǎo) and colours",
          "Practice question + answer dialogues with a partner or app",
        ]
      },
      {
        label: "Week 4 — Consolidation",
        tasks: [
          "Review all ~150 HSK 1 words with the Flashcards section (set to HSK 1)",
          "Read the HSK 1 passages in the Reading section",
          "Take a full Quiz (HSK 1) to check recall rate",
          "Begin recognising and writing the 50 most common characters using the Writing section",
        ]
      },
    ],
    tips: [
      "Write each new word 5× by hand — muscle memory helps character recognition.",
      "Use the 'tone rule of thumb': rising tone (2) = questioning voice, falling tone (4) = firm voice.",
      "Speak out loud every time you see a Chinese character — don't silent-read.",
      "Celebrate small wins: knowing 10 words is an achievement!",
    ],
    links: [
      { label: "Start HSK 1 Lessons →",    view: "lessons",    level: 1 },
      { label: "HSK 1 Flashcards →",       view: "flashcards",  level: 1 },
      { label: "Practice Writing →",       view: "writing",    level: 0 },
      { label: "Take HSK 1 Quiz →",        view: "quiz",       level: 1 },
    ]
  },
  2: {
    title: "HSK 2 — Elementary",
    goal: "Expand to ~300 words, handle everyday topics, read simple short texts.",
    weeks: [
      {
        label: "Week 1 — Daily Life Vocabulary",
        tasks: [
          "Learn 50 new HSK 2 words: transport, food, weather, shopping",
          "Study the 比 (comparison) pattern: A + 比 + B + Adj",
          "Review HSK 1 words using Flashcards — aim for 90% accuracy before adding new words",
          "Practice: 这个比那个贵。 Zhège bǐ nàge guì. (This is more expensive than that.)",
        ]
      },
      {
        label: "Week 2 — Actions & Time",
        tasks: [
          "Learn past-tense marker 了 and completion aspect",
          "Study verbs of motion: 去, 来, 回, 进, 出, 上, 下",
          "Master telling dates and days of the week",
          "Practice describing a day in the past using Lesson stories",
        ]
      },
      {
        label: "Week 3 — Emotions & Descriptions",
        tasks: [
          "Learn adjectives and emotion words: 高兴, 难过, 紧张, 害怕, 累",
          "Study the degree complement V + 得 + Adj: 说得很好, 跑得很快",
          "Read the HSK 2 passages in the Reading section — use the pinyin toggle",
          "Write 10 sentences describing your own daily routine",
        ]
      },
      {
        label: "Week 4 — Review & Exam Prep",
        tasks: [
          "Complete all HSK 2 Flashcards with good accuracy (85%+ flip rate)",
          "Take the HSK 2 Quiz mode — review any missed words immediately",
          "Read 'Going Shopping' and 'Chinese New Year' passages without pinyin",
          "Practice 30 characters in the Writing section — focus on stroke order",
        ]
      },
    ],
    tips: [
      "Start a vocabulary notebook: write Chinese, Pinyin, and a personal example sentence.",
      "Label objects around your home with their Chinese names.",
      "Watch 5-min beginner Chinese YouTube clips — even listening helps train your ear.",
      "The tone of a word can change meaning entirely: mā (妈 mother) vs mǎ (马 horse).",
    ],
    links: [
      { label: "Start HSK 2 Lessons →",    view: "lessons",    level: 2 },
      { label: "HSK 2 Flashcards →",       view: "flashcards",  level: 2 },
      { label: "HSK 2 Reading →",          view: "reading",    level: 2 },
      { label: "Take HSK 2 Quiz →",        view: "quiz",       level: 2 },
    ]
  },
  3: {
    title: "HSK 3 — Pre-Intermediate",
    goal: "Reach ~600 words, discuss familiar topics fluently, read short articles.",
    weeks: [
      {
        label: "Week 1 — Grammar Deep Dive",
        tasks: [
          "Study 一边…一边… (simultaneous actions) and 虽然…但是… (although…but…)",
          "Review resultative complements: V + 好/完/到/懂 (finish/complete/reach/understand)",
          "Learn 50 new HSK 3 words: emotions, relationships, society, time expressions",
          "Write 5 complex sentences using the grammar patterns above",
        ]
      },
      {
        label: "Week 2 — Reading Fluency",
        tasks: [
          "Read both HSK 3 passages in Reading section — first with pinyin, then without",
          "Learn 50 more words: places, nature, health, hobbies",
          "Study 除了…以外，还… pattern (besides X, also Y)",
          "Begin recognising characters by components (部件 bùjiàn) — it speeds up learning",
        ]
      },
      {
        label: "Week 3 — Idioms Introduction",
        tasks: [
          "Study 5 beginner-level 成语: 一日千里, 积少成多, 水滴石穿, 温故知新, 勤能补拙",
          "Explore the Chengyu section — read one idiom a day, note its origin",
          "Learn 50 more words: work, technology, travel",
          "Practice using one chengyu naturally in a sentence each day",
        ]
      },
      {
        label: "Week 4 — Integration",
        tasks: [
          "Write a short paragraph (100 characters) describing your hobbies or city",
          "Complete the Grammar section (HSK 3 patterns) for targeted practice",
          "Review all 600 HSK 1–3 words with spaced repetition (Flashcards)",
          "Take the HSK 3 practice Exam to identify weak areas",
        ]
      },
    ],
    tips: [
      "Learn characters by breaking them into radicals (部首): 氵= water, 木 = wood, 心 = heart.",
      "Read the same passage multiple times — comprehension deepens with each read.",
      "Start using Chinese in short messages or diary entries — even one sentence counts.",
      "成语 (chéngyǔ) reveal Chinese history and philosophy — one per day is a powerful habit.",
    ],
    links: [
      { label: "Start HSK 3 Lessons →",    view: "lessons",    level: 3 },
      { label: "HSK 3 Flashcards →",       view: "flashcards",  level: 3 },
      { label: "Chengyu Practice →",       view: "chengyu",    level: 0 },
      { label: "Take HSK 3 Exam →",        view: "exam",       level: 3 },
    ]
  },
  4: {
    title: "HSK 4 — Intermediate",
    goal: "Master ~1200 words, handle complex topics, read native-level short texts.",
    weeks: [
      {
        label: "Week 1 — Abstract Vocabulary",
        tasks: [
          "Learn 60 abstract nouns and verbs: 影响, 表达, 分析, 解决, 强调",
          "Study formal grammar: 不仅…而且… / 宁可…也不… / 即使…也…",
          "Read 'The Digital Divide' and 'Traditional Chinese Medicine' passages",
          "Practice 10 chengyu from HSK 4 level: 画龙点睛, 入乡随俗, 未雨绸缪",
        ]
      },
      {
        label: "Week 2 — Complex Sentences",
        tasks: [
          "Master causal/concessive patterns: 正因为…所以… and 尽管…还是…",
          "Learn 60 more words: society, economics, culture, science",
          "Write a 200-character essay on a topic you know (e.g., technology, travel)",
          "Read Chinese news headlines — identify words you know",
        ]
      },
      {
        label: "Week 3 — Cultural Depth",
        tasks: [
          "Study 10 chengyu about perseverance: 百折不挠, 有备无患, 循序渐进, 脚踏实地",
          "Learn Chinese discourse markers: 首先/其次/最后, 一方面/另一方面, 总而言之",
          "Read a full Chengyu passage — note how idioms appear in context",
          "Begin writing characters from memory (no tracing) using Writing section",
        ]
      },
      {
        label: "Week 4 — Exam-Standard Practice",
        tasks: [
          "Complete the full HSK 4 Exam simulation — aim for 75%+ pass rate",
          "Review every missed question: look up the grammar pattern or vocabulary",
          "Master all 1200 HSK 1–4 words with Flashcards (no pinyin mode)",
          "Write a self-introduction in Chinese (200+ characters) without using a dictionary",
        ]
      },
    ],
    tips: [
      "Focus on collocations (词语搭配): 采取措施 (take measures), 解决问题 (solve problems).",
      "Listen to Mandarin podcasts at normal speed — 15 min/day builds listening comprehension.",
      "Read characters without pinyin — at HSK 4, you should be weaning off pronunciation crutches.",
      "Group vocabulary thematically: all 'emotion' words together, all 'technology' words together.",
    ],
    links: [
      { label: "Start HSK 4 Lessons →",    view: "lessons",    level: 4 },
      { label: "HSK 4 Flashcards →",       view: "flashcards",  level: 4 },
      { label: "HSK 4 Reading →",          view: "reading",    level: 4 },
      { label: "Full Grammar Review →",    view: "grammar",    level: 4 },
    ]
  },
  5: {
    title: "HSK 5 — Upper-Intermediate",
    goal: "Achieve ~2500 words, read newspapers and literary texts, discuss advanced topics.",
    weeks: [
      {
        label: "Week 1 — Literary Language",
        tasks: [
          "Study formal/written register: 之, 于, 则, 乃, 其, 者 (classical particles)",
          "Learn 70 abstract HSK 5 words: 意识, 机制, 框架, 素养, 维度",
          "Read 'The Philosophy of Chinese Gardens' and 'The Art of Chinese Tea'",
          "Annotate: mark every unknown word, look up all of them",
        ]
      },
      {
        label: "Week 2 — Advanced Idioms",
        tasks: [
          "Study 10 advanced chengyu: 知己知彼, 一丝不苟, 孜孜不倦, 冰冻三尺非一日之寒, 青出于蓝",
          "Practice using chengyu in written output — write a short essay using 3+ idioms",
          "Learn discourse-level connectors: 之所以…是因为…, 无论…都…, 尽管如此…",
          "Read one authentic Chinese article or blog post this week",
        ]
      },
      {
        label: "Week 3 — Writing Mastery",
        tasks: [
          "Write a 400-character argumentative essay: '手机对学习是好是坏？'",
          "Get feedback: paste into a translation tool, compare with your intended meaning",
          "Study HSK 5 Grammar section — focus on formal conditional and causal patterns",
          "Master 30 complex characters in Writing section: 赢, 疆, 餐, 矛, 盾, 谦",
        ]
      },
      {
        label: "Week 4 — All-Round Challenge",
        tasks: [
          "Take the HSK 5 Exam simulation — aim for 80%+",
          "Read a full traditional chengyu story without English translation",
          "Complete a timed reading: finish a 300-character passage in under 4 minutes",
          "Review: compile a personal list of your 20 most-confused word pairs",
        ]
      },
    ],
    tips: [
      "At this level, learn words in context — read sentences with them, not just definitions.",
      "Start watching Chinese TV dramas or films without English subtitles (or with Chinese subs).",
      "Keep a 错误记录本 (error log): write every mistake you make and the correct version.",
      "Expose yourself to different 方言影响的普通话 accents — southern, northern, etc.",
    ],
    links: [
      { label: "Start HSK 5 Lessons →",    view: "lessons",    level: 5 },
      { label: "HSK 5 Flashcards →",       view: "flashcards",  level: 5 },
      { label: "Advanced Reading →",       view: "reading",    level: 5 },
      { label: "Full HSK 5 Exam →",        view: "exam",       level: 5 },
    ]
  },
};

export class StudyPlanView extends View {
  constructor() {
    super('studyplan');
    this._currentLevel = 1;
    this._idiomIndex   = -1;
  }

  onActivate() {
    this._renderIdiom();
    this._renderPlan(this._currentLevel);
    this._bindEvents();
  }

  // ---- Idiom of the Day ----
  _renderIdiom() {
    if (typeof CHENGYU_DATA === 'undefined' || !CHENGYU_DATA.length) return;
    if (this._idiomIndex < 0) {
      this._idiomIndex = Math.floor(Math.random() * CHENGYU_DATA.length);
    }
    const cy = CHENGYU_DATA[this._idiomIndex];
    const el = document.getElementById('sp-idiom-box');
    if (!el) return;
    el.innerHTML = `
      <div class="sp-idiom-chars">${cy.chars}</div>
      <div class="sp-idiom-pinyin">${cy.pinyin}</div>
      <div class="sp-idiom-meaning">${cy.meaning}</div>
      <div class="sp-idiom-literal">Literal: "${cy.literal}"</div>
      <div class="sp-idiom-example">
        <span class="sp-eg-cn">${cy.example}</span>
        <span class="sp-eg-en">${cy.exampleMeaning}</span>
      </div>
      <div class="sp-idiom-origin">${cy.origin}</div>
    `;
  }

  _nextIdiom() {
    if (typeof CHENGYU_DATA === 'undefined' || !CHENGYU_DATA.length) return;
    this._idiomIndex = (this._idiomIndex + 1) % CHENGYU_DATA.length;
    this._renderIdiom();
  }

  // ---- Study Plan ----
  _renderPlan(level) {
    this._currentLevel = level;
    const plan = PLANS[level];
    if (!plan) return;

    // Update active tab
    document.querySelectorAll('.sp-tab').forEach(t => {
      t.classList.toggle('active', parseInt(t.dataset.level, 10) === level);
    });

    const container = document.getElementById('sp-plan-content');
    if (!container) return;

    const weeksHtml = plan.weeks.map((w, i) => `
      <div class="sp-week">
        <div class="sp-week-header">
          <span class="sp-week-num">Week ${i + 1}</span>
          <span class="sp-week-label">${w.label.replace(/^Week \d+ — /, '')}</span>
        </div>
        <ul class="sp-task-list">
          ${w.tasks.map(t => `<li class="sp-task"><span class="sp-task-icon">📌</span>${t}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    const tipsHtml = plan.tips.map(tip => `
      <li class="sp-tip"><span class="sp-tip-icon">💡</span>${tip}</li>
    `).join('');

    const linksHtml = plan.links.map(link => `
      <button class="btn btn-outline btn-sm sp-link-btn"
              data-view="${link.view}" ${link.level ? `data-level="${link.level}"` : ''}>
        ${link.label}
      </button>
    `).join('');

    container.innerHTML = `
      <div class="sp-plan-header">
        <h2 class="sp-plan-title">${plan.title}</h2>
        <p class="sp-plan-goal">${plan.goal}</p>
      </div>
      <div class="sp-weeks-grid">${weeksHtml}</div>
      <div class="sp-tips-section">
        <h3 class="sp-section-title">💡 Learning Tips</h3>
        <ul class="sp-tips-list">${tipsHtml}</ul>
      </div>
      <div class="sp-links-section">
        <h3 class="sp-section-title">🚀 Jump In</h3>
        <div class="sp-links-row">${linksHtml}</div>
      </div>
    `;

    // Bind quick-link buttons
    container.querySelectorAll('.sp-link-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const view  = btn.dataset.view;
        const level = btn.dataset.level ? parseInt(btn.dataset.level, 10) : undefined;
          router.navigate(view, level ? { level } : {});
      });
    });
  }

  _bindEvents() {
    // Idiom next button
    const nextBtn = document.getElementById('sp-idiom-next');
    if (nextBtn) {
      // Clone to remove previous listeners
      const fresh = nextBtn.cloneNode(true);
      nextBtn.replaceWith(fresh);
      fresh.addEventListener('click', () => this._nextIdiom());
    }

    // Level tabs
    document.querySelectorAll('.sp-tab').forEach(tab => {
      const fresh = tab.cloneNode(true);
      tab.replaceWith(fresh);
      fresh.addEventListener('click', () => {
        this._renderPlan(parseInt(fresh.dataset.level, 10));
        // Re-bind after re-render
        document.querySelectorAll('.sp-tab').forEach(t => {
          t.addEventListener('click', () => {
            this._renderPlan(parseInt(t.dataset.level, 10));
          });
        });
      });
    });
  }
}
