module.exports = () =>
  require('@babel/register')({
    presets: ['@babel/typescript', '@babel/env'],
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs']
  })
