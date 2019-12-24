import React from 'react'
import css from 'styled-jsx/css'
import SearchBox from '../web-search/comps/SearchBox'
import HomeButton from './HomeButton'

const SearchFooterSection = () => (
  <section className='SearchFooterSection'>
    <div className='search'>
      <form action='/' method='get'>
        <SearchBox />
      </form>
    </div>

    <div className='links'>
      <HomeButton />
    </div>

    <style jsx>{CSS}</style>
  </section>
)

const CSS = css`
  .SearchFooterSection {
    display: flex;
  }

  .search {
    flex: 0 1 640px;
  }

  .links {
    @extend %gutter-padding-left;
    flex: 0 1 auto;
    margin-left: auto;
  }
`

export default SearchFooterSection
