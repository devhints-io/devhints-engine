import React from 'react'
import Helmet from 'react-helmet'

import CssBase from '../../css-base'
import CssMarkdown from '../../css-markdown'
import CssLegacyComponents from '../../css-legacy-components'

/**
 * Things that should be in all pages
 */

export const CommonHead = () => (
  <>
    <Helmet>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Cousine'
      />
    </Helmet>
    <CssBase />
    <CssMarkdown />
    <CssLegacyComponents />
  </>
)

export default CommonHead
