// =============================================
//  ROUTER  — Registry pattern
//  Views register themselves; the router drives
//  navigation without a growing if/else chain.
// =============================================

class Router {
  constructor() {
    /** @type {Map<string, import('../views/View.js').View>} */
    this._registry = new Map();
    this._current  = null;
    this._currentName = null;
  }

  /**
   * Register a view under a name.  Returns `this` for fluent chaining.
   * @param {string} name
   * @param {import('../views/View.js').View} view
   * @returns {Router}
   */
  register(name, view) {
    this._registry.set(name, view);
    return this;
  }

  /**
   * Navigate to a registered view.
   * @param {string} name
   * @param {object} [params]   forwarded to view.activate(params)
   */
  navigate(name, params = {}) {
    // Deactivate previous view
    if (this._current) this._current.deactivate();

    // Toggle DOM visibility
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const viewEl = document.getElementById('view-' + name);
    if (viewEl) viewEl.classList.add('active');

    const navLink = document.querySelector(`.nav-link[data-view="${name}"]`);
    if (navLink) navLink.classList.add('active');

    // Close mobile nav
    document.querySelector('.main-nav')?.classList.remove('open');

    const view = this._registry.get(name);
    if (!view) {
      console.warn(`[Router] No view registered for "${name}"`);
      return;
    }

    this._current     = view;
    this._currentName = name;
    view.activate(params);
  }

  /** @returns {string|null} */
  getCurrent() { return this._currentName; }
}

// Singleton
export const router = new Router();
