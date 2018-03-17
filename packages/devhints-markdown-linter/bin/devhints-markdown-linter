#!/usr/bin/env node

// Argv
const node = process.argv.slice(0, 2)
const argv = process.argv.slice(2)
const { resolve } = require('path')

process.argv = [
  ...node,
  '--quiet',
  '--frail',
  '--rc-path',
  resolve(__dirname, '../remarkrc.json'),
  ...argv
]

// Pass-thru to remark-cli
require('remark-cli/cli.js')
