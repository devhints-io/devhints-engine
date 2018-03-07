import React from 'react'
import Link from 'gatsby-link'

function TopNav () {
  return (
    <nav className='top-nav' data-js-no-preview role='navigation'>
      <div className='container'>
        <div className='left'>
          <Link className='home back-button' to='/' />
        </div>

        <Link className='brand' to='/'>
          Devhints
        </Link>
      </div>
    </nav>
  )
}

export default TopNav
