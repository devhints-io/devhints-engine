import React from 'react'
import Helmet from 'react-helmet'

/**
 * Props
 */

export interface Props {
  children: React.ReactNode
}

/**
 * Base layout
 */

function Layout({ children }: Props) {
  return (
    <>
      <Helmet
        title='Devhints.io'
        meta={[
          // TODO meta tags for sheets
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      {children}
    </>
  )
}

export default Layout
