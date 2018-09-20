const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  plugins: {
    'postcss-import': {},
    // Workaround for https://github.com/zeit/styled-jsx/issues/366
    'postcss-discard-comments': {},

    'postcss-apply': {},
    'postcss-preset-env': { stage: 0 },

    'postcss-browser-reporter': DEBUG && {},
    'postcss-reporter': DEBUG && {}
  }
}
