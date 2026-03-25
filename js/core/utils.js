// =============================================
//  UTILITIES  (pure, no side-effects)
// =============================================

/**
 * Escape a string for safe insertion into HTML.
 * @param {unknown} str
 * @returns {string}
 */
export function escHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Fisher-Yates shuffle — returns a new shuffled array.
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Mark the tab matching `level` as active inside a tab container.
 * @param {string} containerId
 * @param {number} level
 */
export function setActiveTab(containerId, level) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', parseInt(t.getAttribute('data-level')) === level);
  });
}
