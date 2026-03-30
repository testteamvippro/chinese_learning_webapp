# Learn Chinese — HSK 1 to HSK 9

A free, open-source Chinese vocabulary learning webapp — no build step, pure HTML/CSS/JS, ready to deploy on **GitHub Pages** in one click. Supports offline use as a Progressive Web App.

## Features

- **HSK 1 – HSK 9** vocabulary (~5,400+ words across 9 levels)
- **14 study views** — lessons, flashcards, grammar, reading, chengyu, writing, dictionary, quiz, exam, and more
- **Spaced Repetition (SRS)** — SM-2 algorithm in flashcard mode schedules reviews at optimal intervals
- **AI Teacher** — conversational Chinese tutor powered by Google Gemini 2.0 Flash
- **Lessons view** — searchable vocabulary cards with characters, pinyin, tone colours, and example sentences
- **Flashcard mode** — flip cards with shuffle, self-rating (Easy / OK / Hard), and SRS scheduling
- **Quiz & Exam** — multiple-choice quizzes and timed mock exams
- **Grammar patterns** — 42 sentence structures with search and pinyin toggle
- **Reading passages** — 10+ graded texts across HSK levels
- **Chengyu (成语)** — 45+ four-character idioms with stories, examples, and usage notes
- **Writing practice** — character stroke practice with virtual teacher scoring
- **Study planner** — 4-week study plans and "Idiom of the Day"
- **Dictionary** — full-text search across the entire vocabulary database
- **Progress tracking** — words marked as learned are saved to `localStorage`
- **PWA / Offline** — installable as an app with service worker caching
- **Tone colour system** — Tone 1 blue, Tone 2 green, Tone 3 amber, Tone 4 red
- **Text-to-speech** — native browser speech synthesis for pronunciation
- **Dark mode UI** — designed for long study sessions
- **Mobile responsive**

## Live Demo

> After deploying, your site will be at:  
> `https://<your-username>.github.io/<repo-name>/`

## Deploy to GitHub Pages

### Option A — Automatic (GitHub Actions, recommended)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the workflow at `.github/workflows/deploy.yml` deploys automatically

### Option B — Manual (root folder)

1. Go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose `main` branch, `/ (root)` folder
4. Click **Save**

## Local Development

No build step needed — just open `index.html` in a browser, or use any static file server:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

## Project Structure

```
index.html          — Single-page app shell
style.css           — All styles (dark theme, responsive)
manifest.json       — PWA manifest
sw.js               — Service worker (offline caching)
data.js             — HSK 1–5 base vocabulary
data_extended.js    — HSK 6 vocab, chengyu, reading passages, grammar
data_hsk789.js      — HSK 7–9 advanced vocabulary
data_vocab_*.js     — Expanded vocabulary supplements
hsk_meta.js         — Per-level metadata (CEFR mapping, topics, word counts)
js/
  app.js            — App entry point, router setup, view registration
  core/
    DictionaryDB.js — Full-text dictionary search engine
    EventBus.js     — Pub/sub event system
    ProgressStore.js— localStorage progress persistence
    Router.js       — Hash-based SPA router
    SpeechService.js— Web Speech API wrapper
    SRSEngine.js    — SM-2 spaced repetition algorithm
    utils.js        — Shared helpers
  views/            — 14 view modules (Home, Lessons, Flashcard, Quiz, …)
```

## HSK Levels Covered

| Level | Stage | Cumulative Words | CEFR |
|-------|-------|-----------------|------|
| HSK 1 | Beginner | 500 | A1 |
| HSK 2 | Elementary | 1,272 | A2 |
| HSK 3 | Pre-Intermediate | 2,245 | B1 |
| HSK 4 | Intermediate | 3,245 | B1+ |
| HSK 5 | Upper-Intermediate | 4,316 | B2 |
| HSK 6 | Advanced | 5,456 | C1 |
| HSK 7 | Expert | 5,456+ | C1+ |
| HSK 8 | Expert | 5,456+ | C2 |
| HSK 9 | Master | 5,456+ | C2 |

## AI Teacher Setup

The AI Teacher feature requires a **Google Gemini API key** (free tier available):

1. Get a key at [aistudio.google.com](https://aistudio.google.com/)
2. Open the app → navigate to **AI Teacher**
3. Enter your API key when prompted (stored locally in `localStorage`)

## Contributing

Pull requests welcome! To add vocabulary, edit the relevant data file and follow the existing format:

```js
{
  char: "汉字",
  pinyin: "hànzì",
  tone: 4,          // 1–4, 5 = neutral
  meaning: "Chinese character",
  pos: "noun",
  example: "我学汉字。",
  exampleMeaning: "I study Chinese characters."
}
```

## License

MIT — free to use, share, and modify.
