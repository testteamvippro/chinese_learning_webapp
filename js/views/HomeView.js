import { View } from './View.js';

const TIPS = [
  // ── Pronunciation & Tones ──
  { text: "The four tones are the DNA of Mandarin. Practice them with minimal pairs: mā (妈 mother), má (麻 hemp), mǎ (马 horse), mà (骂 scold).", cat: "Pronunciation" },
  { text: "Tone 3 before another Tone 3 changes to Tone 2. For example, 你好 (nǐhǎo) is actually pronounced \"níhǎo\".", cat: "Pronunciation" },
  { text: "不 (bù) changes to bú before a Tone 4 word: 不是 → búshì, 不对 → búduì.", cat: "Pronunciation" },
  { text: "Record yourself speaking and compare with native audio. Your ears adapt faster than your mouth — listening to yourself closes the gap.", cat: "Pronunciation" },
  { text: "Exaggerate tones when practising. It feels silly, but it builds muscle memory. You can relax into natural speech later.", cat: "Pronunciation" },

  // ── Characters & Writing ──
  { text: "Learn radicals (部首) early — they're the building blocks of characters. 氵= water, 木 = wood, 心 = heart, 火 = fire.", cat: "Characters" },
  { text: "Write each new character 5× by hand. Muscle memory helps recognition far more than passive reading.", cat: "Characters" },
  { text: "Many characters are composed of a meaning component (radical) and a sound component. 妈 = 女 (woman) + 马 (mǎ sound).", cat: "Characters" },
  { text: "Learn stroke order — it's not arbitrary. Correct stroke order makes characters look natural and helps with handwriting recognition.", cat: "Characters" },
  { text: "The 214 Kangxi radicals appear in nearly every character. Learn the top 50 and you'll decode thousands of characters.", cat: "Characters" },

  // ── Vocabulary ──
  { text: "Learn words in context, not isolation. A word in a sentence sticks 3× better than a word on a flashcard.", cat: "Vocabulary" },
  { text: "Group vocabulary thematically: all emotion words together, all food words together. The brain stores categories more efficiently.", cat: "Vocabulary" },
  { text: "Use the SRS flashcard mode daily — even 5 minutes of spaced repetition is more effective than 30 minutes of cramming.", cat: "Vocabulary" },
  { text: "When you learn a new word, immediately make a personal sentence with it. \"My\" sentences are stickier than textbook examples.", cat: "Vocabulary" },
  { text: "Pay attention to measure words (量词). Each noun has a specific one: 一本书 (books), 一杯水 (cups), 一只猫 (animals).", cat: "Vocabulary" },
  { text: "两 (liǎng) is used before measure words instead of 二 (èr): say 两个人, not 二个人.", cat: "Vocabulary" },

  // ── Grammar ──
  { text: "Chinese word order: Subject + Time + Place + Verb + Object. Location always comes BEFORE the verb.", cat: "Grammar" },
  { text: "没有 is the ONLY correct negation for 有. Never say 不有 — it doesn't exist in Chinese.", cat: "Grammar" },
  { text: "了 has two jobs: completed action (verb + 了) and change of state (sentence + 了). Learn them separately.", cat: "Grammar" },
  { text: "把 sentences (把字句) require a result after the verb: 我把书看完了 ✓. Not: 我把书看 ✗.", cat: "Grammar" },
  { text: "Don't use 很 with 比: say 他比我高 (He's taller than me), NOT 他比我很高.", cat: "Grammar" },
  { text: "是...的 is used to emphasise when, where, or how something happened: 我是昨天来的 (I came yesterday).", cat: "Grammar" },

  // ── Study Habits ──
  { text: "Consistency beats intensity. 15 minutes every day outperforms a 3-hour weekend cram session.", cat: "Study Habits" },
  { text: "Label objects around your home with their Chinese names. Passive exposure adds up to hours of free practice.", cat: "Study Habits" },
  { text: "Keep a 错误记录本 (error log): write every mistake and the correct version. Review it weekly.", cat: "Study Habits" },
  { text: "Set your phone language to Chinese. You already know where everything is — now you learn the words.", cat: "Study Habits" },
  { text: "The forgetting curve is steep: review new words within 24 hours or you lose ~70% of what you learned.", cat: "Study Habits" },
  { text: "Don't skip tones when writing pinyin in your notes. Practicing tone-less pinyin creates bad habits.", cat: "Study Habits" },

  // ── Listening & Speaking ──
  { text: "Shadow native speakers: listen to a sentence, pause, and immediately repeat it with the same rhythm and tone.", cat: "Listening" },
  { text: "Watch Chinese shows with Chinese subtitles (not English). Your brain learns to connect sound to characters.", cat: "Listening" },
  { text: "Listen to Mandarin podcasts at normal speed for 15 min/day. Comprehension improves even when you don't understand everything.", cat: "Listening" },
  { text: "Talk to yourself in Chinese. Narrate what you're doing: 我在做饭 (I'm cooking), 我要出去 (I'm going out).", cat: "Speaking" },

  // ── Reading ──
  { text: "Read the same passage multiple times. The first read is for gist, the second for detail, the third for fluency.", cat: "Reading" },
  { text: "At HSK 4+, try reading without pinyin. Wean off pronunciation crutches to build true character recognition.", cat: "Reading" },
  { text: "Children's books and graded readers are not embarrassing — they're the fastest path to reading fluency.", cat: "Reading" },

  // ── Culture & Chengyu ──
  { text: "Learn one 成语 (chéngyǔ) per day. These 4-character idioms reveal Chinese philosophy and impress native speakers.", cat: "Culture" },
  { text: "Chinese culture values indirect communication. Understanding context (语境) is as important as understanding words.", cat: "Culture" },
  { text: "Numbers carry meaning in Chinese culture: 8 (八 bā) = luck/fortune, 4 (四 sì) = avoid (sounds like 死 death).", cat: "Culture" },
  { text: "Politeness in Chinese uses different strategies than English. 请 (please), 谢谢, and 不好意思 are your three best friends.", cat: "Culture" },

  // ── Motivation ──
  { text: "You don't need to be perfect. Native speakers appreciate effort — even a 你好 with the right tone opens doors.", cat: "Motivation" },
  { text: "Every character you learn is a small victory. HSK 1's 150 words let you handle basic daily life in China.", cat: "Motivation" },
  { text: "Mandarin has no verb conjugation, no plurals, no articles. In many ways, grammar is simpler than European languages.", cat: "Motivation" },
  { text: "Celebrate milestones: 100 characters, first conversation, first joke understood. Progress is rarely linear — but it's always happening.", cat: "Motivation" },
];

export class HomeView extends View {
  constructor() {
    super('home');
    this._tipIndex = this._getDailyIndex();
  }

  onActivate() {
    this._renderTip();
    const nextBtn = document.getElementById('daily-tip-next');
    if (nextBtn) {
      this._onNext = () => { this._tipIndex = (this._tipIndex + 1) % TIPS.length; this._renderTip(); };
      nextBtn.addEventListener('click', this._onNext);
    }
  }

  onDeactivate() {
    const nextBtn = document.getElementById('daily-tip-next');
    if (nextBtn && this._onNext) nextBtn.removeEventListener('click', this._onNext);
  }

  _renderTip() {
    const tip = TIPS[this._tipIndex];
    const textEl = document.getElementById('daily-tip-text');
    const catEl = document.getElementById('daily-tip-category');
    if (textEl) textEl.textContent = tip.text;
    if (catEl) catEl.textContent = tip.cat;
  }

  /** Deterministic daily index based on date, so every user sees the same tip each day */
  _getDailyIndex() {
    const d = new Date();
    const dayNum = Math.floor(d.getTime() / 86400000);
    return dayNum % TIPS.length;
  }
}
