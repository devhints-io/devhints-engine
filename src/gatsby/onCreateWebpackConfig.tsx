interface Props {
  actions: {
    setWebpackConfig: (config: any) => void
  }
  loaders: any
}

/**
 * Modify Webpack configuration.
 *
 * This makes it so that jQuery isn't part of the final JS bundle, saving up
 * some space.
 */

const onCreateWebpackConfig = ({ actions }: Props) => {
  const noop = require.resolve('../helpers/noop.js')

  actions.setWebpackConfig({
    // isotope-layout tries to require('jquery'), but let's let that
    // fail silently. We don't want it to load jQuery.
    resolve: {
      alias: {
        jquery: noop,
        jsdom: noop
      }
    }
  })
}

export default onCreateWebpackConfig
