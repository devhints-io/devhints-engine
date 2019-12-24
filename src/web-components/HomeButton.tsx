import { Link } from 'gatsby'
import React from 'react'
import { homeLine } from '../web-icons'
import CSS from './HomeButton.module.css'

/**
 * Home button
 */

export const HomeButton = () => (
  <Link className={CSS.root} to='/'>
    <i className={CSS.icon} dangerouslySetInnerHTML={{ __html: homeLine }} />
  </Link>
)

/*
 * Export
 */

export default HomeButton
