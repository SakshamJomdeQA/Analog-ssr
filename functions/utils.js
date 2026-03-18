/**
 * Helper for Cloud Functions. No default export = not deployed as a function.
 * Import in other functions: import { getShortName } from './utils.js';
 */
export function getShortName(name) {
  return name ? String(name).slice(0, 3) : '';
}
