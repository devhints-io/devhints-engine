import React from 'react'
import { Penpad } from '../penpad'

const StyleguidePage = () => {
  return (
    <Penpad
      pages={{}}
      specimens={{
        ...require('./stuff.guides.tsx').default
      }}
    />
  )
}

export default StyleguidePage
