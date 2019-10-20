import React from 'react'
import Helmet from 'react-helmet'
import './CommonHead.css'

/**
 * Things that should be in all pages
 */

export const CommonHead = () => (
  <Helmet>
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css?family=Cousine'
    />
  </Helmet>
)

export default CommonHead
