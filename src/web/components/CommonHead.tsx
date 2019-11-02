import React from 'react'
import Helmet from 'react-helmet'

import './CommonHead.css'

import CssBase from '../../css-base'
import CssMarkdown from '../../css-markdown'

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
  </>
)

export default CommonHead
