import { View } from './View.js';
import { escHtml } from '../core/utils.js';

// =============================================
//  AI TEACHER VIEW  — Gemini-powered Chinese tutor
//  Uses Google Generative Language API (free tier).
//  API key stored in localStorage (never sent to our server).
// =============================================

const STORAGE_KEY = 'aiteacher_api_key';
const HISTORY_KEY = 'aiteacher_history';
const MODEL       = 'gemini-2.0-flash';
const API_BASE    = 'https://generativelanguage.googleapis.com/v1beta/models';

const SYSTEM_PROMPT = `You are 小白老师 (Xiǎobái Lǎoshī), a warm, encouraging, and expert Chinese language tutor.

Your responsibilities:
• Teach Chinese (Mandarin) at the learner's current level (HSK 1–9).
• Explain grammar patterns clearly with pinyin + English translations.
• Correct learner sentences — show the fix, explain the error, then give a model sentence.
• Provide vocabulary drills, mini-quizzes, and conversation practice on demand.
• When the learner asks about a character, explain stroke order, radicals, and mnemonics.
• Sprinkle in cultural tips and 成语 (chéngyǔ) when relevant.
• Always format Chinese text with pinyin underneath and English translation.
• Use markdown formatting: **bold** for key terms, bullet lists for clarity.
• Keep answers concise but thorough — no walls of text.
• If the learner writes in Chinese, respond primarily in Chinese (with pinyin) and add brief English notes.
• If the learner writes in English or Vietnamese, respond mainly in that language but include Chinese examples.
• Be positive, patient, and celebrate progress.`;

const QUICK_PROMPTS = [
  { icon: '📖', label: 'Explain grammar',    text: 'Can you explain a common Chinese grammar pattern at my level with examples?' },
  { icon: '📝', label: 'Correct my sentence', text: 'I want you to correct a Chinese sentence I\'ll write. Please explain any errors and give the correct version with pinyin.' },
  { icon: '🗣️', label: 'Conversation practice', text: 'Let\'s practice a short daily conversation in Chinese. Start a dialogue and I\'ll respond.' },
  { icon: '🔤', label: 'Teach vocabulary',    text: 'Teach me 5 useful Chinese words I might not know yet, with example sentences and pinyin.' },
  { icon: '✍️', label: 'Character breakdown', text: 'Pick an interesting Chinese character and teach me its radicals, stroke order, meaning and a mnemonic.' },
  { icon: '🧩', label: 'Mini quiz',           text: 'Give me a quick 5-question Chinese quiz mixing grammar, vocab and translation.' },
];

export class AITeacherView extends View {
  constructor() {
    super('aiteacher');
    this._messages  = [];   // {role:'user'|'model', text:string}
    this._loading   = false;
    this._apiKey    = localStorage.getItem(STORAGE_KEY) || '';
  }

  /* ---- lifecycle ---- */
  onActivate() {
    this._loadHistory();
    this._render();
    this._bindEvents();
    this._scrollToBottom();
  }

  /* ---- persistence ---- */
  _loadHistory() {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      this._messages = raw ? JSON.parse(raw) : [];
    } catch { this._messages = []; }
  }
  _saveHistory() {
    try {
      // keep last 50 messages to avoid quota
      const trimmed = this._messages.slice(-50);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmed));
    } catch { /* quota exceeded — ignore */ }
  }

  /* ---- rendering ---- */
  _render() {
    const root = document.getElementById('aiteacher-root');
    if (!root) return;

    root.innerHTML = `
      ${this._renderSetup()}
      <div class="ait-chat-area" id="ait-chat-area">
        ${this._messages.length === 0 ? this._renderWelcome() : ''}
        ${this._messages.map(m => this._renderBubble(m)).join('')}
        ${this._loading ? '<div class="ait-bubble ait-model"><div class="ait-typing"><span></span><span></span><span></span></div></div>' : ''}
      </div>
      <div class="ait-input-bar">
        <textarea id="ait-input" class="ait-input" placeholder="Ask your Chinese teacher anything…" rows="1"${!this._apiKey ? ' disabled' : ''}></textarea>
        <button class="ait-send-btn" id="ait-send"${!this._apiKey ? ' disabled' : ''}>Send</button>
      </div>
    `;
  }

  _renderSetup() {
    const masked = this._apiKey ? '••••••••' + this._apiKey.slice(-4) : '';
    return `
      <div class="ait-setup${this._apiKey ? ' ait-setup-compact' : ''}">
        ${!this._apiKey ? `
          <div class="ait-setup-intro">
            <h3>🔑 Connect your AI Teacher</h3>
            <p>Enter a <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">free Google Gemini API key</a> to start chatting with your personal Chinese tutor. Your key is stored locally and never sent to our server.</p>
          </div>
        ` : ''}
        <div class="ait-key-row">
          ${this._apiKey
            ? `<span class="ait-key-status">🟢 API key: ${escHtml(masked)}</span>
               <button class="ait-key-clear" id="ait-key-clear">Change key</button>
               <button class="ait-clear-chat" id="ait-clear-chat">Clear chat</button>`
            : `<input type="password" id="ait-key-input" class="ait-key-input" placeholder="Paste Gemini API key…" autocomplete="off">
               <button class="ait-key-save" id="ait-key-save">Connect</button>`
          }
        </div>
      </div>
    `;
  }

  _renderWelcome() {
    const pills = QUICK_PROMPTS.map(q =>
      `<button class="ait-quick-btn" data-prompt="${escHtml(q.text)}">${q.icon} ${escHtml(q.label)}</button>`
    ).join('');
    return `
      <div class="ait-welcome">
        <div class="ait-avatar-lg">小白<br>老师</div>
        <h3>你好! I'm your AI Chinese teacher</h3>
        <p>Ask me anything about Chinese — grammar, vocabulary, characters, conversation practice, or sentence correction.</p>
        <div class="ait-quick-row">${pills}</div>
      </div>
    `;
  }

  _renderBubble(msg) {
    const cls = msg.role === 'user' ? 'ait-user' : 'ait-model';
    const html = msg.role === 'model' ? this._mdToHtml(msg.text) : escHtml(msg.text);
    return `<div class="ait-bubble ${cls}">${html}</div>`;
  }

  /** Minimal markdown → HTML (bold, italic, lists, code, line breaks) */
  _mdToHtml(md) {
    let s = escHtml(md);
    // code blocks
    s = s.replace(/```([\s\S]*?)```/g, '<pre class="ait-pre">$1</pre>');
    // inline code
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    // bold
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // italic
    s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
    // unordered lists
    s = s.replace(/^[•\-]\s+(.+)$/gm, '<li>$1</li>');
    s = s.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
    // numbered lists
    s = s.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
    // line breaks
    s = s.replace(/\n/g, '<br>');
    return s;
  }

  /* ---- events ---- */
  _bindEvents() {
    const send   = () => { const v = document.getElementById('ait-input')?.value?.trim(); if (v) this._send(v); };

    document.getElementById('ait-send')?.addEventListener('click', send);
    document.getElementById('ait-input')?.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    });

    // auto-resize textarea
    document.getElementById('ait-input')?.addEventListener('input', e => {
      e.target.style.height = 'auto';
      e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
    });

    // API key save
    document.getElementById('ait-key-save')?.addEventListener('click', () => {
      const key = document.getElementById('ait-key-input')?.value?.trim();
      if (!key) return;
      this._apiKey = key;
      localStorage.setItem(STORAGE_KEY, key);
      this._render();
      this._bindEvents();
    });

    // API key change
    document.getElementById('ait-key-clear')?.addEventListener('click', () => {
      this._apiKey = '';
      localStorage.removeItem(STORAGE_KEY);
      this._render();
      this._bindEvents();
    });

    // Clear chat
    document.getElementById('ait-clear-chat')?.addEventListener('click', () => {
      this._messages = [];
      localStorage.removeItem(HISTORY_KEY);
      this._render();
      this._bindEvents();
    });

    // Quick prompt buttons
    document.querySelectorAll('.ait-quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const prompt = btn.dataset.prompt;
        if (prompt) this._send(prompt);
      });
    });
  }

  /* ---- API call ---- */
  async _send(text) {
    if (!this._apiKey || this._loading) return;

    this._messages.push({ role: 'user', text });
    this._loading = true;
    this._render();
    this._bindEvents();
    this._scrollToBottom();

    try {
      const body = this._buildRequestBody(text);
      const url  = `${API_BASE}/${MODEL}:generateContent?key=${this._apiKey}`;

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error?.message || `API error ${res.status}`);
      }

      const data = await res.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '(No response)';
      this._messages.push({ role: 'model', text: reply });
      this._saveHistory();
    } catch (err) {
      this._messages.push({ role: 'model', text: `⚠️ **Error:** ${err.message}\n\nPlease check your API key or try again.` });
    } finally {
      this._loading = false;
      this._render();
      this._bindEvents();
      this._scrollToBottom();
    }
  }

  _buildRequestBody() {
    // Build Gemini conversation format
    const contents = [];

    // Convert our message history to Gemini format
    for (const msg of this._messages) {
      contents.push({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }],
      });
    }

    return {
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1500,
        topP: 0.9,
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT',       threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_HATE_SPEECH',      threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
      ],
    };
  }

  _scrollToBottom() {
    requestAnimationFrame(() => {
      const area = document.getElementById('ait-chat-area');
      if (area) area.scrollTop = area.scrollHeight;
    });
  }
}
