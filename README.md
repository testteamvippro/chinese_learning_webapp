# Learn Chinese — HSK 1 to HSK 5

A free, open-source Chinese vocabulary learning webapp — no build step, pure HTML/CSS/JS, ready to deploy on **GitHub Pages** in one click.

## Features

- **HSK 1 – HSK 5** vocabulary (150+ words per level)
- **Lessons view** — searchable vocabulary cards with characters, pinyin, tone colours, and example sentences
- **Flashcard mode** — flip cards with shuffle, prev/next, and self-rating (Easy / OK / Hard)
- **Multiple choice quiz** — 10 random questions per session with instant feedback
- **Progress tracking** — words marked as learned are saved to `localStorage`
- **Tone colour system** — Tone 1 = blue, Tone 2 = green, Tone 3 = amber, Tone 4 = red
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

### Option B — Manual (docs/ folder)

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
index.html      — Single-page app shell
style.css       — All styles (dark theme, responsive)
app.js          — Navigation, lessons, flashcards, quiz, progress logic
data.js         — HSK 1–5 vocabulary dataset
.github/
  workflows/
    deploy.yml  — GitHub Actions auto-deploy workflow
```

## HSK Levels Covered

| Level | Name              | Words in app |
|-------|-------------------|--------------|
| HSK 1 | Beginner          | 50           |
| HSK 2 | Elementary        | 45           |
| HSK 3 | Pre-Intermediate  | 35           |
| HSK 4 | Intermediate      | 30           |
| HSK 5 | Upper-Intermediate| 30           |

## Contributing

Pull requests welcome! To add more vocabulary, edit `data.js` and follow the existing format:

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
