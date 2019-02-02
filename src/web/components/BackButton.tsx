import cn from 'classnames'
import { mdArrowBack as arrowLeft } from 'devhints-icons'
import Link from 'gatsby-link'
import React from 'react'
import CSS from './BackButton.module.scss'

export const BackButton = () => {
  return (
    <span>
      <Link className={cn(CSS.link, CSS.home)} to='/'>
        <i
          className={cn(CSS.icon)}
          dangerouslySetInnerHTML={{ __html: arrowLeft }}
        />
      </Link>
    </span>
  )
}

export default BackButton
