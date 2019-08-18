/* @flow */

const fastmatter = require('fastmatter')
const { readFile, writeFile } = require('fs-extra')
const glob = require('glob').sync
const flatten = require('array-flatten').depth

const { lint } = require('./lint')

/*::
  import type { Attributes, Document, Result, RunOptions } from './types'
 */

/**
 * RUN!
 */

async function run(argv /*: Array<string> */, options /*: RunOptions */ = {}) {
  const filesLists /*: Array<Array<string>> */ = argv.map(spec => glob(spec))
  const files /*: Array<string> */ = flatten(filesLists, 1)
  const results /*: Array<Result> */ = await Promise.all(
    files.map(file => {
      return runFile(file, options)
    })
  )

  const all = results
  const fixeds = results.filter(res => res.status === 'fixed')
  const errors = results.filter(res => res.status === 'error')
  const oks = results.filter(res => res.status === 'ok')

  if (all.length === oks.length) {
    return { code: 0, summary: `${all.length} files OK`, messages: [] }
  } else {
    let isSuccess = options.fix && errors.length === 0
    const filenames = fixeds.concat(errors).map(res => res.document.path)
    let messages

    if (!options.fix) {
      messages = [
        'These files require updating:',
        '',
        ...filenames.map(f => `    ${f}`),
        '',
        "Run sheet-linter with '--fix' to automatically sort these out."
      ]
    } else {
      messages = [
        'These files have been updated:',
        '',
        ...filenames.map(f => `    ${f}`)
      ]
    }

    return {
      code: isSuccess ? 0 : 16,
      summary: `${all.length} files, ${fixeds.length} fixed, ${errors.length} failed`,
      messages
    }
  }
}

/**
 * Runs a file.
 *
 * @returns a Promise that resolves into a `Result`.
 *
 * @example
 *     const res = await runFile('sheet/react.md', {})
 *     console.log(res.status)
 */

async function runFile(
  path /*: string */,
  options = {}
) /*: Promise<Result> */ {
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
 */

async function writeResult(result /*: Result */) {
  const doc = result.document
  if (!doc) return

  await writeFile(doc.path, result.output, 'utf-8')
}

/**
 * Returns a `Document` given a filename `path`.
 *
 * @returns a Promise that resolves into a `Document`.
 *
 * @example
 *     const doc = await fetchDoc('sheets/react.md')
 *
 */

async function fetchDoc(path /*: string */) /*: Promise<Document> */ {
  const rawBody = await readFile(path, 'utf-8')
  const doc /*: Document */ = { path, rawBody }
  return doc
}

/**
 * Parse frontmatter out of a file
 */

async function parseMatter(doc /*: Document */) {
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

module.exports = { run, fetchDoc, parseMatter }
