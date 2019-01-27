require('@babel/register')({
  presets: ['@babel/typescript', '@babel/env'],
  extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs']
})

module.exports = require('./gatsby-node.ts')
