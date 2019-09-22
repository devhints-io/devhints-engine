const babelOptions = {
  presets: ['@babel/preset-typescript', 'babel-preset-gatsby']
}

module.exports = require('babel-jest').createTransformer(babelOptions)
