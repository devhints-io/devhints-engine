// @ts-ignore
import BackIcon from '-!react-svg-loader!clarity-icons-svg/essential/arrow-outline.svg'
import { Link } from 'gatsby'
import React from 'react'
import CSS from './BackButton.module.css'

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
