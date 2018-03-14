const fastmatter = require('fastmatter')
const fs = require('fs')
const concat = require('concat-stream')
const yaml = require('js-yaml')
const glob = require('glob').sync

/*::
   export type Meta = Object

   export type Document = {
    path: string, // => '/path/to/file.md'
    meta: Object, // parsed frontmatter
    body: string  // raw body text
   }

   export type Result = {
     status: 'ok',
     messages: Array<Message>,
     document: Document
   }

   export type Message = {
     message: string
   }
 */

/**
 * RUN!
 */

function run (argv, options = {}) {
  argv.map(spec => glob(spec)).forEach(files => {
    files.forEach(file => {
      runFile(file, options)
    })
  })
}

/**
 * Runs a file.
 */

async function runFile (filename /*: rtsing */, options = {}) {
  const result /*: Document */ = await read(filename)
  const { document, messages } = lint(result)
  const output /*: string */ = serialize(document)

  console.log(output)
  console.warn(messages)
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
