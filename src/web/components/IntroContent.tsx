import cn from 'classnames'
import React from 'react'
import CSS from './IntroContent.module.css'

export interface Props {
  children: React.ReactNode
  className?: string
}

/**
 * Intro content just below the cheatsheet title
 */

export const IntroContent = ({ children, className }: Props) => (
  <div className={cn(CSS.root, className)}>{children}</div>
)

/*
 * Export
 */

export default IntroContent
