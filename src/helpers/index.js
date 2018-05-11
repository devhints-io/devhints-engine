/**
 * Unpath helper
 * Remove the unnecessary slashes
 */

export function unpath (path) {
  return path.replace(/^\//, '')
}
