/**
 * Generate a unique identifier
 * @param {string} prefix The identifier prefix
 * @returns {string} The generated identifier
 * @example
 * generateId('button') // returns button-gh76ghF3
 */
export function generateId (prefix) {
  return `${prefix ? prefix + '-' : ''}${Date.now().toString(36) + Math.random().toString(36).substr(2)}`
}
