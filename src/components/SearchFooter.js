import React from 'react'

/**
 * Search footer in the cheatsheets page.
 */

export default () => (
  <footer className='search-footer' data-js-no-preview>
    <div className='container'>
      <div className='search-footer-section'>
        <div className='search'>
          <form className='search' action='/' method='get'>
            <label className='search-box -small'>
              <span className='prefix'>devhints.io</span>
              <span className='sep'>/</span>
              <input
                name=''
                type='text'
                value=''
                placeholder='Search 367+ cheatsheets'
              />
            </label>
          </form>
        </div>
        <div className='links'>
          <a className='home-button' href='/'>
            <i />
          </a>
        </div>
      </div>
    </div>
  </footer>
)
