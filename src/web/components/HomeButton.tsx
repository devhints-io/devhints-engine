import React from 'react'
import Link from 'gatsby-link'
import { homeLine } from 'devhints-icons'
import CSS from './HomeButton.module.css'

/**
 * Home button
 */

export const HomeButton = () => (
  <Link className={CSS.root} to="/">
    <i className={CSS.icon} dangerouslySetInnerHTML={{ __html: homeLine }} />
  </Link>
)

/*
 * Export
 */

export default HomeButton
