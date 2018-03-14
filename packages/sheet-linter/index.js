/* Lint our sheets */
/* TODO sheet linter */
const fastmatter = require('fastmatter')
const fs = require('fs')
const { resolve } = require('path')
const concat = require('concat-stream')
const yaml = require('js-yaml')

const fname = resolve(__dirname, '../../../sheets/vim.md')

/**
 * Read a file into `{meta, body}`
 */

function read (fname) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(fname).pipe(
      fastmatter.stream(function (meta) {
        this.pipe(concat((body) => {
          // may need to body.toString() this
          resolve({ meta, body: body.toString() })
        }))
      })
    )
  })
}

/**
 * Lints
 */

function lint (file) {
  const messages = []
  return { file, status: 'ok', messages }
}

/**
 * Serialize a `{meta, body}` into a file.
 */

function serialize ({ meta, body }) {
  return `---\n${yaml.safeDump(meta).trim()}\n---\n${body}`
}

/*
 * Run
 */

read(fname)
  .then(result => {
    const { file, messages } = lint(result)
    const output = serialize(file)
    console.log(output)
    console.warn(messages)
  })


module.exports = { lint, serialize, read }
