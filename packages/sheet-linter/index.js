// @flow

const fastmatter = require('fastmatter')
const fs = require('fs')
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

function run (argv, options = {}) {
  const filesLists = argv.map(spec => glob(spec))
  const files /*: Array<string> */ = flatten(filesLists, 1)
  const results /*: Array<Result> */ = files.map(file => {
    return runFile(file, options)
  })

  // Count results
  const count = {
    all: results.length,
    fixed: results.filter(res => res.status === 'fixed').length,
    error: results.filter(res => res.status === 'error').length,
    ok: results.filter(res => res.status === 'ok').length
  }

  if (count.all === count.ok) {
    return { code: 0, message: `${count.all} files OK` }
  } else {
    return {
      code: 16,
      message: `${count.all} files, ${count.fixed} fixed, ${count.error} failed`
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
  await writeFile(doc.filename, result.output, 'utf-8')
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
