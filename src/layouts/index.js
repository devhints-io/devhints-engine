/* @flow */
import * as React from 'react'
import Helmet from 'react-helmet'

import '../styles/index.css'

/**
 * Props
 */

export type Props = {
  children: () => React.Node
}

/**
 * Base layout
 */

function TemplateWrapper ({ children }: Props) {
  return (
    <div>
      <Helmet
        title='Devhints.io'
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <div>{children()}</div>
    </div>
  )
}

export default TemplateWrapper
