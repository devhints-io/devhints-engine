const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': { browsers: '> 1%' },
    'postcss-browser-reporter': DEBUG && {},
    'postcss-reporter': DEBUG && {}
  }
}
