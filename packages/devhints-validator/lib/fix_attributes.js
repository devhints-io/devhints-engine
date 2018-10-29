/* @flow */

const { basename } = require('path')

/*::
  import type { Document, Attributes } from './types'
*/

function fixAttributes(document /*: Document */) {
  let attrs /*: Attributes */ = document.attributes || {}

  // Infer `path` if it's missing
  if (!attrs.path) {
    const base /*: string */ = basename(document.path || 'untitled', '.md')
    attrs = { ...attrs, path: `/${base}` }
  }

  return attrs
}

module.exports = { fixAttributes }
