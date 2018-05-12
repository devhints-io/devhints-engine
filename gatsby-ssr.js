// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-styled-jsx/src/gatsby-ssr.js
import flush from 'styled-jsx/server'

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    const css = flush()
    setHeadComponents([css])
  }
}
