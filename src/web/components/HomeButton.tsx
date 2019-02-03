import { homeLine } from 'devhints-icons'
import Link from 'gatsby-link'
import React from 'react'
import CSS from './HomeButton.module.scss'

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
