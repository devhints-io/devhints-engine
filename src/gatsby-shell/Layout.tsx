import React from 'react'
import Helmet from 'react-helmet'

/**
 * Props
 */

interface Props {
  children: React.ReactNode
}

/**
 * Base layout
 */

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      {children}
    </>
  )
}

const Meta = () => {
  return (
    <Helmet
      title='Devhints.io'
      meta={[
        // TODO meta tags for sheets
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
  )
}

export default Layout
