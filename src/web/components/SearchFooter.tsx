import React from 'react'
import CSS from './SearchFooter.module.scss'
import SearchFooterSection from './SearchFooterSection'

/**
 * Search footer in the cheatsheets page.
 */

const SearchFooter = () => (
  <aside className={CSS.root} data-js-no-preview>
    <div className={CSS.container}>
      <SearchFooterSection />
    </div>
  </aside>
)

export default SearchFooter
