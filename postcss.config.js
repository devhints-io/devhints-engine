const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = ctx => {
  return {
    plugins: [
      require('postcss-import')(),

      require('postcss-apply')(),
      require('postcss-preset-env')({
        stage: 0,
        preserve: false,
        insertBefore: {
          'all-property': require('postcss-color-mod-function')
        }
      }),

      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
}
