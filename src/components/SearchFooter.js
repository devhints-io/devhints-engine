import React from 'react'

/**
 * Search footer in the cheatsheets page.
 */

export const SearchFooter = () => (
  <footer className='search-footer' data-js-no-preview>
    <div className='container'>
      <div className='search-footer-section'>
        <div className='search'>
          <form className='search' action='/' method='get'>
            <SearchBox />
          </form>
        </div>
        <div className='links'>
          <a className='home-button' href='/'>
            <i />
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`
      @import 'src/styles/common';
      @import 'src/styles/components/search-footer-container';
      @import 'src/styles/components/search-footer';
    `}</style>
  </footer>
)

export const SearchBox = () => (
  <label className='search-box -small'>
    <span className='prefix'>devhints.io</span>
    <span className='sep'>/</span>
    <input name='' type='text' value='' placeholder='Search 367+ cheatsheets' />
  </label>
)

export default SearchFooter
