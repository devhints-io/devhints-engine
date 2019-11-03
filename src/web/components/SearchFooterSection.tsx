import React from 'react'
import SearchBox from '../../web-search/comps/SearchBox'
import HomeButton from './HomeButton'
import CSS from './SearchFooterSection.module.css'

const SearchFooterSection = () => (
  <section className={CSS.root}>
    <div className={CSS.search}>
      <form action='/' method='get'>
        <SearchBox />
      </form>
    </div>

    <div className={CSS.links}>
      <HomeButton />
    </div>
  </section>
)

export default SearchFooterSection
