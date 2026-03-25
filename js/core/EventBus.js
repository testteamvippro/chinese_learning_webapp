// =============================================
//  EVENT BUS  — Observer / pub-sub pattern
//  Provides loose coupling between modules.
// =============================================

class EventBus {
  constructor() {
    /** @type {Object<string, Function[]>} */
    this._listeners = Object.create(null);
  }

  /**
   * Subscribe to an event.
   * @param {string} event
   * @param {Function} fn
   * @returns {() => void}  unsubscribe function
   */
  on(event, fn) {
    (this._listeners[event] ??= []).push(fn);
    return () => this.off(event, fn);
  }

  /**
   * Unsubscribe a specific handler.
   * @param {string} event
   * @param {Function} fn
   */
  off(event, fn) {
    if (this._listeners[event]) {
      this._listeners[event] = this._listeners[event].filter(l => l !== fn);
    }
  }

  /**
   * Publish an event to all subscribers.
   * @param {string} event
   * @param {unknown} [data]
   */
  emit(event, data) {
    (this._listeners[event] ?? []).slice().forEach(fn => fn(data));
  }
}

// Singleton — the whole app shares one bus
export const eventBus = new EventBus();
