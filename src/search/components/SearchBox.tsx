import cn from 'classnames'
import { searchLine } from 'devhints-icons'
import React from 'react'
import LiveSearchInput from '../containers/LiveSearchInput'
import CSS from './SearchBox.module.css'

const SearchBox = () => {
  return (
    <label className={cn(CSS.root, CSS.isSmall)}>
      <span className={CSS.prefix}>devhints.io</span>
      <span className={CSS.sep}>/</span>

      <LiveSearchInput placeholder='Search 360+ cheatsheets' />

      <i
        className={CSS.icon}
        dangerouslySetInnerHTML={{ __html: searchLine }}
      />
    </label>
  )
}

export default SearchBox
