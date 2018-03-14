const fastmatter = require('fastmatter')
const fs = require('fs')
const concat = require('concat-stream')
const yaml = require('js-yaml')
const glob = require('glob').sync
const flatten = require('array-flatten').depth

/*::
   export type Meta = Object

   export type Document = {
    path: string, // => '/path/to/file.md'
    meta: Object, // parsed frontmatter
    body: string  // raw body text
   }

   export type Result = {
     status: 'ok',
     messages?: Array<Message>,
     document?: Document
   }

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

async function runFile (filename /*: string */, options = {}) /*: Result */ {
  const result /*: Document */ = await read(filename)
  const { document } = lint(result)
  const output /*: string */ = serialize(document)

  // Fix in place
  if (options.fix) {
    const result = await writeFile(filename, output)
    return result
  } else {
    // TODO return if changed
  }
}

/**
 * Updates a file.
 *
 * Returns either `{status: 'fixed'}` or `{status: 'ok'}`.
 */

async function writeFile (
  filename /*: string */,
  output /*: string */
) /*: Result */ {
  const input /*: string */ = fs.readFileSync(filename, 'utf-8')
  if (input === output) return { status: 'ok' }

  fs.writeFileSync(filename, output, 'utf-8')
  return { status: 'fixed' }
}

/**
 * Read a file into a Document.
 * Returns a promise that resolves into `{path, meta, body}`.
 */

function read (path /*: string */) /*: Promise<Document> */ {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path).pipe(
      fastmatter.stream(function (meta /*: Meta */) {
        this.pipe(
          concat((body /*: Buffer */) => {
            resolve({ path, meta, body: body.toString() })
          })
        )
      })
    )
  })
}

/**
 * Lints
 */

function lint (document /*: Document */) {
  const messages = []
  const result /*: Result */ = { document, status: 'ok', messages }

  return result
}

/**
 * Serialize a document into a file string contents.
 */

function serialize ({ meta, body } /*: Document */) {
  return `---\n${yaml.safeDump(meta).trim()}\n---\n${body}`
}

/*
 * Export
 */

module.exports = { lint, serialize, read, run }
