import React from 'react'
import { Penpad } from '../penpad'

const StyleguidePage = () => {
  return (
    <Penpad
      pages={{}}
      specimens={{
        ...require('../styleguides/stuff.specimens.tsx').default
      }}
    />
  )
}

export default StyleguidePage
