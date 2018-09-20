/* @flow */
import * as React from 'react'
import Helmet from 'react-helmet'

/**
 * Props
 */

export type Props = {
  children: React.Node
}

/**
 * Base layout
 */

function Layout ({ children }: Props) {
  return (
    <React.Fragment>
      <Helmet
        title='Devhints.io'
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      {children}
    </React.Fragment>
  )
}

export default Layout
