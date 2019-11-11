import React from 'react'
import { HomeMeta } from '../Meta'

/**
 * Props
 */

interface Props {
  children: React.ReactNode
}

/**
 * Base layout
 */

const Layout = ({ children }: Props) => {
  return (
    <>
      <HomeMeta />
      {children}
    </>
  )
}

export default Layout
