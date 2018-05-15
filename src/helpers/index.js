/* @flow */

/**
 * Unpath helper
 * Remove the unnecessary slashes
 */

export function unpath (path: string): string {
  return path.replace(/^\//, '')
}
