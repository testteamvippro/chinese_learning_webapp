// =============================================
//  VIEW BASE CLASS  — Template Method pattern
//
//  The router calls activate() / deactivate().
//  Subclasses override onActivate() / onDeactivate()
//  so the base class always controls the _active flag —
//  no risk of a subclass forgetting to call super().
// =============================================

export class View {
  /**
   * @param {string} viewId   matches the id="view-<viewId>" element in HTML
   */
  constructor(viewId) {
    this.viewId  = viewId;
    this.el      = document.getElementById('view-' + viewId);
    this._active = false;
  }

  // ---- Template method (called by Router — do NOT override) ----

  /** @param {object} params */
  activate(params = {}) {
    this._active = true;
    this.onActivate(params);
  }

  deactivate() {
    this._active = false;
    this.onDeactivate();
  }

  // ---- Lifecycle hooks (override in subclasses) ----

  /** @param {object} params */
  onActivate(params = {}) {}  // eslint-disable-line no-unused-vars
  onDeactivate() {}

  // ---- Convenience DOM helpers scoped to this view ----

  /**
   * querySelector scoped to this view's root element.
   * @param {string} selector
   */
  $(selector) {
    return this.el?.querySelector(selector) ?? null;
  }

  /**
   * querySelectorAll scoped to this view's root element.
   * @param {string} selector
   * @returns {NodeListOf<Element>}
   */
  $$(selector) {
    return this.el?.querySelectorAll(selector) ?? [];
  }
}
