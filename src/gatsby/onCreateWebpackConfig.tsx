import { root } from './helpers'

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
  const noop = root('src/web/lib/helpers/noop.js')

  actions.setWebpackConfig({
    // Be sure our internals are babelified; unfortunately I can't make this work right now.
    // module: {
    //   rules: [
    //     {
    //       test: /\.jsx?$/,
    //       use: [
    //         loaders.js({
    //           exclude: /node_modules/,
    //           include: [/node_modules\/@devhints/, /node_modules\/styled-jsx/]
    //         })
    //       ]
    //     }
    //   ]
    // },

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
