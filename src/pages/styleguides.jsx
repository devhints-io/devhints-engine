import React from 'react'
import { Penpad, combineContext } from '../penpad'

const StyleguidePage = () => {
  const specimens = combineContext(
    require.context('../', true, /\.specimens\.(jsx?|tsx?)$/)
  )

  return <Penpad pages={{}} specimens={specimens} />
}

export default StyleguidePage
