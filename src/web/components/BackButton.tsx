import Link from 'gatsby-link'
import React from 'react'
import CSS from './BackButton.module.scss'

// TODO backbutton
export const BackButton = () => {
  return (
    <span>
      <Link className={CSS.link} to='/'>
        <i className={CSS.icon} dangerouslySetInnerHTML={{ __html: '...' }} />
      </Link>
    </span>
  )
}

export default BackButton
