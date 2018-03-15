// @flow

const fastmatter = require('fastmatter')
const { readFile, writeFile } = require('fs-extra')
const yaml = require('js-yaml')
const glob = require('glob').sync
const flatten = require('array-flatten').depth

/*::
   export type Meta = Object

   export type Document = {
    // => '/path/to/file.md'
    path: string,

    // Raw body before parsing
    rawBody: string,

    // parsed frontmatter (unparsed docs dont have attributes)
    attributes?: Meta,

    // body text (unparsed has no body text)
    body?: string,

    // store the last error, eg, when parseMatter() fails
    error?: Error
   }

   export type Result = {
     status: 'ok' | 'fixed' | 'error',
     messages?: Array<Message>,
     document?: Document,
     error?: Error

   export type Message = {
     message: string
   }
 */

/**
 * RUN!
 */

async function run (argv, options = {}) {
  const filesLists = argv.map(spec => glob(spec))
  const files /*: Array<string> */ = flatten(filesLists, 1)
  const results /*: Array<Result> */ = await Promise.all(files.map((file) => {
    return runFile(file, options)
  }))

  const all = results
  const fixeds = results.filter(res => res.status === 'fixed')
  const errors = results.filter(res => res.status === 'error')
  const oks = results.filter(res => res.status === 'ok')

  if (all.length === oks.length) {
    return { code: 0, summary: `${all.length} files OK`, messages: [] }
  } else {
    let isSuccess = options.fix && errors.length === 0
    const filenames = fixeds.concat(errors).map(res => res.document.path)

    const messages = [
      'These files require updating:',
      '',
      ...filenames.map(f => `    ${f}`),
      '',
      "Run sheet-linter with '--fix' to automatically sort these out."
    ]

    return {
      code: (isSuccess ? 0 : 16),
      summary: `${all.length} files, ${fixeds.length} fixed, ${errors.length} failed`,
      messages
    }
  }
}

/**
 * Runs a file.
 */

async function runFile (path /*: string */, options = {}) /*: Result */ {
  let doc /*: Document */
  doc = await fetchDoc(path)
  doc = await parseMatter(doc)

  const result /*: Result */ = lint(doc)

  if (result.status === 'fixed' && options.fix) {
    // Fix in place
    await writeResult(result)
  }

  return result
}

/**
 * Updates a file.
 *
 * Returns either `{status: 'fixed'}` or `{status: 'ok'}`.
 */

async function writeResult (result /*: Result */) {
  const doc = result.document
  await writeFile(doc.path, result.output, 'utf-8')
}

/**
 * Lints
 */

function lint (document /*: Document */) {
  if (document.error) {
    return {
      document,
      status: 'error',
      output: document.rawBody,
      error: document.error
    }
  }

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

  const rawBody /*: string */ = `---\n${yaml
    .safeDump(attributes)
    .trim()}\n---\n${body}`

  return rawBody
}

/**
 * Returns a `Document` given a filename `path`.
 */

async function fetchDoc (path /*: string */) /*: Document */ {
  const rawBody = await readFile(path, 'utf-8')
  const doc /*: Document */ = { path, rawBody }
  return doc
}

/**
 * Parse frontmatter out of a file
 */

async function parseMatter (doc /*: Document */) {
  try {
    const { attributes, body } = fastmatter(doc.rawBody)
    doc = { ...doc, attributes, body }
    return doc
  } catch (error) {
    return { ...doc, error }
  }
}

/*
 * Export
 */

module.exports = { lint, serialize, run, fetchDoc, parseMatter }
