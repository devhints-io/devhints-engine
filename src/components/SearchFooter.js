import React from 'react'

/**
 * Search footer in the cheatsheets page.
 */

export const SearchFooter = () => (
  <footer className='SearchFooter' data-js-no-preview>
    <div className='container'>
      <SearchFooterSection />
    </div>

    <style jsx>{`
      @import 'src/styles/common';
      @import 'src/styles/components/search-footer';
    `}</style>
  </footer>
)

export const SearchFooterSection = () => (
  <div className='SearchFooterSection'>
    <div className='search'>
      <form className='search' action='/' method='get'>
        <SearchBox />
      </form>
    </div>

    <div className='links'>
      <HomeButton />
    </div>

    <style jsx>{`
      @import 'src/styles/common';
      @import 'src/styles/components/search-footer-container';
    `}</style>
  </div>
)

export const SearchBox = () => (
  <label className='search-box -small'>
    <span className='prefix'>devhints.io</span>
    <span className='sep'>/</span>
    <input name='' type='text' value='' placeholder='Search 367+ cheatsheets' />
  </label>
)

export const HomeButton = () => (
  <a className='home-button' href='/'>
    <i />
  </a>
)

export default SearchFooter
