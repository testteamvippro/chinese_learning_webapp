import { View } from './View.js';

/** Home view — entirely static HTML, nothing to render dynamically. */
export class HomeView extends View {
  constructor() {
    super('home');
  }
  // onActivate intentionally empty — static hero content
}
