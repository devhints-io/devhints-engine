import React from 'react'
import { Styleguide } from '../penpad'

const StyleguidePage = () => {
  return (
    <Styleguide
      specimens={{
        index: () => <div>Hello there</div>
      }}
    />
  )
}

export default StyleguidePage
