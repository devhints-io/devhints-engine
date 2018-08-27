/* @flow */
import * as React from 'react'
import css from 'styled-jsx/css'

export type Props = {
  children: React.Node,
  className?: string
}

/**
 * Intro content just below the cheatsheet title
 */

export const IntroContent = ({ children, className }: Props) => (
  <div className={`intro-content ${className || ''}`}>
    {children}

    <style jsx>{STYLE}</style>
  </div>
)

/*
 * CSS
 */

export const STYLE = css`
  @media (min-width: 481px) {
    .intro-content {
      max-width: 480px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

/*
 * Export
 */

export default IntroContent
