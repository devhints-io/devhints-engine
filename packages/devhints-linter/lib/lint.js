/* @flow */

const yaml = require('js-yaml')
const { fixAttributes } = require('./fix_attributes')

/*::
  import type { Document, Result } from './types'
*/

/**
 * Lints a document.
 * @returns a `Result`.
 */

function lint (document /*: Document */) {
  // Pass thru an error
  if (document.error) {
    return {
      document,
      status: 'error',
      output: document.rawBody,
      error: document.error
    }
  }

  // Fix up attributes
  document = {
    ...document,
    attributes: fixAttributes(document)
  }

  // Re-serialize into a new `output`
  const output /*: string */ = serialize(document)

  const status = output === document.rawBody ? 'ok' : 'fixed'

  const result /*: Result */ = { document, status, output }

  return result
}

/**
 * Serialize a document into a file string contents.
 */

function serialize (doc /*: Document */) {
  const { attributes, body } = doc

  const matter /*: string */ = yaml.safeDump(attributes).trim()
  const rawBody /*: string */ = `---\n${matter}\n---\n${body || ''}`

  return rawBody
}

/*
 * Export
 */

module.exports = { serialize, lint }
