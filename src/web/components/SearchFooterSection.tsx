import React from 'react'
import SearchBox from '../../web-search/SearchBox'
import HomeButton from './HomeButton'
import CSS from './SearchFooterSection.module.scss'

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
