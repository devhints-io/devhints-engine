import React from 'react'
import Helmet from 'react-helmet'

import '../../css-base'
import '../../css-legacy-components'
import '../../css-markdown'

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
  </>
)

export default CommonHead
