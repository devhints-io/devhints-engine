/**
 * Unpath helper
 * Remove the unnecessary slashes
 */

export function unpath(path: string): string {
  return path.replace(/^\//, '')
}

/**
 * Convert pathname to keywords.
 *
 *     keywordify('/gatsby') => 'gatsby'
 *     keywordify('/rails/models.html') => 'rails-models'
 *     keywordify(null) => null
 */

export function keywordify(str: string | null | void) {
  if (!str) {
    return null
  }

  return str
    .slice(1)
    .replace(/^cheatsheets-ng\//, '')
    .replace(/\//g, '-')
    .replace(/ /g, '_')
    .replace(/\.html$/, '')
}
