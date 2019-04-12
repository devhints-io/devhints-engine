import Link from 'gatsby-link'
import React from 'react'
import CSS from './BackButton.module.scss'
import BackIcon from '-!react-svg-loader!clarity-icons-svg/essential/arrow-outline.svg'

// TODO backbutton
export const BackButton = () => {
  return (
    <span>
      <Link className={CSS.link} to='/'>
        <BackIcon className={CSS.icon} />
      </Link>
    </span>
  )
}

export default BackButton
