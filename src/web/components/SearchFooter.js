/* @flow */
import React from 'react'

import HomeButton from './HomeButton'
import SearchBox from '../../search/components/SearchBox'

/**
 * Search footer in the cheatsheets page.
 */

export const SearchFooter = () => (
  <aside className="search-footer" data-js-no-preview>
    <div className="container">
      <SearchFooterSection />
    </div>

    <style jsx>{`
      @import 'src/web/styles/common';
      @import 'src/web/styles/components/search-footer';
    `}</style>
  </aside>
)

export const SearchFooterSection = () => (
  <section className="search-footer-section">
    <div className="search">
      <form className="search" action="/" method="get">
        <SearchBox />
      </form>
    </div>

    <div className="links">
      <HomeButton />
    </div>

    <style jsx>{`
      @import 'src/web/styles/common';
      @import 'src/web/styles/components/search-footer-container';
    `}</style>
  </section>
)

export default SearchFooter
