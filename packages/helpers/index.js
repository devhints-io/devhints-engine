// @flow

/**
 * Convert pathname to keywords.
 *
 *     keywordify('/gatsby') => 'gatsby'
 *     keywordify('/rails/models.html') => 'rails-models'
 *     keywordify(null) => null
 */

export function keywordify (str /*: ?string */) /*: ?string */ {
  if (!str) return null

  return str
    .slice(1)
    .replace(/^cheatsheets-ng\//, '')
    .replace(/\//g, '-')
    .replace(/ /g, '_')
    .replace(/\.html$/, '')
}
