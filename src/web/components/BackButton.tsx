import { mdArrowBack as arrowLeft } from 'devhints-icons'
import Link from 'gatsby-link'
import React from 'react'
import CSS from './BackButton.module.scss'

export const BackButton = () => {
  return (
    <span>
      <Link className={CSS.link} to='/'>
        <i
          className={CSS.icon}
          dangerouslySetInnerHTML={{ __html: arrowLeft }}
        />
      </Link>
    </span>
  )
}

export default BackButton
