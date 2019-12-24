import React from 'react'
import css from 'styled-jsx/css'
import SearchFooterSection from './SearchFooterSection'

/**
 * Search footer in the cheatsheets page.
 */

const SearchFooter = () => (
  <aside className='SearchFooter' data-js-no-preview>
    <div className='container'>
      <SearchFooterSection />
    </div>

    <style jsx>{style}</style>
  </aside>
)

const style = css`
  .SearchFooter {
    padding-top: 16px;
    padding-bottom: 16px;
    background: var(--bg-gray);
    border-top: solid 1px var(--dark-line-color);
    border-bottom: solid 1px var(--dark-line-color);
  }

  .container {
    @extend %container;
  }
`

export default SearchFooter
