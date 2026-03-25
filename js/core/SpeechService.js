// =============================================
//  SPEECH SERVICE  — Facade pattern
//  Thin wrapper over the Web Speech API.
//  Callers don't need to know API details.
// =============================================

class SpeechService {
  /**
   * Speak `text` using the platform TTS voice for `lang`.
   * Cancels any currently-speaking utterance first.
   * Fails silently if the API is unavailable (e.g. old browsers).
   *
   * @param {string} text
   * @param {string} [lang='zh-CN']
   * @param {number} [rate=0.8]  slower than default for learning clarity
   */
  speak(text, lang = 'zh-CN', rate = 0.8) {
    if (!window.speechSynthesis || !text) return;
    window.speechSynthesis.cancel();
    const utt  = new SpeechSynthesisUtterance(text);
    utt.lang  = lang;
    utt.rate  = rate;
    window.speechSynthesis.speak(utt);
  }

  /** @returns {boolean} */
  get isSupported() {
    return !!window.speechSynthesis;
  }
}

// Singleton
export const speechService = new SpeechService();
